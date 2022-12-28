const filter = document.querySelector('header input')

const cards = document.querySelectorAll('main ul li')

const ul = document.querySelector('main ul')

const li = document.createElement("li")
const h4 = document.createElement("h4")
h4.innerText = "Seleção não encontrada! :("

li.appendChild(h4)
ul.appendChild(li)

li.style.display = "none"

filter.addEventListener('input', filterCards)

function filterCards(){
  let counter = 0
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
        counter += 1
      }
    }
    if(counter == "0"){
      ul.style.gridTemplateColumns = "2fr"
      li.style.backgroundColor = "#0A1424"
      li.style.display = "block"

    }
  } 
  else{
    for(let card of cards){
      card.style.display = "block"
    }
    ul.style.gridTemplateColumns = "1fr 1fr"
    li.style.display = "none"
  }
} 