
# Classificador   do   nível  de herói 

Criar  um código com  as  seguintes  características : Armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro ,se o XP for entre 1.001 e 2.000 = Bronze,se o XP for entre 2.001 e 5.000 = Prata,se o XP for entre 5.001 e 7.000 = Ouro,se o  XP for entre 7.001 e 8.000 = Platina,se o XP for entre 8.001 e 9.000 = Ascendente,se o XP for entre 9.001 e 10.000= Imortal e se o XP for maior ou igual a 10.001= Radiante.

Na Saída tem-se a mensagem:

Ao final deve se exibir uma mensagem:
"O Herói de nome {nome} está no nível de {nivel}"

# Dissecando  o código
A primeira  parte  do código  consiste  em declarar o nome   do  heroi e  o nível de experiência do herói (linhas 2 e 3):

let nomeDoHeroi = "Exemplo"; 

let experienciaDoHeroi = 5000; 

A segunda parte  (da linha 8 até a 32) consiste em  um comparativo em que  dependendo  do valor  no campo da linha 3 (let experienciaDoHeroi)estabelece  um comparativo no qual  determina-se o nível do heroi  em  números   de XP (de 0 a 10000) e categorias (Ferro,Bronze,Prata e etc.).Uma vez que se faz  o comando    do algoritmo no final de  tudo se  exibe a mensagem  do herói ( que é lançado  na linha 2 let nomeDoHeroi ) no final do código (linha 35):

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);

mensagem exibida:
O Herói de nome Exemplo está no nível de Prata
