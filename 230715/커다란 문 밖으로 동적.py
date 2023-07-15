def solver_DP(input1, input2, input3):
    minimum = min([input1, input2, input3])
    maximum = max([input1, input2, input3])
    memoization_table = [True]
    check_list = []

    for num in range(maximum):
        possible_range = [num//input1, num//input2, num//input3]
        memoization_table.append(False)
        for i in range(0, possible_range[0] + 1):
            for j in range(0, possible_range[1] + 1):
                for k in range(0, possible_range[2] + 1):
                    if input1 * i + input2 * j + input3 * k == num:
                        memoization_table[num] = True
                    break
            else:
                continue
            break
        else:
            num += 1
            continue
            break

    while len(check_list) <= minimum:
        memoization_table.append(False)
        if memoization_table[num - input1] \
            or memoization_table[num - input2] \
            or memoization_table[num - input3]:
            memoization_table[num] = True
            check_list.append(num)
        else:
            memoization_table[num] = False
            check_list = []
        num += 1

    answer = check_list[0] - 1
    return answer

solution = solver_DP(7, 11, 17)
print(solution)