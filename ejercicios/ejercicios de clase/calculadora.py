def recoger_num():
    num1 = float(input("introduce el primer numero: ")) #al poner el input arriba ya no hay que ir repitiendolo
    num2 = float(input("introduce el segundo numero: "))
    return num1, num2

def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir (a, b):
    return a / b

while True:
    print("1. Sumar")
    print("2. restar")
    print("3. dividir")
    print("4. multiplicar")
    print("-------------")
    opcion = int(input("introduce una opción: "))
    num1, num2 = recoger_num() #descomposición de la tupla

    if opcion == 1:
        print(sumar(num1, num2)) #podriamos descomponer directamente dentro
        #el resturn te lo devuelve pero no lo muestra en el terminal
    if opcion == 2:
        print(restar(num1, num2))
