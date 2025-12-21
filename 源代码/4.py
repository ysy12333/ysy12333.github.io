import random, time

while True:
    print("随机答案生成")
    a2=input("答案个数/按“e”退出：")
    if a2 == "e" :
        break
    try:
        a=int(a2)
    except:
        print("请输入正整数")
    
    if a <= 0:
        print("请输入正整数")

    for i in range(a):
        c2 = random.randint(1, 4)
        c = int(c2)
        if c == 1:
            print(f"{i+1}:A")
        elif c == 2:
            print(f"{i+1}:B")
        elif c == 3:
            print(f"{i+1}:C")
        elif c == 4:
            print(f"{i+1}:D")
        else:
            print("程序错误，"""" c2 = random.randint(1, 4) """"")
        time.sleep(1)