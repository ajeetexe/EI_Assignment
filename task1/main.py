from num_dict import num, postion


def for_two_digit(n, l):
    if int(n[0:2]) < 20:
        return num[n[0:2]] + " " + postion[l] + " "
    else:
        return num[n[0] + "0"] + " " + num[n[1]] + " " + postion[l] + " "

def for_one_digit(n,l):
    return num[n[0]] + " " +  postion[l] + " "

def convert_to_word(number):
    if len(number) > 9:
        return " Number is greater than 9"
    res = ""
    while len(number):
        length = len(number)
        if (length % 2 != 0 or length == 2) and length != 3:
            res = res + for_two_digit(number, length)
            number = number[2:]
        else:
            res = res + for_one_digit(number,length)
            number = number[1:]

    return res


number = input("Enter a number (digit not more than 9): ")
print(convert_to_word(number))
