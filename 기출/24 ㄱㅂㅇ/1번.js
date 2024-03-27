function solution(filePaths, commands) {
    for (let command of commands) {
        const [action, path] = command.split(' ');
        
        switch(action) {
            case 'cd':
                filePaths = changeDirectory(filePaths, path);
                break;
            case 'mkdir':
                filePaths.push(path);
                break;
            case 'rmdir':
                filePaths = removeDirectory(filePaths, path);
                break;
            default:
                console.log('Invalid command:', action);
        }
    }
    
    return filePaths[filePaths.length - 1];
}

function changeDirectory(filePaths, path) {
    const newPath = filePaths.filter(filePath => filePath.startsWith(path));
    return newPath.length ? newPath : filePaths;
}

function removeDirectory(filePaths, path) {
    return filePaths.filter(filePath => !filePath.startsWith(path));
}

// Example usage:
const initialFilePaths = ["C:/root/folder1", "C:/root/folder2/file1", "C:/root/folder2/file2"];
const commands = ["cd C:/root/folder2", "mkdir C:/root/folder2/newFolder", "rmdir C:/root/folder2/newFolder"];
console.log(solution(initialFilePaths, commands)); // Output: C:/root/folder2/file1



// 노트 참고 
// 파일 구조를 트리 형태로 그려서 트리 구조를 구현해야 했는데
// 모든 파일의 경로를 string으로 가지고 있으면 되구나
// 그리고 현재 경로를 전역 변수로 가지고
// 현재 경로와 filepath 배열 값들은 모두 절대 경로로 유지 

