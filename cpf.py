cpf = input("CPF: ")
cpf_semUltimoDigitos = ""

total = 0
total2 = 0
for i,numero in enumerate(cpf):
    if i < 9:
        cpf_semUltimoDigitos += numero

for i,numero_cpf in enumerate(cpf_semUltimoDigitos):
    multi = int(numero_cpf) * (i + 1)
    total += multi


penultimo_digito = total % 11

if(penultimo_digito == 10):
  
    cpf_semUltimoDigitos += "0"
else:
   
    cpf_semUltimoDigitos += str(penultimo_digito)

for index,number_cpf in enumerate(cpf_semUltimoDigitos):
    mult =  int(number_cpf) * (index)
    total2 += mult


if(total2 % 11 == 10):
    cpf_semUltimoDigitos += "0"
else:
    cpf_semUltimoDigitos += str(total2 % 11)

print(cpf_semUltimoDigitos)

