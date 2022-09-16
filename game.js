/*
------------------------------------------------------------------------------------
           VARIÁVEIS E FUNÇÕES 
------------------------------------------------------------------------------------
*/

//Lista com os invasores 
let invasores = document.getElementsByClassName('invasor')
console.log(invasores)
//Lista com os bonzinhos 
let bonzinhos = document.getElementsByClassName('bonzinho')

let score = 0 // pontuação inical 
let tempoRestante = 30 // pontuação final

let larguraQuadro = document.getElementById('quadro').offsetWidth   //OffSetWidth para pegar a largura do quadro (elemento)




//Função para posiciomar um elemento 
//recebe parametro el que informa o elemento
const posicElement = (el) => {
 let posX = Math.floor(Math.random()*1000)  //estamos fazendo um calculo onde o random (sotear) vai sotear um numero de 0 a 100 
 let posY = Math.floor(Math.random()*400)
 el.style.position = 'absolute'
 el.style.left = -posX +'px'            //não pode esquecer de colocar a unidade de medida (px ou %)
 el.style.top = posY + 'px'
}

//Desloca os elemento na tela 
//rcebe paramentros elemento(div/html) velocidade e incremento

const moveElemento = (el, veloc, inc) =>{ 
    
    //executa a cada x milissegundos

    const anima = setInterval(() => {
        veloc = veloc + inc
        el.style.left = (veloc + inc) + 'px'
        //verifica se o elemento saiiu do quadro e possui a classe emtela
       // remove a classe e volta para uma posição inicial (verificamos a velocidade, ela determina a posição do elemento )
       if (veloc > larguraQuadro && el.classList.contain('emtela')){
           el.classList.remove('emtela')
           posicElement(el)
       }

    }, 40);


}



//Lista com os "bonzinhos"









/*
------------------------------------------------------------------------------------
        EVENTOS E EXECUÇÕES AUTOMATICAS
------------------------------------------------------------------------------------
*/  

for(inv of invasores){
     posicElement(inv)
     moveElemento(inv, Math.random ()*10, Math.random()*19+1)
}    
  
// moveElemento(document.getElementById('inv1'), 5, 5) 

// colocandoo valor da velocidade e o incremento - se quer mais rapido ou mais lento so mudar os numeros

// posicElement(document.getElementById('inv1')) 

// o INV pode ser qualquer palavra, ja o 2o termo é o termo que definimos nas variaveis

//o FOR está aplicando uma função para varios invasores. É mais platico, pois iriamos ter que fazer varios -- posicElement(document.getElementById('inv1') 

// parametros são variaveis 

// 500 = meio segundo

// o deslocamento é no CSS e o left que desloca 

// o sinal de - é para falar para ele que quando sair da tela para ele voltar para o outro lado e rodadr novamente

// para verificar um elemento usamos o classList