function curtir(botao){
const contador=botao.querySelector("b");
contador.textContent=Number(contador.textContent)+1;
botao.classList.add("clicado");
setTimeout(()=>botao.classList.remove("clicado"),180);
}