num1 = float(input("Enter first number: "))
op = input("Enter operatotr: ")
num2 = float(input("Enter last number: "))


if op == "+":
    print(num1 + num2)
elif op == "-":
    print(num1-num2)
elif op == "/":
    print(num1/num2)
elif op == "*":
    print(num1 * num2)
else:
    print("Invalid operartor")