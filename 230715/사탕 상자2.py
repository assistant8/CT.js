import random

candy_pool = ["호박", "박하", "혼합"]
candy_name = []

pick_candy = random.choice(candy_pool)

for i in range(3):
    while (pick_candy in candy_name) or (pick_candy == candy_pool[i]):
        pick_candy = random.choice(candy_pool)
    candy_name.append(pick_candy)


candy_box1 = candy_box(candy_pool[0], candy_name[0])
candy_box2 = candy_box(candy_pool[1], candy_name[1])
candy_box3 = candy_box(candy_pool[2], candy_name[2])
