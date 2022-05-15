// An array that contains the name and img url of the card we would be use
const cardArray = [
    {
      name : "cheeseburger",
      img : "images/cheeseburger.png"
    },
    {
        name :"fries",
        img : "images/fries.png"
    }, 
    {
        name: 'hotdog',
        img:"images/hotdog.png"

    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name : "milkshake",
        img: "images/milkshake.png"
    },
    {
        name:'pizza',
        img: "images/pizza.png"
    },
    {
        name : "cheeseburger",
        img : "images/cheeseburger.png"
      },
      {
          name :"fries",
          img : "images/fries.png"
      }, 
      {
          name: 'hotdog',
          img:"images/hotdog.png"
  
      },
      {
          name: 'ice-cream',
          img:'images/ice-cream.png'
      },
      {
          name : "milkshake",
          img: "images/milkshake.png"
      },
      {
          name:'pizza',
          img: "images/pizza.png"
      }
]
// Use to randomly sort the CardArray every times there is a refresh on the page
cardArray.sort(() => 0.5 - Math.random())
const getGrid = document.querySelector("#grid")
const getScore = document.querySelector('#score');
let cardChosen =[]
let cardIDArray = []
const cardRight = []

// This function create the board 
function createCardBorad(){
    for(let i = 0 ; i < cardArray.length ; i++){
        const card = document.createElement('img');
        card.setAttribute('src' , 'images/blank.png')
        card.setAttribute("data-id" , i)
        getGrid.appendChild(card)
        card.addEventListener('click', filp)
    }
}

createCardBorad()

// The function filp is used to filp the card from blank to something after been clicked
function filp(){
   cardID = this.getAttribute('data-id')
   this.setAttribute("src" , cardArray[cardID].img)
   cardChosen.push(cardArray[cardID].name)
   cardIDArray.push(cardID)
   setTimeout(checkIfThereisAMatch, 500)
}
// This function is used to check if there is a match with the cards picked or not
function checkIfThereisAMatch(){
    const AllCard = document.querySelectorAll("img")
    if(cardChosen.length === 2){
        if(cardChosen[0] === cardChosen[1]){
            popIn("you have a match" , "green")
            AllCard[cardIDArray[0]].setAttribute("src" , "images/white.png")
            AllCard[cardIDArray[1]].setAttribute("src" , "images/white.png")
            AllCard[cardIDArray[0]].removeEventListener('click' , filp)
            AllCard[cardIDArray[1]].removeEventListener('click' , filp)
            cardRight.push(cardChosen)
            getScore.innerHTML = cardRight.length * 3;
        }
        else{

            popIn("you didn't get a match" ,"red")
            AllCard[cardIDArray[0]].setAttribute("src" , "images/blank.png")
            AllCard[cardIDArray[1]].setAttribute("src" , "images/blank.png")
        }

        cardChosen = []
        cardIDArray = []
    
        if(cardRight.length === cardArray.length/2){
            const H3 = document.querySelector('h3')
            getScore.parentElement.innerHTML ="Congratuations you get all card!!!"
            H3.className='big'
        }
}
}

// This function created the pop in alert when there is a match or not
function popIn(value ,color){
    const popper = document.getElementById("popper")
    const popperPara = document.createElement("p")
    popperPara.innerHTML = value
    popperPara.style.color = color
    popper.appendChild(popperPara)
    popper.className = "popper2"
    setTimeout(()=>{
            popperPara.innerHTML = ""
            popper.appendChild(popperPara)
            popper.className = ""
    } ,2000)
}



//Credit to using Ania Kubow images and grabbing ideas from her code on the freecodecamp