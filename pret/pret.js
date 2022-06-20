console.log('helo')

var el = document.querySelector(".btn-toggle-nav");
var changable = document.querySelector(".asides")

console.log(el)

el.addEventListener('click',(e)=>{

  if(changable.className==="asides"){
    changable.classList.remove('asides');
    changable.classList.add('asidesss');
  } else {
    changable.classList.remove('asidesss');
    changable.classList.add('asides');
  }  
})