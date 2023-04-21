
let answer = document.querySelectorAll(".accordion");
answer.forEach(function(event){
    event.addEventListener("click",function(){
        if(event.classList.contains("active")){
            event.classList.remove("active");
            event.classList.remove("black");
        } else{
            event.classList.add("active");
            event.classList.add("black");
        }
    });
});

