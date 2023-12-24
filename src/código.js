// Variáveis para armazenar nome e experiência do herói
let nomeDoHeroi = "Exemplo"; // Altere o nome do herói conforme necessário
let experienciaDoHeroi = 5000; // Altere a quantidade de XP conforme necessário

// Estrutura de decisão para determinar o nível do herói
let nivelDoHeroi;

switch (true) {
    case experienciaDoHeroi < 1000:
        nivelDoHeroi = "Ferro";
        break;
    case experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000:
        nivelDoHeroi = "Bronze";
        break;
    case experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000:
        nivelDoHeroi = "Prata";
        break;
    case experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000:
        nivelDoHeroi = "Ouro";
        break;
    case experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000:
        nivelDoHeroi = "Platina";
        break;
    case experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000:
        nivelDoHeroi = "Ascendente";
        break;
    case experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000:
        nivelDoHeroi = "Imortal";
        break;
    default:
        nivelDoHeroi = "Radiante";
}

// Exibindo a mensagem com o nível do herói
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);