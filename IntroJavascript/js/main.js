
// var nome = "Cássio Morais"
// var idade = 31
// var frase = "Ramones é a melhor banda do mundo"

// // alert(nome,idade)

// console.log("Bem vindo, "+nome+"! você tem "+idade+" anos de idade")
// console.log("Bem vindo, "+nome+"! você tem "+idade+" anos de idade")
// console.log(frase.replace("Ramones","Beatles"))
// console.log(frase.toLowerCase())
// console.log(frase.toUpperCase())


// // LISTAS

// var lista = ['a','b','c','d','e']

// lista.push('f') // acrescenta um valor no final do array
// console.log(lista)
// lista.pop() // exclui o último valor do array
// console.log(lista)
// console.log(lista.length) // pega quantidade de elementos da lista
// // console.log(lista.reverse()) // inverte a ordem
// // console.log(lista.toString()) // converte os dados para string
// console.log(lista.join(' - ')) // substitui o separador padrão pelo informando e transforma em string


// // DICIONÁRIOS

// var dicionario = {teste:'teste',teste2:'teste2'}
// console.log(dicionario)

// var listaDeDicionarios = [{nome:'Cássio',idade:'31'},{nome:'Érika ',idade:'32'}]
// console.log(listaDeDicionarios[1].nome)

// // Condicionais, loops e date

// // var idade = prompt('Qual sua idade?') // caixa de input

// // if (idade >= 18){
// //     alert('Maior de idade');
// // }
// // else{
// //     alert('menor de idade');
// // }

// // var count = 0

// // while(count<=5){
// //     console.log(count);
// //     alert(count)
// //     count++;
// // }

// var countfor

// for(count=0;count<=5;count++){
//     console.log(count);
// };

// // DATA

// var d = new Date
// console.log('São '+d.getHours()+' horas e '+d.getMinutes()+' minutos.')

// Funções

// function soma(n1,n2){
//     return n1 + n2;
// }

// alert(soma(5,10))


// function setReplace(frase,nome,novo_nome){
//     return frase.replace(nome,novo_nome);

// }

// alert(setReplace('Olá Érika','Érika','Cássio'))

// variavel dentro da função = local
// fora = global
// mesma variável dentro e fora = usa o local


// Interagindo com o DOM


//<button type="button" onclick="clicou()">Clique Aqui</button>
function clicou(){
    // alert('Obrigado por clicar!');
    document.getElementById('agradecimento').innerHTML="Obrigado por clicar"; // injetando só texto
    document.getElementById('bemvindo').innerHTML="<b>Seja Bem Vindo!</b>"; // injetando HTML

};


// <h3 id="agradecimento" onclick="redirecionar()"></h3>
function redirecionar(){
    window.open("https://code.visualstudio.com/docs/languages/javascript") // abre uma NOVA aba
    // window.location.href = "https://code.visualstudio.com/docs/languages/javascript" // abre na MESMA aba
};


// onmouseover="trocar(this)" 
function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse" 
}

// passa o próprio elemento html por parâmetro sem necessidade de pegar o elemento pelo ID.

// <p onmouseover="trocar(this)" onmouseout="voltar(this)">Passe o Mouse aqui!</p>

// onmouseout="voltar(this)
function voltar(elemento){
    elemento.innerHTML="Passe o Mouse aqui!"
}


// <body onload="load()"></body>
function load(){
    alert('página carregada!');
}


/* <select onchange="funcaoChange(this)">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>  */

function funcaoChange(elemento){
    console.log(elemento.value);
    // passa o select como parâmetro e imprimi no cole os valores de value
}

