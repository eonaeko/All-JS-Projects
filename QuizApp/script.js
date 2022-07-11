const bars = document.getElementById('bars')
const Button = document.querySelector('button')

let bars_width  = 0;

Button.addEventListener('click' ,function(e){
 bars_width += 5;
 let bars_width_px = bars_width +"%"
 bars.style.width = bars_width_px;
 bars.style.height = '50px'

 if(bars_width === 100){
     bars_width =0 
     bars.style.width = 0;
 }

})