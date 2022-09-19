/*
-------------------------------------------------------------------------
    VARIÁVEIS E FUNÇÕES
-------------------------------------------------------------------------
 */


//lista com os invasores
let invasores = document.getElementsByClassName('invasor')




//lista com os "bonzinhos"
let bonzinhos = document.getElementsByClassName('bonzinho')


let score = 0
let tempoRestante = 30

let larguraQuadro = document.getElementById('quadro').offsetWidth


//Função para posicionar o elemento
//recebe o paremetro el que informa o elemento
const posicElement = (el) => {
    let posX = Math.floor(Math.random() *900 + 100)
    let PosY = Math.floor(Math.random() *400)
    el.style.position = 'absolute'
    el.style.left = -posX + 'px'
    el.style.top = PosY + 'px'
}
//desloca os elementos na tela 
//recebe parâmetros elemento, velecidade e incremento
const moveElemento = (el, veloc, inc)=>{


    //executa a cada x milissegundos
    const anima = setInterval(() => {
        veloc = inc + veloc
        el.style.left = (veloc + inc) + 'px'
        //verifica se elemento saiu do quadro
        //ou se foi clicado (classe 'morto')
        //retorna para uma posição à
        //esquerda do quadro
        if(veloc > larguraQuadro || el.classList.contains('morto')){
            //sorteia um valor entre -50 e -500
            veloc = -Math.random()*450+50
            inc = Math.random()*40+10
            posicElement(el)
            el.classList.remove('morto')
            


        }
        //adiciona atributo 'velocidade' para consulta no codigo js
        el.setAttribute('velocidade', inc)

    }, 40);

}

//ao clicar nos insetos
     const clikBug = (el)=> {
    //console.log(el.getAttribute('id'))

    //adiciona a classe morto ao inseto
    el.classList.add('morto')
    //adiciona 10 pts ao score
    score += 10
    //se o inseto clicado for o bonzinho perde 50 pts
    if(el.classList.contains('bonzinho')){
       score -=60
    } 

    document.getElementById('score').innerText = score
    //se velocidade for maior que 20, ganha 100 pontos
    //apenas nos insetos que tenham a classe invasores 
    if (el.getAttribute('velocidade')>20 && el.classList.contains('invasor')){
        score += 100
        //escoonde +100 PTS após 1/2 segundo 
        let pts100 = document.getElementById ('pts100')
        pts100.style.left =  el.style.left
        pts100.style.top = el.style.top 
        const mostra100pts = setInterval(() => {
            pts100.style.left = '-300px'
            // interrompe o setInterval
            clearInterval(mostra100pts)
        }, 500);
    }
}

/* 
-------------------------------------------------------------------------
            EVENTOS E EXECUÇÕES AUTOMÁTICAS
-------------------------------------------------------------------------    
 */


// Função para posicionar os itens de uma coleção de itens

for (inv of invasores) {
    posicElement(inv)
    moveElemento(inv,Math.random()*10,Math.random()*19+1)
  
    inv.addEventListener('mousedown',(evt)=>{clikBug(evt.target)})
}

for(bom of bonzinhos){
    posicElement(bom)
    moveElemento(bom,Math.random()*10,Math.random()*19+1)
  
    bom.addEventListener('mousedown',(evt)=>{clikBug(evt.target)})
}

//contagem regressiva

setTimeout(() => {
    
    //avisa o usuario o fim do tempo
    alert('TEMPO ESGOTADO!!!!')
    //Regarreca a pagina - semelhante a F5
    location.reload(true)
}, tempoRestante*1000);

const mostraTempo = setInterval(() => {
      //mostra tempo restante
      document.getElementById('infoTR').innerText = tempoRestante
      document.getElementById('temporest').innerText = tempoRestante --
    
}, 1000);




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

// quando quiser numero negstivo o sinal de - fica antes do MATCH "-MATCH"

// para o elemento sair do quadro e voltar, usamos numero negativo (sem dar bugs no elemento)

// Na linha 39 ate 45, fizemos os elementos sair da tela e voltar denovo e quando eles forem clicados, eles voltam do inicio e entra denovo 

// O que faz eles realmente entrarem de novo é as funcões da linha 40 e 41

// && é ultizado para 

// || siginifica 'ou' "isso é verdadeiro ou isso é verdadeiro"

// ClassList: remove uma classe, modificar (adicionar) uma classe e verificar se contem uma nica classe

// posicElement(el) para o elemento entrar de formas diferentes linha 42 

//evt.target

//toda vez que for verificar alguma coisa usamos IF