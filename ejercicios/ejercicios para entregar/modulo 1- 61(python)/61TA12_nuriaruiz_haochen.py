import random

print("                               ")
print("¡Juguemos a hundir la flota!")
print("                               ")
ANCHO = 11
ALTO = 10
num = 1

tablero = [[' ' for _ in range(ANCHO-1)] for _ in range(ALTO-1)]

def imprimir_tablero():
    print(" ", end="")
    for j in range(1, ANCHO):
        print(f" {j} ", end="")
    print()
    
    for i in range(ALTO-1):
        print(f"{chr(ord("A") + i)}", end = "")
        for j in range(ANCHO-1):
            if tablero[i][j] == ' ':
                print(" - ", end="")
            else:
                print(f"{tablero[i][j]}", end="")
        print()

#aqui va el codigo de donde están los barcos
def generar_barcos():
    barcos_de_1 = random.sample(range(1, 100), 4)
    barcos_de_2 = random.sample(range(1, 100), 3)
    barcos_de_3 = random.sample(range(1, 100), 2)
    barcos_de_4 = random.sample(range(1, 100), 1)
    return barcos_de_1, barcos_de_2, barcos_de_3, barcos_de_4


while True:
    imprimir_tablero()
    entrada = input("\nIntroduce una coordenada (ej. A1): ").upper()
    
    if len(entrada) < 2 or not entrada[0].isalpha() or not entrada[1:].isdigit():
        print("Formato incorrecto. Usa letra + número (ej. A1)")
        continue
    
    fila = ord(entrada[0]) - ord('A')
    columna = int(entrada[1:]) - 1
    
    if tablero[fila][columna] != ' ':
        print("               ")
        print("Ya has disparado a esta posición. Elige otra.")
        continue
    
    # Verificar si hay barco
    if entrada in generar_barcos():
        tablero[fila][columna] = ' X '
        print("         ")
        print("¡Impacto!")
    else:
        tablero[fila][columna] = ' O '
        print("        ")
        print("¡Agua!")

    #numero de intentos
    contador = 0
    contador += 1
    if contador == 40:
        print("Lo siento, no has hundido la flota.")
        break

    #Ha ganado. (20 pixeles)
    