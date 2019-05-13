var btn = document.querySelector("#subBtn");

btn.addEventListener("mouseover",function(){
    this.style.background = "white";
    this.style.color = "black";
});

btn.addEventListener("mouseout",function(){
    this.style.background = "none";
    this.style.color = "white";
});