/*
var = permite que o valor seja atualizado em qualquer momento do código.
let = permite que o valor altere somente quando está fora de um bloco de código.
const = não permite que o valor seja alterado.


let nome = "Derick"; // string tem que acompanhar aspas ""
let idade = 16; // número não precisa ter aspas.

console.log(nome);
console.log(idade);

{ //Tudo que está entre chaves {} é um bloco de código.
let nome = "Jonatas";
let idade = "30";

console.log(nome);
console.log(idade);
}

console.log(nome);

let curso = "";
console.log(curso);
*/

function cadastrar (){
    let nome = document.getElementById("nome").value; // value atribui o valor do id
    //para a variavel
    let idade = document.getElementById("idade").value;
    let curso = document.getElementById("curso").value;

    if(nome == "" ||  idade == "" || curso == "") { 
        alert("Cadastro inválido");
    }
    else{
    alert("Cadastro realizado com sucesso!");   
    document.getElementById("resultado").innerHTML =
    "Nome do (a) aluno (a) é " + nome + 
    "<br> Idade: " + idade + " anos" +
    "<br> Curso: " + curso;

    document.querySelector(".descricao").textContent =
    "Informações do aluno";

    //display = none = serve para ocultar um elemento HTML
    document.getElementById("nome").style.display = "none";
    document.getElementById("idade").style.display = "none";
    document.getElementById("curso").style.display = "none";
    document.getElementById("cadastrar").style.display = "none";

    //display = block: Serve para exibir elemento HTML
    document.getElementById("resultado").style.display = "block";
    document.getElementById("novoAluno").style.display = "block";

   




    }
    
}

function novoAluno(){
    //display = none = serve para ocultar um elemento HTML
    document.getElementById("nome").style.display = "block";
    document.getElementById("idade").style.display = "block";
    document.getElementById("curso").style.display = "block";
    document.getElementById("cadastrar").style.display = "block";

    //display = block: Serve para exibir elemento HTML
    document.getElementById("resultado").style.display = "none";
    document.getElementById("novoAluno").style.display = "none";

     document.querySelector(".descricao").textContent =
    "Preencha os dados abaixos";

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("curso").value = "";


}
/* || = ou
alert = é usado para dar um aviso para o usuário em uma caixa no navegador. 

if (se) = caso seja verdadeiro a condição.
else (senão) = caso seja falso a condição.

= sinal de atribuição de valor

== sinal de comparação entre dois elementos ou valores.

+ concatenar (juntar informações).

*/


