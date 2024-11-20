#  Estoque de Loja Virtual: Simule um estoque para uma loja virtual com 5 produtos diferentes.
# - Cada produto começa com um número aleatório de itens em estoque.
# - Permita que o usuário faça "compras" simuladas.
# - Mostre a quantidade restante de cada produto e alerte se algum estiver esgotado.
import random as rd

def itensEmEstoque(min, max):
    estoque = rd.randint(min, max)
    return estoque

estoque = {
    '1 - calça': itensEmEstoque(0, 10),
    '2 - blusa': itensEmEstoque(0, 24),
    '3 - tennis': itensEmEstoque(1, 10),
    '4 - brinco': itensEmEstoque(4, 13),
    '5 - bolsa': itensEmEstoque(0, 8)
}

historicoDeVendas = []

while True:
    print('===== LOJA VIRTUAL =====')
    print('Para sair da aplicação digite 0.')
    print('Nosso estoque: \n')
    for item, quantidade in estoque.items():
        print(f'{item}: {quantidade} unidades')

    pergunta = int(input('\nOque você deseja comprar (Digite o numero que vem antes do item)? '))

    if pergunta == 0:
            print("\nSaindo da loja... Obrigado por visitar!")
            break

    if pergunta == 1:
        if estoque['1 - calça'] != 0:
             comprar = int(input('deseja comprar quantas calças: '))

             estoque['1 - calça'] -= comprar
             historicoDeVendas.append(f'Saída de calça: {comprar}')
        else:
             print('Item sem estoque.\n')
    
    elif pergunta == 2:
        if estoque['2 - blusa'] != 0:
             comprar = int(input('deseja comprar quantas blusa: '))

             estoque['2 - blusa'] -= comprar
             historicoDeVendas.append(f'Saída de blusa: {comprar}')
        else:
             print('Item sem estoque.')

    elif pergunta == 3:
        if estoque['3 - tennis'] != 0:
             comprar = int(input('deseja comprar quantas tennis: '))

             estoque['3 - tennis'] -= comprar
             historicoDeVendas.append(f'Saída de tennis: {comprar}')
        else:
             print('Item sem estoque.')

    elif pergunta == 4:
        if estoque['4 - brinco'] != 0:
             comprar = int(input('deseja comprar quantas brinco: '))

             estoque['4 - brinco'] -= comprar
             historicoDeVendas.append(f'Saída de brinco: {comprar}')
        else:
             print('Item sem estoque.')

    elif pergunta == 5:
        if estoque['5 - bolsa'] != 0:
             comprar = int(input('deseja comprar quantas bolsa: '))

             estoque['5 - bolsa'] -= comprar
             historicoDeVendas.append(f'Saída de bolsa: {comprar}')
        else:
             print('Item sem estoque.')

    else:
        print('Desculpa, não entendi. Tente novamente...')

print('Volte Sempre!')