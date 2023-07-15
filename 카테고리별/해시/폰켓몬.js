function solution(nums) {
    //이전에 set 몰라서 set 구현함

    var answer = 0;
    var set = new Set(nums);

    // 인풋배열/2 과 Set 길이 중 작은것 택함
    answer = set.size <= nums.length / 2 ? set.size : nums.length / 2;
    return answer;
  }
  