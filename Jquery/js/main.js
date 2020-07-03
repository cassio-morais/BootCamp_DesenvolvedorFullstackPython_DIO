// JEITO QUE EU FIZ ANTES DO PROFESSOR EXPLICAR

// function consultaCep(){
//     var cep = document.getElementById("cep")
//     var url = "https://viacep.com.br/ws/00000000/json/"
//     var url = url.replace("00000000",cep.value)
//     $.ajax({
//         url: url,s
//         type: "GET",
//         success: function(response){
//             console.log(response)
//             console.log(response.bairro)
//         }
//     })
// }



// window.onload = function(){
//     $(".cep").hide();
// };

$(function(){
    $(".cep").hide();
 })

function consultaCep(){
    var cep = document.getElementById("cep").value
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);

            //fazendo padrão Jquery passsando o id # ou classe . e injetando no html o valor do dicionário response
            $("#tituloCep").html("CEP "+ response.cep);
            $("#logradouro").html(response.logradouro);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
            $(".cep").show();
            
            

            // pega o elemento pelo id do campo e preenche o valor do dicionário da response 

            // document.getElementById('logradouro').innerHTML = response.logradouro 
            // document.getElementById('localidade').innerHTML = response.localidade
            // document.getElementById('bairro').innerHTML = response.bairro
            // document.getElementById('uf').innerHTML = response.uf

            

        }
    })
}


