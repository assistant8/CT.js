// function getDistinctSong(arr, idx) {
//     let count = 0;
//     let remain = 3;
//     for(let i=idx; i<arr.length; i++) {
//         count++;
//         for(let k=0; k<arr[i]; k++) {
//             remain--;
//             if(remain===0) return count;
//         }
//     }
// }

// console.log(getDistinctSong([2,3,1,4], 0))
// console.log(getDistinctSong([1,3,1,4], 0))
// console.log(getDistinctSong([2,3,1,4], 1))
// console.log(getDistinctSong([2,2,1,4], 1))
// console.log(getDistinctSong([2,1,1,4], 1))
// console.log(getDistinctSong([2,3,1,4], 2))
// console.log(getDistinctSong([2,3,1,4], 3))

function sol(play_list, listen_time) {
    const playlist = [...play_list, ...play_list]
    // console.log(playlist)
    const n = play_list.length;
    let maxSongs = 0;

    for (let i = 0; i < playlist.length-1; i++) { //0,1,2,3,4...
        const songLength = playlist[i]; //2,3,1,4,2 ...
        for(let k=0; k<songLength; k++) {
            let start = songLength-k;
            let copy = playlist.slice();
            copy[i] = start;
            // console.log("copy", copy)
            let distinctSongs = getDistinctSong(copy, i);
            maxSongs = Math.max(maxSongs, distinctSongs);
            if(maxSongs>=n) return n;
            // console.log("max", maxSongs, distinctSongs)
        }
    }
    return maxSongs

    function getDistinctSong(arr, idx) {
        let count = 0;
        let remain = listen_time;
        for(let i=idx; i<arr.length; i++) {
            count++;
            for(let k=0; k<arr[i]; k++) {
                remain--;
                if(remain===0) return count;
            }
        }
    }
}

console.log(sol([2, 3, 1, 4], 3)); // 3
// console.log(sol([1,2,3,4], 5)); // 4
// console.log(sol([1,2,3,4], 20)); // 4

