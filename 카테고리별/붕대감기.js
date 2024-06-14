function solution(bandage, health, attacks) {
    const [recoveryTime, recoveryPerSec, recoveryAdd] = bandage;
    let current = health;
    const last = attacks[attacks.length-1][0];
    let success = 0;
    for(let i=1; i<=last; i++) {
        const attackTime = attacks[0][0];
        if(i===attackTime) {
            const [time, damage] = attacks.shift();
            success = 0;
            current -= damage;
        } else {
            current = current+recoveryPerSec >= health ? health : current+recoveryPerSec;
            if(success < recoveryTime) success++;
            if(success === recoveryTime) { // 현 시점에 위에서 suc++해서 달성했어도 접근가능하도록 
                success = 0;
                current += recoveryAdd;
            }
        }
        // console.log(i, current, success)
        if(current <= 0) return -1;
    }
    return current <= 0 ? -1 : current;
}

// 초마다 어택타임 있는지 체크
// 있으면 해당 어택 shift, 연속 성공 0, 현재체력-[1]
// 없으면 cur+=recoverypersec
    // 연속 성공 < recoveryTime 이면 success++
    // 연속 성공 == recoveryTime 이면 cur += recoveryAdd, 연속 성공 = 0
// cur <= 0 이면 -1
// 최대 체력 고려 