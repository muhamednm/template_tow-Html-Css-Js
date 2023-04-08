
let showNav = document.querySelector(".menu");
let list = document.querySelector(".nav-bar");


showNav.addEventListener("click", () => {

        list.classList.toggle("show")
    
})
// end to show navbare 

// start to scroll down 
let link = document.querySelectorAll(".links")

link.forEach((item) => {
    item.addEventListener("click", () => {
        let el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({ behavior: "smooth", block: "start" });


    });

});
// end to scroll down 
// start to scroll top 


const upTop = document.querySelector("#up");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.scrollY > 300) {
        upTop.style.right = "10px";
    }
    else {
        upTop.style.right = "-50px";

    };
};

upTop.addEventListener("click", topFunction);

function topFunction() {

    window.scrollTo(0, 0);

}

// start to scroll top 


//start to button buy

let buy = document.querySelectorAll(".buy");
let No = document.querySelector(".no")
let buying = document.querySelector(".container1");

buy.forEach(element => {

    element.addEventListener("click", () => {
        buying.classList.add("activ");
    });
})
// start to button buy

//start to button No

No.addEventListener("click", () => {

    buying.classList.remove("activ")
});

//start to button Yes




