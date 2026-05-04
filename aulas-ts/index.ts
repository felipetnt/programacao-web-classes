let nome:string = "Felipe"

let idade:number = 18;

let ativo:boolean = true;

let bizarro:undefined = undefined;

//TIPO EXPLICITO - O tipo é declarado explicitamente, e o valor deve ser do tipo declarado
let sobrenome:string = "tnt";
// sobrenome = 123; // Erro de tipo
let profissao = "programador";
//TIPO IMPLICITO - TypeScript infere o tipo com base no valor atribuído
//Pode inferir o tipo errado, então é recomendado sempre declarar o tipo explicitamente - TypeScript busca semantica! 


//Union Types - Permite que uma variável possa ser de mais de um tipo
let valor: string | number = "Olá";
valor = 42; // Agora é um número, e isso é permitido
// valor = true; // Erro de tipo, boolean não é permitido

let teste: any = "Teste"; // Tipo 'any' permite qualquer tipo de valor, mas deve ser evitado para manter a segurança de tipos
teste = 123;
teste = true;
//Lembrando any pode ser util de evitar erros, uma vez que desabilita a verificação de tipos, mas deve ser usado com cautela para evitar problemas de manutenção e bugs difíceis de rastrear. O typescript nao oferece seguranca nenhuma para esse tipo, como preenchimento automatico, nao funcionarao.
//Esse tipo deve ser evitado a qualquer custo.

let desconhecido: unknown = "Desconecido"; // Tipo 'unknown' é mais seguro que 'any', pois exige verificação de tipo antes de usar o valor
let converte = desconhecido as string; // Erro de tipo, não é possível atribuir 'unknown' diretamente a outro tipo sem verificação

//Matrizes - Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let frutas: string[] = ["maçã", "banana", "laranja"];
//let nomeArray = tipo[] = [valor1, valor2, valor3] ou []; // Sintaxe genérica para arrays
//readonly array - Array somente leitura, não permite modificações após a criação
let readonlyFrutas: readonly string[] = ["maçã", "banana", "laranja"];
//readonlyFrutas.push("uva"); // Erro de tipo, não é possível modificar um array readonly