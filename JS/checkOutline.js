 
/**
 * A simple program that takes  an array of objects and verfies if the course entered is offered in the Telecommunicvation
 * department and prints the courecode , title , lecturer and a link to it past question
 * this program can be improve upon and be used in the NATECSS website 
 */
// array of objects named TCScourseOutline 
let TCScousreOutline = [
  {
    courseCode: "TCS222"  ,
    courseTitle:"NETWORKING I",
    courseLeturter: "Dr H.B. Akande",
    lecturerImgUrl:"img/emman.jpg" ,
    coursePastQURL :"https:emmanuelOnaeko.com"
  }
  ,
  {
    courseCode: "TCS205"  ,
    courseTitle:"LOGIC CIRCUITS",
    courseLeturter: "Mr A.O. Ajagbe",
    lecturerImgUrl:"img/joe.jpg" ,
    coursePastQURL :"https:emmanuelOnaeko.com"
  }
  ,
  {
    courseCode: "TCS207"  ,
    courseTitle:"TRANSMISSIONS SYSTEMS",
    courseLeturter: "Mr B.O Ayeni",
    lecturerImgUrl:"img/emman.jpg" ,
    coursePastQURL :"https:emmanuelOnaeko.com"
  }
  ,{
    courseCode: "TCS221"  ,
    courseTitle:"TELECOMMUNICATION & NETWORKING II",
    courseLeturter: "Dr A.A Oloyede",
    lecturerImgUrl:"img/joe.jpg" ,
    coursePastQURL :"https:emmanuelOnaeko.com"
  }
  ,
  {
    courseCode: "TCS208"  ,
    courseTitle:"CELLULAR COMMUNICATION I",
    courseLeturter: "Dr. S.O. Onidare",
    lecturerImgUrl:"img/emman.jpg" ,
    coursePastQURL :"https:emmanuelOnaeko.com"
  }
  ,
  {
    courseCode: "TCS204"  ,
    courseTitle:"ELECTROMAGNETIC WAVES AND FIELDS",
    courseLeturter: "Mr A.O. Ajagbe",
    lecturerImgUrl:"img/joe.jpg" ,
    coursePastQURL :"https:emmanuelOnaeko.com"
  }
  ,
  {
    courseCode: "TCS224"  ,
    courseTitle:"WORKSTATION AND SERVER APPLICATIONS",
    courseLeturter: "Dr H.B. Akande",
    lecturerImgUrl:"img/emman.jpg" ,
    coursePastQURL :"https:emmanuelOnaeko.com"
  }
  ,
  {
    courseCode: "TCS112"  ,
    courseTitle:"TELECOMMUNICATION & NETWORKING I",
    courseLeturter: "Mr. o. Imam-Fulani",
    lecturerImgUrl:"img/joe.jpg" ,
    coursePastQURL :"https:emmanuelOnaeko.com"
  }
  ,
  {
    courseCode: "TCS111"  ,
    courseTitle:"INTRODUCTION TO TELECOMMUNICATIONS",
    courseLeturter: "Mr. o. Imam-Fulani",
    lecturerImgUrl:"img/emman.jpg" ,
    coursePastQURL :"https:emmanuelOnaeko.com"
  }

];// end of array




const getInput = document.getElementById("input-form");
const getButton = document.getElementById('check');
const getContainer = document.getElementById("container")
const getContainer2 = document.getElementById("container2");
const getContainer3 = document.getElementById("container3")
const getLevelMessage = document.querySelectorAll(".level-message");
const getEven = document.querySelector(".even")
const getODD = document.querySelector(".odd")

getButton.addEventListener("click",
function(){
  let course_Code = getInput.value;
  /*
   * the split function and join function caters for the fact that there can be space in user input which 
   * can break the program ,spilt removes it and join joins them back with no space
   */
  course_Code=course_Code.split(" ");
  course_Code = course_Code.join("");
  /*the courseCode in the array is uppercase there for if a user enter lowercase the code won't properly 
  therefore the below ensure to take all parameter uppercase*/
  course_Code = course_Code.toUpperCase();
  getContainer2.innerHTML= "";
  let cous = course_Code[0]; // take the first letter of courseCodee entered
  cous = Number(cous);
  if(Number.isNaN(cous) === true){
    getCourseDetails(course_Code);  //a call to a function named getCourseDetails which takes the parameter course_Code
  }
  else{
    getLevelsFullDetails(cous)
  }

  getInput.value = "" // take the input form value back to it placeholder
})


// a function is declared named getCourseDetails which takes the course code as its argument and provides a way
//to loop around the array 
function getCourseDetails(course_Code){
  let storeLastvalue;
  let num ;
  let detailsInfo;
  getContainer2.innerHTML =" "; //emptys the other function container in Html
  getContainer3.innerHTML =" "
  for(let i = 0; i<TCScousreOutline.length; i++){
    storeLastvalue = course_Code.charAt(course_Code.length-1);
    storeLastvalue = Number(storeLastvalue);
    if(course_Code ===TCScousreOutline[i].courseCode){
      
        if (storeLastvalue %2 === 0){
           storeLastvalue = "2nd";
        }
        else{
          storeLastvalue = "1st";
        }
        detailsInfo =` 
        
        <img src="${TCScousreOutline[i].lecturerImgUrl}" alt="" class="imageH">
        <div>
        <div class="details-info">
            <h1 class="contained-h1">Name: ${TCScousreOutline[i].courseLeturter}</h1>
         <div>
                <span class="bolder-span">Course taught:</span><span> ${TCScousreOutline[i].courseCode}</span></span><br>
                <span class="bolder-span">Course Title:</span><span> ${TCScousreOutline[i].courseTitle}</span><br>
                <span class="bolder-span">Semeter:</span> ${storeLastvalue}</span><br>
                <span class="link-span"><a href="${TCScousreOutline[i].coursePastQURL}">Get materials and past questions</a></span>
         </div>
        </div>
        </div>
    
    
        `;
        num = i;
       getContainer.innerHTML = detailsInfo;
       break
      }
    
  }
  if(num === undefined){
      detailsInfo = `
      <div class ="error-red">
      This course ${course_Code} is not offered in TCS 
      <div>
      `
      getContainer.style.boxShadow = "0 0 0 rgb(255,255,255,0 )";
      getContainer.innerHTML = detailsInfo;
  }
}



/*this function getLevelFullDetails() function is the function responsible for printing out the course done in a particular level
for example if one is in 200 lvl in TCS, instead of checking for a particular course he decided to check all the course done in his level and 
this function is responsible for doing that , it takes cous as a parameter which is the first number that representd that level for example 200 who has a cous 0f 2 
which is given to perform certain analysis in the code
*/

function getLevelsFullDetails(cous){
  let storeLastvalue;
  getContainer.innerHTML = " ";// emptys the other function container
  getContainer2.innerHTML =" "
  getContainer3.innerHTML = " "

  TCScousreOutline.sort( function(a,b){
    if(a.courseCode[a.courseCode.length-1] % 2 === 0){
      return 1;
    }
  else if (a.courseCode[a.courseCode.length -1] % 2 !== 0){
    return -1
  }
  return 0
  
})// used to sort the array 

let evenArray =TCScousreOutline.filter(a =>{return a.courseCode[a.courseCode.length-1] %2 === 0})
let oddArray = TCScousreOutline.filter(a => {return a.courseCode[a.courseCode.length - 1] %2 !==0})



  function  printOutDetails(array , container){
  
    let detailsInfo;
    for(let i = 0; i <  array.length; i++){
      storeLastvalue = array[i].courseCode.charAt(array[0].courseCode.length-1);
      storeLastvalue = Number(storeLastvalue);
      if(cous == array[i].courseCode[3]){
          if (storeLastvalue %2 === 0){
             storeLastvalue = "2nd";
             getEven.innerHTML = `The following are offered in ${storeLastvalue} semeter` ;
            
            }
          else{
            storeLastvalue = "1st";
            getODD.innerHTML= `The following are offered in ${storeLastvalue} semeter`;
            
            //getLevelMessage.forEach(message =>{console.log(message.innerHTML= storeLastvalue)})
          }

         
       // next time you open this file work on creating a div btw the margin box and img that would be would be used 
       // to console the semeter
          detailsInfo =` 
         <div class = "margin-box">
          <img src="${array[i].lecturerImgUrl}" alt="" class="imageH">
          <div>
          <div class="details-info">
              <h1 class="contained-h1">Name: ${array[i].courseLeturter}</h1>
           <div>
                  <span class="bolder-span">Course taught:</span><span> ${array[i].courseCode}</span></span><br>
                  <span class="bolder-span">Course Title:</span><span> ${array[i].courseTitle}</span><br>
                  <span class="bolder-span">Semeter:</span> ${storeLastvalue}</span><br>
                  <span class="link-span"><a href="${array[i].coursePastQURL}">Get materials and past questions</a></span>
           </div>
          </div>
          </div>
          </div>
      
      
          `;
         
       
         
         container.innerHTML += detailsInfo;
         container.style.display = "block";
        }
       
  }
  
  
}
printOutDetails(oddArray , getContainer2)
printOutDetails(evenArray , getContainer3)
}



