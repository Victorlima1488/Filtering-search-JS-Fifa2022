const filter = document.querySelector('header input')

const cards = document.querySelectorAll('main ul li')

filter.addEventListener('input', filterCards)

function filterCards(){

  if(filter.value != ''){

    for(let card of cards){
      let title = card.querySelector('h3')
      title = title.textContent.toLowerCase()
      let filterText = filter.value.toLowerCase()

      if(!title.includes(filterText)){
        card.style.display = "none"
      }
      else{
        card.style.display = "block"
      }
    }
  } 
  else{
    for(let card of cards){
      card.style.display = "block"
    }
  }
} 