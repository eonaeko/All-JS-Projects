const popper = document.createElement("div")
const inputPopper = document.createElement("div")
const inputSpan = document.createElement('span')
const inputText = document.createElement('input')
const inputButton = document.createElement('button')
const popperPara = document.createElement("p")
popper.setAttribute('id' , 'popper')


function popInTopRight(value ,color = 'black'){
    popperPara.innerHTML = value
    popperPara.style.color = color
    popper.appendChild(popperPara)
    popper.className = "popper-to-top-right"
    appendandremovePopper()
    
}


function popInTopLeft(value ,color = 'black'){

    popperPara.innerHTML = value
    popperPara.style.color = color
    popper.appendChild(popperPara)
    popper.className = "popper-to-top-left"
    appendandremovePopper()
}

function popInBottomLeft(value ,color = 'black'){
    popperPara.innerHTML = value
    popperPara.style.color = color
    popper.appendChild(popperPara)
    popper.className = "popper-to-bottom-left"
    appendandremovePopper()
}

function popInBottomRight(value ,color = 'black'){
    popperPara.innerHTML = value
    popperPara.style.color = color
    popper.appendChild(popperPara)
    popper.className = "popper-to-bottom-right"
    appendandremovePopper()
}

function popInCenter(value ,color = 'black'){
    popperPara.innerHTML = value
    popperPara.style.color = color
    popper.appendChild(popperPara)
    popper.className = "popper-to-center-center"
    appendandremovePopper()
}


function popInLeftCenter(value ,color = 'black'){
    popperPara.innerHTML = value
    popperPara.style.color = color
    popper.appendChild(popperPara)
    popper.className = "popper-to-left-center"
    appendandremovePopper()
}


function popInRightCenter(value ,color = 'black'){
    popperPara.innerHTML = value
    popperPara.style.color = color
    popper.appendChild(popperPara)
    popper.className = "popper-to-right-center"
    appendandremovePopper()
}

function popInCenterTop(value ,color = 'black'){
    popperPara.innerHTML = value
    popperPara.style.color = color
    popper.appendChild(popperPara)
    popper.className = "popper-to-center-top"
    appendandremovePopper()
}

function popInCenterBottom(value ,color = 'black'){
    popperPara.innerHTML = value
    popperPara.style.color = color
    popper.appendChild(popperPara)
    popper.className = "popper-to-center-bottom"
    appendandremovePopper()
}



function popInputfromTopRight(input = "Question to be ask:"){
let inputValue
inputPopper.setAttribute('id' , 'input-popper')
inputPopper.className = "popper-to-top-right"
inputSpan.innerHTML = input
inputText.setAttribute("type" ,'text' )
inputButton.innerHTML = "OK"
inputPopper.appendChild(inputSpan)
inputPopper.appendChild(inputText)
inputPopper.appendChild(inputButton)
document.body.appendChild(inputPopper)

 inputButton.addEventListener('click' , function(){
    inputValue = inputText.value
    setTimeout(()=>{ document.body.removeChild(inputPopper)} ,500)
    console.log(inputValue)
    
   
})

return inputValue



}


function appendandremovePopper(){
    document.body.appendChild(popper)
    setTimeout(()=>{ document.body.removeChild(popper)} ,2000)
}

