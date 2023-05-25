let cut=document.querySelector(".cut");
let togal=document.querySelector(".togal");

let aside=document.querySelector(".aside");

togal.addEventListener("click",function(){

  aside.style.width='240px';
});

cut.addEventListener("click",function(){
    aside.style.width='0px'
})

let k1=document.querySelectorAll(".k1")


let about_headList= document.querySelectorAll(".about_headList");

k1[0].classList.remove("active");


about_headList[0].addEventListener("click",function(){

    k1.forEach( item=>{
        item.classList.add("active")
    });
    k1[0].classList.remove("active");
    
    about_headList.forEach( item=>{
        item.classList.remove("activelink")
    });
    about_headList[0].classList.add("activelink");
})
about_headList[1].addEventListener("click",function(){

    k1.forEach( item=>{
        item.classList.add("active")
    });
    k1[1].classList.remove("active");

    about_headList.forEach( item=>{
        item.classList.remove("activelink")
    });
    about_headList[1].classList.add("activelink");
})
about_headList[2].addEventListener("click",function(){
  
    k1.forEach( item=>{
        item.classList.add("active")
    });
    k1[2].classList.remove("active");

    about_headList.forEach( item=>{
        item.classList.remove("activelink")
    });
    about_headList[2].classList.add("activelink");
})




