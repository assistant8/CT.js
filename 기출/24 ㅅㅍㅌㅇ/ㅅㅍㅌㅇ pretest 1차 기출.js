// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const input = [];
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	const n = Number(input[0]);
	let array = input.slice(1,n+1).map(e=>e.split(" ").map(Number))
	// console.log(n, array);
	
	let count = 0;
	let output = [];
	for(let i=0; i<n; i++) {
		for(let k=0; k<n; k++) {
			if(array[i][k]===1) {
				output.push(bfs([i,k]));
				count++;
			}
		}
	}
	console.log(count)
	output.sort((a,b)=>a-b);
	output = output.join(" ");
	console.log(output)
	
	function bfs(first) {
		const needVisit = [first];
		const px = [0, 0, -1, 1];
		const py = [1, -1, 0, 0];
		let bfsCount = 0;
		
		while(needVisit.length!==0) {
			const [x,y] = needVisit.shift();
			for(let j=0; j<4; j++) {
				const X = x+px[j];
				const Y = y+py[j];
				if(X>=0 && X<n && Y>=0 && Y<n && array[X][Y]===1) {
					array[X][Y]++;
					bfsCount++;
					needVisit.push([X,Y]);
				}
			}
		}
		// console.log(array)
		return bfsCount;
	}
	
	process.exit();
})();

	
// 6
// 0 1 1 0 0 0
// 0 1 1 0 1 1
// 0 0 0 0 1 1
// 0 0 0 0 1 1
// 1 1 0 0 1 0
// 1 1 1 0 0 0

// 기본 형태
const readline = require('readline');

(async () => {
let rl = readline.createInterface({ input: process.stdin });

	for await (const line of rl) {
		console.log('Hello Goorm! Your input is', line);
		rl.close();
	}
	
	process.exit();

})();