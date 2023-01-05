const ElForm=document.querySelector(".js-form");
const ElInput=document.querySelector(".js-input");
const ElButton=document.querySelector(".js-btn");
const ElBtn1=document.querySelector(".js-btn1");
const ElBtn2=document.querySelector(".js-btn2");
const ElBtn3=document.querySelector(".js-btn3");
const ElTitle=document.querySelector(".js-title");
const ElGroupBtn =document.querySelector(".js-btns")

ElForm.addEventListener("submit",function(evt){
    evt.preventDefault();
    if(ElInput.value=="1"){
        ElTitle.textContent=`${ElBtn1.textContent} CONTENT` 
    }
    if(ElInput.value=="2"){
        ElTitle.textContent=`${ElBtn2.textContent} CONTENT` 
    }
    if(ElInput.value=="3"){
        ElTitle.textContent=`${ElBtn3.textContent} CONTENT` 
    }
    if(ElInput.value>3){
        InvalidIndex=alert("Index is invalid")
    }
    ElInput.value=''
    
})

ElGroupBtn.addEventListener("click",function(evt){
    if(evt.target.matches(".js-btn1")){
        ElTitle.textContent=`${ElBtn1.textContent} CONTENT` 
    }
    if(evt.target.matches(".js-btn2")){
        ElTitle.textContent=`${ElBtn2.textContent} CONTENT` 
    }
    if(evt.target.matches(".js-btn3")){
        ElTitle.textContent=`${ElBtn3.textContent} CONTENT` 
    }
})
