contactos = []
while True:
    print("                 ")
    print("--- MENÚ CRUD ---")
    print("1. Crear contacto")
    print("2. Listar contactos")
    print("3. Buscar contacto")
    print("4. Modificar contacto")
    print("5. Borrar contacto")
    print("6. Salir")
    print("                 ")
    i = input("Elige una opción:")

    match i:
        case "1":
            nombre = input("introduzca un nombre: ")
            email = input("introduzca el correo electronico correspondiente: ")
            telefono = input("introduzca el numero de telefono corresponiente: ")
            contactos.append({"nombre": nombre, "email": email, "telefono": telefono})
            print("contacto creado correctamente")
            
        case "2":
            #Poner la salida bonita
            if not contactos:
                print("No hay contactos")
            else:
                for y,cont in enumerate(contactos):
                    print(y,cont)

        case "3":
            #poner if en caso de que no hayamos puesto ningun contacto
            busc = input("Dame un nombre, email o telefono: ").lower()
            encontrados = []
            for con in contactos:
                if busc in con["nombre"].lower() or busc in con["email"].lower() or busc in con["telefono"]:
                    encontrados.append(con)
            if encontrados:
                for c in encontrados:
                    print(f"- {c['nombre']} - {c['email']} - {c['telefono']}")
        case "4":
            #poner if en caso de que no hayamos puesto ningun contacto
            for y,cont in enumerate(contactos):
                print(y,cont)
            ind = input("Indica el indice a modificar")
            nom_mod = input("Indica el nombre a cambiar o 'enter' para mantener")
            email_mod = input("Indica el email a cambiar o 'enter' para mantener")
            tel_mod = input("Indica el telefono a cambiar o 'enter' para mantener")

            for y,cont in enumerate(contactos):
                if y == ind:
                    if nom_mod != "":
                        cont["nombre"] = nom_mod
                    elif email_mod != "":
                        cont["telefono"] = email_mod
                    elif tel_mod != "":
                        cont["telefono"] = tel_mod
                contactos1 = []
                contactos1.append({"nombre": nom_mod, })
                contactos
            print("contacto modificado correctamente")
            print(contactos)

        case "5":
            #poner if en caso de que no hayamos puesto ningun contacto
            print(5)
        case "6":
            break
        case _:
            print("introduzca un numero valido")