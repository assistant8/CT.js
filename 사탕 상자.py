class candy_box:
    def __init__(self, nametag, candy):
        self.nametag = nametag
        self.candy = candy
        if self.nametag == self.candy:
            self.isCorrect = True
        else:
            self.isCorrect = False
    
    def open_box(self):
        if self.nametag == self.candy:
            self.isCorrect = True
        else:
            self.isCorrect = False
        print("================================")
        print("사탕 상자의 이름은", self.nametag)
        print("들어있는 사탕은", self.candy)
        print("사탕 상자의 이름과 사탕의 일치 여부 :", self.isCorrect)
        print("================================")
