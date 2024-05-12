class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 완전 이진 트리에 노드 삽입 함수
function insertIntoCompleteBinaryTree(input) {
    if (!input || input.length === 0) {
        return null;
    }
    
    // 입력된 문자열을 각각의 노드로 만들어 완전 이진 트리에 삽입
    let nodes = input.split('');
    let rootNode = null;
    let queue = [];

    for (let i = 0; i < nodes.length; i++) {
        let newNode = new TreeNode(nodes[i]);
        // console.log(queue, "\n")

        if (rootNode === null) { // 맨 처음 a
            rootNode = newNode;
            queue.push(rootNode);
        } else { 
            let current = queue[0]; // 자신에게 왼오른 꽉 채워지기 전까지 queue에 있으며 current
            if (current.left === null) { 
                current.left = newNode;
            } else if (current.right === null) {
                current.right = newNode;
                queue.shift(); // 현재 노드의 왼오른 자식이 모두 차면 큐에서 제거
            }
            //무조건 큐에 들어감, 윗 노드들이 꽉 차고 나가면 queue[0]이 되어 자신에게도 자식이 생길테니
            queue.push(newNode); 
        }
    }

    // console.log("rootNode:", rootNode);

    return rootNode;
}

// 후위 순회(postorder traversal) 함수
// 재귀를 이용함
function postorderTraversal(root) {
    if (root === null) {
        return '';
    }

    let result = '';
    result += postorderTraversal(root.left);
    result += postorderTraversal(root.right);
    result += root.value;

    return result;
}

// 주어진 입력을 완전 이진 트리에 삽입하고 후위 순회 결과 반환
function createCompleteBinaryTree(input) {
    let rootNode = insertIntoCompleteBinaryTree(input);
    if (rootNode === null) {
        return '';
    }
    return postorderTraversal(rootNode);
}

// 입력과 출력 테스트
let input = "ABCDEF";
let output = createCompleteBinaryTree(input);
console.log("Input:", input);
console.log("Output (Postorder traversal):", output); // 예상 출력: DEBFCA

// 후위 순회는 재귀를 이용함
// 왼->오른->자신 순으로 재귀함수 호출하면
// 자연스레 맨 왼쪽 리프노드부터 시작하여 오른 리프노드, 그 부모, 그리고 오른 형제, 그그 부모 순으로..
