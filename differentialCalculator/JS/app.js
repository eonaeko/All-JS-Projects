const getInputExpression = document.getElementById("input-Expression");
const getcalcButton = document.getElementById("calcButton");
const getToPlaceAfterClick = document.getElementById("to-place-after-click");
const getToRemoveAfterClick = document.getElementById("to-remove-after-click");

getToPlaceAfterClick. style.display = "none";
let LogValue = "";

getcalcButton.addEventListener("click" , function(evt){
    evt.preventDefault();
    let userInput = getInputExpression.value;
    let firstslice= "";
    let secondSlice = "";
    let num ;
    for(let i = 0; i < userInput.length; i++){
     if(userInput[i] ==="^"){
        num = i;
        firstslice =firstslice.split(" ")
        firstslice = firstslice.join("")
        secondSlice =secondSlice.split(" ")
        secondSlice = secondSlice.join("")
        firstslice = userInput.slice(0 ,i)
        secondSlice = userInput.slice(i+1,userInput.length)
        difffertialCalculation(firstslice , secondSlice);
     }
   }
   if(userInput[num] !== "^") {
       
        firstslice = userInput.slice()
        firstslice =firstslice.split(" ")
        firstslice = firstslice.join("")
        if(firstslice[0] === "l"){
            LogValue = firstslice;
        }
        difffertialCalculation(firstslice);
        }
        getToRemoveAfterClick.style.display = "none"; 
    })




function difffertialCalculation(calculateCode , exponent = 1){
    getToPlaceAfterClick. style.display = "block";
    let storeValue =[];
    let varNum ="";
    let num;
    for(let i =0;  i < calculateCode.length; i++){
    num =  Number(calculateCode[i])
    if(Number.isNaN(num) === false){
        storeValue.push(num)
    }
    }//end of loop

    varNum = calculateCode[calculateCode.length -1]
    let storeExpon =exponent;
    storeValue = Number(storeValue.join(""));
    let diifCalc = storeValue*exponent;
    console.log(diifCalc)
    let displayMessage;
    exponent--;
    let check = Number(varNum);
    console.log(check)
    const image = "IMG/download.png";
    console.log(Number.isNaN(check))

    if(Number.isNaN(check) === false){
        displayMessage= `<img src= ${image} alt="" class="close">
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
        displayMessage= `<img src=${image}  alt="" class="close">
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup>d${storeExpon}</div>
        <div class="center-div">Results: <span>e<sup>${storeExpon}</sup></span></div>`
      }
      else if (exponentTestArray[1] === undefined){
        displayMessage= `<img src=${image}  alt="" class="close">
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup>d${storeExpon[storeExpon.length -1]}</div>
        <div class="center-div">Results: -<span>e<sup>${storeExpon}</sup></span></div>`
      }
      else{
        displayMessage= `<img src=${image}  alt="" class="close">
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup>d${storeExpon[storeExpon.length -1]}</div>
        <div class="center-div">Results: ${storeValue}<span>e<sup>${storeExpon}</sup></span></div>`
      }
    }// end of code for exponent calculation
    else if (calculateCode === LogValue){
        displayMessage= `<img src=${image}  alt="" class="close">
        <div class="center-div">${calculateCode} d${LogValue[LogValue.length -1]}</div>
        <div class="center-div">Results: <span> 1/${LogValue[LogValue.length -1]}
        <span></div>`
    }

    else if(storeExpon === 1){
        displayMessage= `<img src=${image} alt="" class="close">
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup> d${varNum}</div>
        <div class="center-div">Results: <span>${diifCalc}<span></div>`
    }
    else if(storeExpon < 0){
        displayMessage= `<img src= ${image}  alt="" class="close">
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup> d${varNum}</div>
        <div class="center-div">Results:  1 /<span>${diifCalc}${varNum}<sup>${Math.abs(exponent)}</sup</span></div>`
    }
  
     else{
        displayMessage= `<img src= ${image}  alt="" class="close">
        <div class="center-div">${calculateCode}<sup>${storeExpon}</sup> d${varNum}</div>
        <div class="center-div">Results: <span>${diifCalc}${varNum}<sup>${exponent}</sup</span></div>`
     }


  
    getToPlaceAfterClick.innerHTML = displayMessage;
    const getRemove = document.querySelector(".close");
    getRemove.addEventListener("click" , function(){
    getToRemoveAfterClick.style.display = "block";
    getToPlaceAfterClick.style.display = "none"
})
    
}








