from multiprocessing import Pool
from collections import defaultdict

def map_function(line):
    word_count = defaultdict(int)
    words = line.split()
    for word in words:
        word_count[word] += 1
    return dict(word_count)

def reduce_function(word_counts_list):
    total_word_count = defaultdict(int)
    for word_count in word_counts_list:
        for word, count in word_count.items():
            total_word_count[word] += count
    return dict(total_word_count)

def main():
    input_data = [
        "the fact that they know about your word that they can not know the reason",
    ]

    # Map 단계: 각 라인에 대해 map_function을 병렬로 실행
    with Pool(3) as pool:
        mapped_results = pool.map(map_function, input_data)

    # Reduce 단계: map_function의 결과를 합치기
    reduced_result = reduce_function(mapped_results)

    # 결과 출력
    for word, count in reduced_result.items():
        print(f"{word}\t{count}")

if __name__ == "__main__":
    main()
