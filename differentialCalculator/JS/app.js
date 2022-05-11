const getInputExpression = document.getElementById("input-Expression");
const getcalcButton = document.getElementById("calcButton");
const getToPlaceAfterClick = document.getElementById("to-place-after-click");
const getToRemoveAfterClick = document.getElementById("to-remove-after-click");
const getCarat = document.querySelectorAll("span")


getToPlaceAfterClick. style.display = "none";
let LogValue = null;
// This is used to ensure that when a user chexks on some input displayed on the screen it shows on the input box 
getCarat.forEach(e =>{
    e.addEventListener("click" , function(){
        let userInput = getInputExpression.value;
        userInput = userInput + e.innerHTML
        getInputExpression.value = userInput
    })
})

//This caters for that the user may use the Enter key on his/her keyboard instead the Differentite button
window.addEventListener('keydown' , e =>{if((e.code ==='Enter') || e.which === 13){ EventHandler()}})
//This caters the implementation that would happen when the differentiate button is clicked on 
getcalcButton.addEventListener("click" , EventHandler)

// A function that would be run with respect to an event happening
function EventHandler(){
    let userInput = getInputExpression.value;
    let firstslice= "";
    let secondSlice = "";
    let num ;
    for(let i = 0; i < userInput.length; i++){
     if(userInput[i] ==="^"){
        num = i;
        firstslice = userInput.slice(0 ,i)
        secondSlice = userInput.slice(i+1,userInput.length)
        firstslice =InputManipulation(firstslice)
        secondSlice= InputManipulation(secondSlice)
        difffertialCalculation(firstslice ,secondSlice);
        getToRemoveAfterClick.style.display = "none"; 
     }
   }
   // used to cater for an instance when a user do not enter a value yets clicks on the differntiate button , it would results to doing nothing the page
   if((userInput.length === 0) || userInput === " "){
    getToRemoveAfterClick.style.display = "block"; 
   }
   else if(userInput[num] !== "^") {
       
        firstslice = userInput.slice()
        firstslice=InputManipulation(firstslice)
        
        console.log(firstslice)
        if(firstslice[0] === "l"){
            LogValue = firstslice;
        }
         difffertialCalculation(firstslice);
         getToRemoveAfterClick.style.display = "none"; 
        }
}
// end of EventHandler 


// A function that performs the differentiation 
function difffertialCalculation(calculateCode , exponent = 1){
    getToPlaceAfterClick. style.display = "block";
    const toCheck = []
    let storeValue =[];
    let varNum ="";
    let num;
    for(let i =0;  i < calculateCode.length; i++){
        num =  Number(calculateCode[i])
        if(Number.isNaN(num)){
            toCheck.push("not reasonable")
        }
        if(Number.isNaN(num) === false){
            storeValue.push(num)
        }
    }//end of loop

    varNum = calculateCode[calculateCode.length -1] // Takes the last value of the expression
    if(varNum === ")"){
        // if a user uses brackets it takes the value of the next value 
        varNum = calculateCode[calculateCode.length -2]
    }
    const storeExpon = exponent;
    storeValue = Number(storeValue.join(""));
    if(storeValue === 0){storeValue =1}
    let diifCalc = storeValue*exponent;
    let displayMessage;
    exponent--;
    let check = Number(varNum);
    const image  =  '<i class="fa-solid fa-arrow-left close"></i>'

    // This section is responsible for checking the evaluation and giving out it result
    if(Number.isNaN(check) === false){
        displayMessage= `${image}
        <div class="center-div">${calculateCode}dx</div>
        <div class="center-div">Results: <span>0</span></div>`
    }
    
     // code for exponent calculation
    else if(calculateCode === "e"){
        let exponentTestArray = [];
        let exponentToPush;
        if(storeExpon[0] === "-"){
            exponentTestArray.push(storeExpon[0])
        }
        for(let i = 0 ; i < storeExpon.length;  i++){
                exponentToPush = Number(storeExpon[i])
                if(Number.isNaN(exponentToPush) === true){
                    exponentTestArray.push(exponentToPush)
                    exponentTestArray.pop()
         }
         else{
            exponentTestArray.push(exponentToPush)
            storeValue = exponentTestArray.join("")
         }
    }
      if (exponentTestArray[0] === undefined){
        displayMessage= `${image}
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup>d${storeExpon}</div>
        <div class="center-div">Results: <span>e<sup>${storeExpon}</sup></span></div>`
      }
      else if (exponentTestArray[1] === undefined){
        displayMessage= `${image}
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup>d${storeExpon[storeExpon.length -1]}</div>
        <div class="center-div">Results: -<span>e<sup>${storeExpon}</sup></span></div>`
      }
      else{
        displayMessage= `${image}
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup>d${storeExpon[storeExpon.length -1]}</div>
        <div class="center-div">Results: ${storeValue}<span>e<sup>${storeExpon}</sup></span></div>`
      }
    }// end of code for exponent calculation

    else if (calculateCode === LogValue){
        displayMessage= `${image}
        <div class="center-div">${calculateCode} d${LogValue[LogValue.length -1]}</div>
        <div class="center-div">Results: <span> 1/${LogValue[LogValue.length -1]}
        <span></div>`
    }
    else if((calculateCode[0] === "s") || (calculateCode[0] ==="c") || calculateCode[0] ==="t"){
        if(calculateCode[0] === "s"){
            if(calculateCode.includes("in")){
                if(diifCalc === 1){
               displayMessage=` ${image}
               <div class="center-div">${calculateCode} d${varNum}</div>
               <div class="center-div">Results: <span>cos${varNum}</span></div>`
                }
                else{
               displayMessage= `${image}
               <div class="center-div">${calculateCode} d${varNum}</div>
               <div class="center-div">Results: <span>${diifCalc}cos${diifCalc}${varNum}</span></div>`
            }
        }
        if(calculateCode.includes("ec")){
            if(diifCalc === 1){
                displayMessage= `${image}
                <div class="center-div">${calculateCode} d${varNum}</div>
                <div class="center-div">Results: <span>sec(${varNum})tan(${varNum})</span></div>`
                 }
        }
        }

        if(calculateCode[0] === "c"){
            if(calculateCode.includes("os")){
                if(diifCalc === 1){
               displayMessage= `${image}
               <div class="center-div">${calculateCode} d${varNum}</div>
               <div class="center-div">Results: -<span>sin${varNum}</span></div>`
                }
                else{
               displayMessage= `${image}
               <div class="center-div">${calculateCode} d${varNum}</div>
               <div class="center-div">Results: -<span>${diifCalc}sin${diifCalc}${varNum}</span></div>`
            }
           }
           console.log((calculateCode[calculateCode.length -1]))
           if((calculateCode.includes("os")) && ((calculateCode[calculateCode.length -2] =="c") || (calculateCode[calculateCode.length -1] == ')'))){
               calculateCode ="cosec"
            if(diifCalc === 1){
                displayMessage= `${image}
                <div class="center-div">${calculateCode} (${varNum}) d${varNum}</div>
                <div class="center-div">Results: -<span>cot(${varNum})cosec(${varNum})</span></div>`
                 }
           }
           if(calculateCode.includes("ot")){
            if(diifCalc === 1){
                displayMessage=` ${image}
                <div class="center-div">${calculateCode}(${varNum}) d${varNum}</div>
                <div class="center-div">Results: -<span>cot(${varNum})cosec(${varNum})</span></div>`
                 }
           }
        }
        
       
       if(calculateCode.includes("an")){
        if(diifCalc === 1){
       displayMessage= `${image}
       <div class="center-div">${calculateCode} d${varNum}</div>
       <div class="center-div">Results: <span>sec<sup>2</sup>${varNum}</span></div>`
        }
   }
    }//end of ...

    else if(toCheck.length > 1 ){
        displayMessage = undefined
    }

    else if(storeExpon === 1){
        displayMessage= `${image}
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup> d${varNum}</div>
        <div class="center-div">Results: <span>${diifCalc}<span></div>`
    }
    
    else if(storeExpon < 0){
        displayMessage= `${image}
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup> d${varNum}</div>
        <div class="center-div">Results:  1 /<span>${diifCalc}${varNum}<sup>${Math.abs(exponent)}</sup</span></div>`
    }


    else if(storeExpon > 1){
           displayMessage= `${image}
           <div class="center-div">${calculateCode}<sup>${storeExpon}</sup> d${varNum}</div>
           <div class="center-div">Results: <span>${diifCalc}${varNum}<sup>${exponent}</sup</span></div>`
        }
    if(displayMessage === undefined){
        displayMessage =`
      ${image}
        <div class="center-div">implentations is yet to cater for this</div>`
    }
  
    getToPlaceAfterClick.innerHTML = displayMessage;
    const getRemove = document.querySelector(".close");
    getRemove.addEventListener("click" , function(){
    getToRemoveAfterClick.style.display = "block";
    getToPlaceAfterClick.style.display = "none"
})
    
}


// A simple function that is responsible for manipulating the user input 
function InputManipulation(value){
       value = value.split(" ")
       value = value.join("")
       value = value.toLowerCase()
       return value
}

