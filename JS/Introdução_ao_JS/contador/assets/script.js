function escopo(){
    const paragrafo = document.getElementById('num_padrao');
    const bt_mais = document.querySelector('.bt_mais');
    const bt_menos = document.querySelector('.bt_menos');

    function somar(){
        const soma = Number(paragrafo.textContent)+1;
        paragrafo.innerText=soma;
    }
    function subtrair(){
        const sub = Number(paragrafo.textContent)-1;
        paragrafo.innerText=sub;
    }
    bt_mais.addEventListener("click", function(){
        if(Number(paragrafo.textContent)<10){
            if(Number(paragrafo.textContent)==-1){
                paragrafo.style.color='#008B8B';
            }
            return somar();
        }
    });
    bt_menos.addEventListener("click", function(){
        if(Number(paragrafo.textContent)>(-10)){
            if(Number(paragrafo.textContent)==0){
                paragrafo.style.color ='#8B0000';
            }
            return subtrair();
        }
    });
}
escopo();