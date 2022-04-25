const getInputExpression = document.getElementById("input-Expression");
const getcalcButton = document.getElementById("calcButton");
const getToPlaceAfterClick = document.getElementById("to-place-after-click");
const getToRemoveAfterClick = document.getElementById("to-remove-after-click");
const getCarat = document.querySelectorAll("span")


getToPlaceAfterClick. style.display = "none";
let LogValue = null;


getCarat.forEach(e =>{
    console.log(e.innerHTML)
    e.addEventListener("click" , function(){
        let userInput = getInputExpression.value;
       // userInput =userInput+"^"
     userInput = userInput + e.innerHTML
        getInputExpression.value = userInput
    })
})

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
        firstslice =firstslice.toLowerCase()
        secondSlice =secondSlice.split(" ")
        secondSlice = secondSlice.join("")
        secondSlice = secondSlice.toLowerCase()
        firstslice = userInput.slice(0 ,i)
        secondSlice = userInput.slice(i+1,userInput.length)
       difffertialCalculation(firstslice ,secondSlice);
       getToRemoveAfterClick.style.display = "none"; 
     }
   }
   if((userInput.length === 0) || userInput === " "){
    getToRemoveAfterClick.style.display = "block"; 
   }
   else if(userInput[num] !== "^") {
        firstslice = userInput.slice()
        firstslice =firstslice.split(" ")
        firstslice = firstslice.join("")
        firstslice=firstslice.toLowerCase()
        if(firstslice[0] === "l"){
            LogValue = firstslice;
        }
        // if((firstslice[0] === "s" || "c") ){
        // difffertialCalculation(firstslice , secondSlice)
        // }
         difffertialCalculation(firstslice);
         getToRemoveAfterClick.style.display = "none"; 
        }
     
        
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
    let storeExpon = exponent;
    storeValue = Number(storeValue.join(""));
    if(storeValue === 0){storeValue =1}
    let diifCalc = storeValue*exponent;
    let displayMessage;
    exponent--;
    let check = Number(varNum);

    const image = "IMG/download.png";


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
    else if((calculateCode[0] === "s") || (calculateCode[0] ==="c") || calculateCode[0] ==="t"){
        if(calculateCode[0] === "s"){
            if(calculateCode.includes("in")){
                if(diifCalc === 1){
               displayMessage= `<img src= ${image}  alt="" class="close">
               <div class="center-div">${calculateCode} d${varNum}</div>
               <div class="center-div">Results: <span>cos${varNum}</span></div>`
                }
                else{
               displayMessage= `<img src= ${image}  alt="" class="close">
               <div class="center-div">${calculateCode} d${varNum}</div>
               <div class="center-div">Results: <span>${diifCalc}cos${diifCalc}${varNum}</span></div>`
            }
        }
        if(calculateCode.includes("ec")){
            if(diifCalc === 1){
                displayMessage= `<img src= ${image}  alt="" class="close">
                <div class="center-div">${calculateCode} d${varNum}</div>
                <div class="center-div">Results: <span>sec(${varNum})tan(${varNum})</span></div>`
                 }
        }
        }

        if(calculateCode[0] === "c"){
            if(calculateCode.includes("os")){
                if(diifCalc === 1){
               displayMessage= `<img src= ${image}  alt="" class="close">
               <div class="center-div">${calculateCode} d${varNum}</div>
               <div class="center-div">Results: -<span>sin${varNum}</span></div>`
                }
                else{
               displayMessage= `<img src= ${image}  alt="" class="close">
               <div class="center-div">${calculateCode} d${varNum}</div>
               <div class="center-div">Results: -<span>${diifCalc}sin${diifCalc}${varNum}</span></div>`
            }
           }
           if((calculateCode.includes("os")) && (calculateCode[calculateCode.length -2] =="c")){
               calculateCode ="cosec"
            if(diifCalc === 1){
                displayMessage= `<img src= ${image}  alt="" class="close">
                <div class="center-div">${calculateCode} (${varNum}) d${varNum}</div>
                <div class="center-div">Results: -<span>cot(${varNum})cosec(${varNum})</span></div>`
                 }
           }
           if(calculateCode.includes("ot")){
            if(diifCalc === 1){
                displayMessage= `<img src= ${image}  alt="" class="close">
                <div class="center-div">${calculateCode}(${varNum}) d${varNum}</div>
                <div class="center-div">Results: -<span>cot(${varNum})cosec(${varNum})</span></div>`
                 }
           }
          
    
        }
        
       
       if(calculateCode.includes("an")){
        if(diifCalc === 1){
       displayMessage= `<img src= ${image}  alt="" class="close">
       <div class="center-div">${calculateCode} d${varNum}</div>
       <div class="center-div">Results: <span>sec<sup>2</sup>${varNum}</span></div>`
        }
    //     else{
    //    displayMessage= `<img src= ${image}  alt="" class="close">
    //    <div class="center-div">${calculateCode} d${varNum}</div>
    //    <div class="center-div">Results: <span>${diifCalc}cos${diifCalc}${varNum}</span></div>`
    // }
   }
    }//end of ...

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


    else if(storeExpon > 1){
           displayMessage= `<img src= ${image}  alt="" class="close">
           <div class="center-div">${calculateCode}<sup>${storeExpon}</sup> d${varNum}</div>
           <div class="center-div">Results: <span>${diifCalc}${varNum}<sup>${exponent}</sup</span></div>`
        }
    if(displayMessage === undefined){
        displayMessage =`
        <img src= ${image}  alt="" class="close">
        <div class="center-div">implentations is yet to cater for this</div>`
    }
  
    getToPlaceAfterClick.innerHTML = displayMessage;
    const getRemove = document.querySelector(".close");
    getRemove.addEventListener("click" , function(){
    getToRemoveAfterClick.style.display = "block";
    getToPlaceAfterClick.style.display = "none"
})
    
}








