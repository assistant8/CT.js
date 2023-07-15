//!
function solution(bridge_length, weight, truck_weights) {
    let sec = 0; // 경과시간
    let sum = 0; // 다리에 있는 트럭의 무게합
    const passing = []; // 건너는 중인 트럭 배열
    while (truck_weights.length || passing.length) { 
      if (weight >= sum + truck_weights[0] && passing.length <= bridge_length) { 
        const truck = truck_weights.shift(); 
        sum += truck; 
        passing.push([truck, sec + bridge_length]); 
        sec++; 
      } else { 
        const [truck, passedSec] = passing.shift(); 
        if (sec < passedSec) { 
          sec = passedSec; 
        }
        sum -= truck; 
      }
    }
    return sec + 1; 
}

