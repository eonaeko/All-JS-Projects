// This project is quiz app by Emmanuel.O Onaeko

// a set of questions that would be displayed to the user of our application 
const questionsArray = [{
    question : 'What is the full meaning of HTML?',
     options :{
         a: 'Hupertext MarkDown language',
         b:'HyperText Markup Language',
         c : "HyperText Markright Language ",
         d : "HyperTest Markup Language"
     },
     answer :"b",
     question_type: "radio",
     picked:false
} 
,
{
    question : 'What is the full meaning of CSS?',
    options :{
        a: 'Cascading stylesheet',
        b:'Carracing stylesheet',
        c : "Carcading stylesheet ",
        d : " Casrading stylesheet"
    },
    answer :"a",
    question_type: "radio",
    picked:false
}
, 
{
    question : 'Who invented C++?',
     options :{
         a: 'Onaeko Emmanuel Oladipupo',
         b:' Joe-Alabi Olusegun',
         c : "Olapade Bukola ",
         d : "Bjarne Stroupship"
     },
     answer :"d",
     question_type: "radio",
     picked:false
}
,
{
    question : 'Who won APC presidential primary',
     options :{
         a: 'Professor Yemi Osinbajo',
         b:'Bola Ahmed Tinubu',
         c : "Ahmed Lawan",
         d : "Yayha Bello"
     },
     answer :"b",
     question_type: "radio",
     picked:false
}
,
{
    question : 'Select all that is true with JavaScript',
     options :{
         a: 'it was invented in the year 1995',
         b:'it is not an Object Oreinted Language',
         c : "it is the official language of the web",
         d : "it was an machine language"
     },
     answer :["a" , "c"],
     question_type: "checkbox",
     picked:false
}
,
{
    question : 'where is UniIlorin located?',
     options :{
         a: 'Ilorin',
         b:'Ibadan',
         c : "Uyo",
         d : "Zaria"
     },
     answer :"a",
     question_type: "radio",
     picked:false
}
,
{
question : 'What is the full meaning of Unilag',
     options :{
         a: 'University of lagoon',
         b:'University of Kaduna',
         c : "University of Lagos ",
         d : "University of Jos"
     },
     answer :"c",
     question_type: "radio",
     picked:false
}
,
{
    question : 'What is the full meaning of UniMaid?',
     options :{
         a: 'University of Borno',
         b:'University of Maidugari',
         c : "University for Maid ",
         d : "University of Kwara"
     },
     answer :"b",
     question_type: "radio",
     picked:false
}
,
{
    question : 'What is the full meaning of XML?',
    options :{
        a: 'extensible MarkDown language',
        b:'extensible Markup Language',
        c : "HyperText Markright Language ",
        d : "Xtensible Markup Language"
    },
    answer :"b",
    question_type: "radio",
    picked:false
}
,
{
    question : 'What won the 1993 presidential election in Nigeria?',
     options :{
         a: 'Moshood Abiola',
         b:'Atiku Abubakar',
         c : "Wike Emmanuel ",
         d : "Dr. F.B. Onaeko"
     },
     answer :"a",
     question_type: "radio",
     picked:false
}
,
{
    question : 'Which year did Buhari won elections',
    options :{
        a: '2015',
        b:'2007',
        c : "2003 ",
        d : "2001"
    },
    answer :"a",
    question_type: "radio",
    picked:false
}
,{
    question : 'Is Nigeria a landlocked country',
     options :{
         a: 'Yes',
         b:'No',
         c : "Maybe ",
         d : "Go and ask your grandfater"
     },
     answer :"b",
     question_type: "radio",
     picked:false
}
,
{
    question : 'Is Niger a landlocked country',
    options :{
        a: 'Yes',
        b:'No',
        c : "Maybe ",
        d : "Go and ask your grandfater"
    },
    answer :"a",
    question_type: "radio",
    picked:false
}
,{
    question : 'who sang Buga',
    options :{
        a: 'KizzDainel',
        b:'Wizkid',
        c : "Burnaboy ",
        d : "Davido"
    },
    answer :"a",
    question_type: "radio",
    picked:false
}
,{
    question : 'who is the richest man in Nigeria',
    options :{
        a: 'Alkio Dangote',
        b:'Mike Adenuga',
        c : " Kyari Boker ",
        d : "Bolaji Balogun"
    },
    answer :"a",
    question_type: "radio",
    picked:false
},
{
    question : 'Who is the General Overseer of RCCG',
    options :{
        a: 'Bishop David Oyedepo',
        b:'Apostle Joshua Selman',
        c : "Pastor Wilams Kumuyi",
        d : "Pastor E.A Adeboye"
    },
    answer :"d",
    question_type: "radio",
    picked:false
},
{
    question : 'Who is the General Overseer of Deeper Life',
    options :{
        a: 'Bishop David Oyedepo',
        b:'Apostle Joshua Selman',
        c : "Pastor Wilams Kumuyi",
        d : "Pastor E.A Adeboye"
    },
    answer :"c",
    question_type: "radio",
    picked:false
},
{
    question : 'Who is the General Overseer of Living Faith Chruch',
    options :{
        a: 'Bishop David Oyedepo',
        b:'Apostle Joshua Selman',
        c : "Pastor Wilams Kumuyi",
        d : "Pastor E.A Adeboye"
    },
    answer :"a",
    question_type: "radio",
    picked:false
},
{
    question : 'Who owns Ruff n rubmle',
    options :{
        a: 'Adenike Ogunlesi',
        b:'Bolaji Balogun',
        c : "Kyari Boker",
        d : "Paul Jospeh"
    },
    answer :"d",
    question_type: "radio",
    picked:false
},
{
    question : 'Who is the network opeartor in Nigeria',
    options :{
        a: 'MTN',
        b:'Aritel',
        c : "Orange",
        d : "9mobile"
    },
    answer : ["a" ,'b', 'd' ],
    question_type: "checkbox",
    picked:false
},
{
    question : 'When was the deparment "Telecommunication science" created in Unilorin',
    options :{
        a: '2009',
        b:'1019',
        c : "2019",
        d : "1999"
    },
    answer :"a",
    question_type: "radio",
    picked:false
},
{
    question : 'When was Unilorin established',
    options :{
        a: '2009',
        b:'1995',
        c : "1975",
        d : "1999"
    },
    answer :"c",
    question_type: "radio",
    picked:false 
}
,{
    question : 'When was UniMaid established',
    options :{
        a: '2009',
        b:'1995',
        c : "1975",
        d : "1999"
    },
    answer :"c",
    question_type: "radio",
    picked:false 
}
,{
    question : 'Which car brand developed car in  Nigeria',
    options :{
        a: 'Toyota',
        b:'Accura',
        c : "IVM",
        d : "Nissian"
    },
    answer :"c",
    question_type: "radio",
    picked:false 
}
,{
    question : 'Who is the richest man in the world',
    options :{
        a: 'Elon Musk',
        b:'Steve Jobs',
        c : "Bill Gates",
        d : "Joel Osteen"
    },
    answer :"a",
    question_type: "radio",
    picked:false 
}
,{
    question : 'Who is founder of Design IT Africa',
    options :{
        a: 'Alli Ajagbe',
        b:'Ademola Thompson',
        c : "Emmanuel Onaeko",
        d : "Boluwatife Olapade"
    },
    answer :"a",
    question_type: "radio",
    picked:false 
}
,{
    question : 'When was KWASU established',
    options :{
        a: '2009',
        b:'1995',
        c : "1975",
        d : "1999"
    },
    answer :"a",
    question_type: "radio",
    picked:false 
}
,{
    question : 'Who authored become a better you',
    options :{
        a: 'Mercy Jacobs',
        b:'Joel Osteen',
        c : "Aaron Adeola",
        d : "IK Okade"
    },
    answer :"b",
    question_type: "radio",
    picked:false 
}
,{
    question : 'When authored Eloquent JavaScript',
    options :{
        a: 'Marijn Haverbeke',
        b:'Garibel Binuyo',
        c : "Olayinka Adeleke",
        d : "John Adeleke"
    },
    answer :"a",
    question_type: "radio",
    picked:false 
},
{
    question : 'When was CIS established in Unilorin',
    options :{
        a: '2009',
        b:'1995',
        c : "1975",
        d : "1999"
    },
    answer :"a",
    question_type: "radio",
    picked:false 
}
]

const quizContainer = document.querySelector('.quiz-container')
const progressBar = document.querySelector('.progress-bar')
const startButton = document.querySelector('#start-button')
const previousButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')
const submitButton = document.createElement('button')
const noOfQuestionsAnswered = document.querySelector('.question-answered span')
const buttonControls = document.querySelector('.quiz-controls')
let storeAnswers =[]
let currentQuestionIndex = 0;
let level = 1
let randonIndex  =[] , bars_width =0 , bars_width_px , mini_bars_width , mini_bars_width_px;
if(level === 1){
    for(let i = 0 ; i < 10; i++) {
        let number = generateRandomNumber(questionsArray)
        if(!randonIndex.includes(number)){randonIndex.push(number)}
        else{i--}
    }
    toSetQuestions(questionsArray)
}
else{
    for(let i = 0 ; i < 10; i++) {
        let number = generateRandomNumber(modifiedQuestions)
        if(!randonIndex.includes(number)){randonIndex.push(number)}
        else{i--}
    }
    toSetQuestions(modifiedQuestions)
}
let chosenQuestions = questionsArray.filter(e=> e.picked === true)
let modifiedQuestions = questionsArray.filter(e => e.picked === false)
let checkboxAnswers = [] , answerid , question_type



// the following code works the event that are meant to happen when the user clicks on the start button 
startButton.addEventListener('click' ,  startButtonEventHandler)// end of start button handler
// this handles the event of click on the previous button   
previousButton.addEventListener("click" , function(e){
    noOfQuestionsAnswered.innerHTML =`${storeAnswers.length}/${chosenQuestions.length}`
    if((currentQuestionIndex !== 9)&&(storeAnswers.length === 10)){ 
        buttonControls.removeChild(submitButton)
        buttonControls.appendChild(nextButton) 
    }
    currentQuestionIndex--
    if(currentQuestionIndex < 0){currentQuestionIndex = 9}
    questionLoader(currentQuestionIndex , chosenQuestions)
    const Options = document.querySelectorAll('input')
    answersChecked(Options)
    Options.forEach((option)=>{
        option.addEventListener('click' , (e) =>{
             answerid =e.currentTarget.getAttribute('id')
             question_type = e.currentTarget.getAttribute('type')
                if(storeAnswers.some(e => e.currentQuestionIndex === currentQuestionIndex)){
                    if(question_type === 'radio'){storeAnswers.splice(currentQuestionIndex , 1 , {answerid ,currentQuestionIndex}) }
                    else if(question_type = 'checkbox'){
                        checkboxAnswers.push(answerid)
                        previousButton.addEventListener('click' , function(){
                            currentQuestionIndex = currentQuestionIndex +1
                            if(checkboxAnswers.length > 0){storeAnswers.splice(currentQuestionIndex , 1 , {answerid:checkboxAnswers ,currentQuestionIndex})}
                                currentQuestionIndex =currentQuestionIndex-1
                                checkboxAnswers =[]
                        })
                    }
                }
                else{
                    if(question_type === 'radio'){storeAnswers.push({ answerid ,currentQuestionIndex})}
                    else if(question_type === 'checkbox'){
                        checkboxAnswers.push(answerid)
                        previousButton.addEventListener('mouseover' , function(){ 
                            if(checkboxAnswers.length > 0){storeAnswers.push({ answerid:checkboxAnswers ,currentQuestionIndex})}
                            checkboxAnswers =[]})
                }
            }
        })// end of option event listener
    })// end of higher order foreach method      
})// end of previous button event listener


nextButton.addEventListener("click", function(e){
    noOfQuestionsAnswered.innerHTML =`${storeAnswers.length}/${chosenQuestions.length}`
    // checks if the question is the last question and also if all question has been answered, if this is true, it would the next button and replace it with the submit button
    if((currentQuestionIndex === chosenQuestions.length -1)&& (storeAnswers.length === chosenQuestions.length)){
        submitButton.setAttribute('id' , 'submit')
        submitButton.innerHTML = 'Submit'
        buttonControls.removeChild(nextButton)
        buttonControls.appendChild(submitButton)
    }
    if(storeAnswers.length >= currentQuestionIndex){
        bars_width = storeAnswers.length * 50 
        bars_width_px = bars_width + 'px'
        mini_bars_width = storeAnswers.length * 30
        mini_bars_width_px = mini_bars_width +'px'
        if(window.innerWidth > 600){
            if( bars_width_px === '500px'){
                progressBar.style.borderTopRightRadius = "10px"
                progressBar.style.width = bars_width_px
            }
            else{
                progressBar.style.borderTopRightRadius = "0px"
                progressBar.style.width = bars_width_px
            }
        }
        else if(window.innerWidth <= 600){
            if( mini_bars_width_px === '300px'){
                progressBar.style.borderTopRightRadius = "10px"
                progressBar.style.width = mini_bars_width_px
            }
            else{
                progressBar.style.borderTopRightRadius = "0px"
                progressBar.style.width = mini_bars_width_px
            }
        }
        
    }
    currentQuestionIndex++
    if( (currentQuestionIndex > 9) && (storeAnswers.length !== chosenQuestions.length )) { currentQuestionIndex = 0}
    if(currentQuestionIndex < 10){questionLoader(currentQuestionIndex , chosenQuestions)}
    const Options = document.querySelectorAll('input')
    answersChecked(Options)
    Options.forEach((option)=>{
        option.addEventListener('click' , (e) =>{
             answerid = e.currentTarget.getAttribute('id')
             question_type = e.currentTarget.getAttribute('type')
            
                 if(storeAnswers.some(e => e.currentQuestionIndex === currentQuestionIndex)){
                    if(question_type === 'radio'){storeAnswers.splice(currentQuestionIndex , 1 , {answerid ,currentQuestionIndex}) }
                    else if(question_type === 'checkbox'){
                        checkboxAnswers.push(answerid)
                        nextButton.addEventListener('mouseover' , function(){
                            if(checkboxAnswers.length > 0){storeAnswers.splice(currentQuestionIndex , 1 , {answerid:checkboxAnswers ,currentQuestionIndex})}
                            checkboxAnswers =[]
                        })
                    }
                }
                else{
                    if(question_type === 'radio'){
                        storeAnswers.push({ answerid ,currentQuestionIndex}) }
                    else if(question_type === 'checkbox'){
                        checkboxAnswers.push(answerid)
                        nextButton.addEventListener('mouseover' , function(){ 
                            currentQuestionIndex = currentQuestionIndex -1
                            if(checkboxAnswers.length > 0){storeAnswers.push({ answerid:checkboxAnswers ,currentQuestionIndex})}
                            noOfQuestionsAnswered.innerHTML =`${storeAnswers.length}/${chosenQuestions.length}`
                            currentQuestionIndex = currentQuestionIndex+1
                            checkboxAnswers =[]
                })
             }
         }
       }) // the end of the option event listener
    })// end of the foreach higher method 
})// the end of the next button event listeneter  



submitButton.addEventListener('click' , function(e){

    // the answer vertication happens here 
})





/**
 * This function is called when the user clicks on the start button and it responsible for the event on it click
 */
function startButtonEventHandler(e){
    startButton.style.display= "none"
    quizContainer.style.display = 'block'
    progressBar.style.width ="0px"
    noOfQuestionsAnswered.innerHTML =`${storeAnswers.length}/${chosenQuestions.length}`
    questionLoader(currentQuestionIndex , chosenQuestions)
    const Options = document.querySelectorAll('input')
    Options.forEach((option)=>{
         option.addEventListener('click' , (e) =>{
             answerid = e.currentTarget.getAttribute('id')
             question_type = e.currentTarget.getAttribute('type')
                if(storeAnswers.some(e => e.currentQuestionIndex === currentQuestionIndex)){
                if(question_type === 'radio'){
                    storeAnswers.pop()
                    storeAnswers.push({ answerid ,currentQuestionIndex})
                   }
                else if(question_type === 'checkbox'){
                    storeAnswers.pop()
                    checkboxAnswers.push(answerid) 
                    storeAnswers.push({ answerid:checkboxAnswers ,currentQuestionIndex})
                    checkboxAnswers = []
                }
                }
                else{
                    if(question_type === 'radio'){
                        storeAnswers.push({ answerid ,currentQuestionIndex})
                    }
                    else if(question_type === 'checkbox'){
                        checkboxAnswers.push(answerid)
                        storeAnswers.push({ answerid:checkboxAnswers ,currentQuestionIndex})
                    }
                }
        })// the option event listener
    })// end of the foreach higher order function
}
// this function is used to ensure the question are checked when they are selected all the time
function answersChecked(Options){
    for(let i =0 ;  i < storeAnswers.length ; i++){
        if(storeAnswers[i].currentQuestionIndex === currentQuestionIndex){
            if(storeAnswers[i].answerid.length ===1){
                for(let y = 0; y < 4; y++){
                    if(Options[y].getAttribute('id') === storeAnswers[i].answerid){
                         Options[y].setAttribute('checked' , 'checked')
                        break
                    }
                }
            }
            else if(storeAnswers[i].answerid.length > 1){
                let code  = [];
                for(let u = 0 ; u < storeAnswers[i].answerid.length ; u++){
                    let codeA = 'a'
                    let codeAns = storeAnswers[i].answerid[u]
                   codeAns = codeAns.codePointAt()
                   codeAns = codeAns - codeA.codePointAt();
                   code.push(codeAns)
                }
            for(let i = 0; i < code.length; i++){ Options[code[i]].setAttribute('checked' ,'checked') }
            }
           break
       }
   } 
}
function generateRandomNumber(array){return Math.floor(Math.random()*array.length)}
function toSetQuestions(array){for(let i  =0 ; i < randonIndex.length; i++){array[randonIndex[i]].picked = true} return array}
// this function is responsible for getting the question to display on the screen 
function questionLoader(num , array){
   const questionHolder = document.querySelector('.questions-holder')
    const questionPrototype = `
    <h2>${array[num].question}</h2>
    <ul>
        <li> 
         <input type="${array[num].question_type}" name="Options" id="a">
         <label for="a">${array[num].options.a}</label>
         <li>
           
             <input type="${array[num].question_type}" name="Options" id="b">
             <label for="b" >${array[num].options.b}</label>
         </li>
         <li>
             <input type="${array[num].question_type}" name="Options" id="c">
             <label for="c">${array[num].options.c}</label>
         </li>
         <li>   
         <input type="${array[num].question_type}" name="Options" id="d">
         <label for="d">${array[num].options.d}</label>
         </li>
    </ul>
    `

 questionHolder.innerHTML = questionPrototype


}

 