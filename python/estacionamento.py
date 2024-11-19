# Contagem de Estacionamento: Implemente um contador para um estacionamento que suporta 10 carros.
# - Cada vez que um carro entra ou sai, atualize o número de vagas disponíveis.
# - Se o estacionamento estiver cheio, exiba uma mensagem avisando.
# - Adicione um input para ver o histórico de entradas e saídas.

estacionamento = ['A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8', 'I9', 'J10',]
info = {
    1: 'Estacionar Carro',
    2: 'Retirar Carro',
    3: 'Historico',
    4: 'Sair'
}
vagasOcupadas = []
historicoDeVagas = []

#esse loop cuida de fazer com que o usuario possa sempre se manter dentro da aplicação. So saira dele ao digitar '4' na pergunta inicial
while True:
    print('\n=== Estacionamento ===')
    print(f'Vagas disponíveis: {len(estacionamento) - len(vagasOcupadas)}')
    print(info)

    opcao = int(input("Escolha uma opção: "))

    #cada if que recebe a opção escolhida pelo usuario faz o processamento do que deve ser feito ao escolher aquele pedido
    if opcao == 1:
         print('Estacionar Carro')

         if len(vagasOcupadas) == len(estacionamento):
            print("O estacionamento está cheio!")
         else:
             print(f"Vagas disponíveis: {set(estacionamento) - set(vagasOcupadas)}")
             colocarVaga = input("Escolha uma vaga: ").strip()
             if colocarVaga in estacionamento and colocarVaga not in vagasOcupadas:
                 vagasOcupadas.append(colocarVaga) #add a vaga escolhida na lista vagasOcupadas
                 historicoDeVagas.append(f'Entrada: {colocarVaga}') #add no historico também
                 print(f'Carro estacionado. Local: {colocarVaga}')
             else:
                 print('Vaga Invalida, verifique o historico de vagas.')
    elif opcao == 2:
        print('Retirar Carro do estacionamento')
        if not vagasOcupadas:
            print('Nenhuma vaga ocupada.')
        else:
            print(f'Vagas Ocupada: {vagasOcupadas}')
            retirarVaga = input('Digite o nome da vaga que deseja liberar: ').strip()
            if retirarVaga in vagasOcupadas:
                vagasOcupadas.remove(retirarVaga) #ele remove a vaga desejada de dentro da lista vagasOcupadas
                historicoDeVagas.append(f'Saída: {retirarVaga}') # e add no historico a movimentação
                print(f'Carro retirado da vaga: {retirarVaga}')
            else:
                print('Vaga invalida')

    elif opcao == 3:
        print('\n HISTORICO DO ESTACIONAMENTO')
        print(historicoDeVagas)
    
    elif opcao == 4:
        print('SAINDO DO SISTEMA')
        break
    else:
        print('deu ruim, tu não lê não?')