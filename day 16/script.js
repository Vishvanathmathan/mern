let wrap = document.querySelector("#wrapper");
let like = document.querySelector(".like");

wrap.addEventListener("dblclick",() => {
    // like.style.transform = scale(1);
    like.style.opacity = "100";

    setTimeout(() =>{
        like.style.opacity = "0";
    },1000)
});

