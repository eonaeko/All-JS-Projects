const getColor = document.querySelector("#color");
const Btn = document.querySelector("#btn")

const ColorHex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    "A" ,"B" ,"C" ,"D" ,"E","F"];

   
Btn.addEventListener("click" , ()=>{
    let color = "#"
    for(let i =0 ; i < 6; i++)  {
    color +=  ColorHex[random()]
    }
    getColor.innerHTML =color;
    document.body.style.backgroundColor= color;
   
})
function random(){
    return Math.floor(Math.random() * ColorHex.length)
}
