(function () { 

"use strict";
  /*O modo estrito ("use strict") é ativado para ajudar a detectar erros e comportamentos problemáticos no código. */

  /**
   * Função de seleção
   */
  
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function 
   * Função de Adição de Eventos (on)
   * Função espera que um evento ocorra e depois responde a ele  */
  
  
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

//Aivar Botao Menu no modo Mobile

on('click', '.mobili-nav-toggle', function() {
    select('bory').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
})

// Efeito Digitação
const type = select('.typed');

if(typed){
  let typed_strings = typed.getAttibute('data-typed-items')
  typed_strings = typed_strings.split(',')
  
  new Typed ('.typed', {
    Strings:typed_strings
 });


}



})()