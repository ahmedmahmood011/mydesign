// start typing effect
let index = 0;
function Typing() {
    let p = document.querySelector(".landing-page .text-welcome p");
    let char = ["Welcom To My WebSite" ,"I Am Ahmed Mahmoud", "Web Developer", "Designer", "By" ,"Photoshop", "Illustrator"];
    let duration = 100;
    let charNum = 0;
    // add Char In pragraph
    let addChar = setInterval(()=>{
        p.innerHTML += char[index].charAt(charNum);
        charNum++
        if (charNum == char[index].length) {
            clearInterval(addChar)
            // start remove Char In pragraph
            setTimeout(() => {
                let removeChar = setInterval(()=>{
                    charNum--
                    p.innerHTML = char[index].slice(0, charNum);
                    if (charNum === 0) {
                        // End Last Index
                        clearInterval(removeChar)
                        // Go to Next Index
                        index ++
                        // Start new Next Index
                        if (index < char.length) {
                            Typing()
                        }
                        // If Finish Indexing replay the Process
                        else {
                            index = 0
                            Typing()
                        }
                    }
                }, duration)    
            }, 1000);
            // End remove Char In pragraph
        }
    }, duration)
}Typing()
// start typing effect

// =========================================================

// start random background
let setIntervalBckground;
function randomBack(){
    let background = document.querySelector(".landing-page");
    let num = 0;
    setIntervalBckground = setInterval(() => {
        num++;
        background.style.backgroundImage = `url(./images/Wallpaper${num}.jpg)`
        if (num === 10) {
            num = 0
        }
    }, 3000);
}randomBack()
// end random background

// =========================================================

// start bullets
function bullets() {
    let sections = document.querySelectorAll(".heading ul li a")
    let bulletsUL = document.querySelector(".bullets");
    sections.forEach((section)=>{
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = section.hash;
        a.setAttribute("data-info", section.innerHTML )
        li.appendChild(a)
        bulletsUL.appendChild(li);
    })
}bullets()
// end bullets

// =========================================================

// start menu Options 

// -- open and close menu
function openAndClose() {
    let element = document.querySelector('.open-menu');
    element.onclick = ()=>{
        element.classList.toggle("rotate-setting")
        element.parentElement.classList.toggle("open-menu-setion")
    }
}openAndClose()

// -- choose Color From Menu
function chooseColor() {
    let buttonColor = document.querySelectorAll(".menu-options .colors .color-option span");
    // click on the color
    buttonColor.forEach((btn, index)=>{
        btn.addEventListener("click" , ()=>{
            buttonColor.forEach((r)=>r.classList.remove("active"))
            btn.classList.add("active")
            document.documentElement.style.setProperty("--main-color", btn.dataset.color);
            localStorage.setItem("activeColor", index )
            localStorage.setItem("colorElements", btn.dataset.color )
        })
    })
    // localeStorage
    if (localStorage.getItem("colorElements") !== null) {
        buttonColor.forEach((r)=>r.classList.remove("active"))
        buttonColor[localStorage.getItem("activeColor")].classList.add("active");
        document.documentElement.style.setProperty("--main-color", localStorage.getItem("colorElements")) 
    }
}chooseColor()

// -- On Or Off Radnom Background 
function onRandomBackground(){
    let button = document.querySelectorAll(".menu-options .random-background .buttons button");
    button.forEach((btn)=>{
        btn.onclick = ()=>{
            button.forEach((e)=>e.classList.remove("on"))
            btn.classList.add("on");
            if (btn.innerHTML === "Yes") {
                localStorage.setItem("random-background", "Yes")
                randomBack()
            } else {
                localStorage.setItem("random-background", "No")
                clearInterval(setIntervalBckground);
            }
        }
    })
    // get Element From LocalStorage
    if (localStorage.getItem("random-background") !== null) {
        button.forEach((b)=>b.classList.remove("on"))
        if (localStorage.getItem("random-background") === "Yes") {
            randomBack()
            button[0].classList.add("on")
        } else {
            clearInterval(setIntervalBckground);
            button[1].classList.add("on")
        }
    }
}onRandomBackground()

// -- Show Or Hidd Bullets
function bulletsOption() {
    let button = document.querySelectorAll(".menu-options .show-bullets .buttons button");
    let bulletsUL = document.querySelector(".bullets");
    button.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            button.forEach((b)=>b.classList.remove("on"))
            btn.classList.add("on")
            if (btn.innerHTML === "Yes") {
                bulletsUL.style.display = "flex";
                localStorage.setItem("onShowBullets", "Yes");
            } else {
                bulletsUL.style.display = "none";
                localStorage.setItem("onShowBullets", "No");
            }
        })
    })
    if (localStorage.getItem("onShowBullets") !== null) {
        button.forEach((b)=>b.classList.remove("on"))
        if (localStorage.getItem("onShowBullets") === "Yes") {
            button[0].classList.add("on")
            bulletsUL.style.display = "flex";
        } else {
            button[1].classList.add("on")
            bulletsUL.style.display = "none";
        }
    }
}bulletsOption()

// -- Fixed Heading
function fixedHeading() {
    let button = document.querySelectorAll(".menu-options .fixed-header .buttons button");
    let fixefHead = document.querySelector(".landing-page .heading");
    button.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            button.forEach((b)=>b.classList.remove("on"))
            btn.classList.add("on")
            if (btn.innerHTML === "Yes") {
                fixefHead.classList.add("fixed-heading");
                fixefHead.style.position = "fixed";
                localStorage.setItem("Fixed-header", "Yes");
            } else {
                fixefHead.classList.remove("fixed-heading");
                fixefHead.style.position = "relative";
                localStorage.setItem("Fixed-header", "No");
            }
        })
    })
    if (localStorage.getItem("Fixed-header") !== null) {
        button.forEach((b)=>b.classList.remove("on"))
        if (localStorage.getItem("Fixed-header") === "Yes") {
            fixefHead.classList.add("fixed-heading");
            button[0].classList.add("on")
            fixefHead.style.position = "fixed";
        } else {
            fixefHead.classList.remove("fixed-heading");
            button[1].classList.add("on")
            fixefHead.style.position = "relative";
        }
    }
}fixedHeading()

// -- animation heading 
function animationHead() {
    let button = document.querySelectorAll(".menu-options .animation-header .buttons button");
    let animationHead = document.querySelector(".landing-page .heading");
    button.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            button.forEach((b)=>b.classList.remove("on"))
            btn.classList.add("on")
            if (btn.innerHTML === "Yes") {
                animationHead.classList.add("animation-heading");
                localStorage.setItem("animation-header", "Yes");
            } else {
                animationHead.classList.remove("animation-heading");
                localStorage.setItem("animation-header", "No");
            }
        })
    })
    if (localStorage.getItem("animation-header") !== null) {
        button.forEach((b)=>b.classList.remove("on"))
        if (localStorage.getItem("animation-header") === "Yes") {
            animationHead.classList.add("animation-heading");
            button[0].classList.add("on")
        } else {
            animationHead.classList.remove("animation-heading");
            button[1].classList.add("on")
        }
    }
}animationHead()

// -- Dark Mode 
function darkMode() {
    let button = document.querySelectorAll(".menu-options .dark-mode .buttons button");
    button.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            button.forEach((b)=>b.classList.remove("on"))
            btn.classList.add("on")
            if (btn.innerHTML === "Yes") {
                colors(1)
                localStorage.setItem("dark-mode", "Yes")
            } else {
                colors(0)
                localStorage.setItem("dark-mode", "No")
            }
        })
    })
    if (localStorage.getItem("dark-mode") !== null) {
        button.forEach((b)=>b.classList.remove("on"))
        if (localStorage.getItem("dark-mode") === "Yes") {
            colors(1)
            button[0].classList.add("on")
        } else {
            colors(0)
            button[1].classList.add("on")
        }
    }
    function colors(onoff) {
        if (onoff === 1) {
            document.documentElement.style.setProperty("--second-color", "#242526");
            document.documentElement.style.setProperty("--three-color", "#3a3b3c");
            document.documentElement.style.setProperty("--four-color", "white");
        } else {
            document.documentElement.style.setProperty("--second-color", "white");
            document.documentElement.style.setProperty("--three-color", "#eee");
            document.documentElement.style.setProperty("--four-color", "black");
        }
    }
}darkMode()

// -- Reset Options 
function resetOptions() {
    let resetBtn = document.querySelector(".reset-options");
    resetBtn.onclick = ()=>{
        localStorage.clear();
        location.reload();
    }
}resetOptions()

// End menu Options 

// =========================================================

// Start Range Skills 

function rangeSkills() {
    let sectionSkills = document.querySelector(".skills")
    let skills = document.querySelectorAll(".skills .rang")
    let startedSkills = false;
    window.onscroll = ()=>{
        scrollTop()
        if (window.scrollY >= sectionSkills.offsetTop -200) {
        if (!startedSkills) {
            skills.forEach((el)=>{ 
                let data = el.dataset.range;
                let w = 0;
                let clear = setInterval(() => {
                    el.style.width = `${w}%`
                    w ++ ;
                    if (w == data) {
                        clearInterval(clear)
                    }
                }, 500 / data);
            })
        }
        startedSkills = true
        }
    }
}rangeSkills()

// End Range Skills 

// =========================================================

// start popup Gallery

function popupGallery(){
    let imgs = document.querySelectorAll(".gallery .images img");
    let popup = document.querySelector(".gallery .popup");
    let closePopup = document.querySelector(".gallery .popup .close");
    closePopup.onclick = ()=>{
        popup.style.display = "none";
    }
    imgs.forEach((img)=>{
        img.addEventListener("click", ()=>{
            popup.style.display = "block";
            popup.children[1].style.backgroundImage = `url(${img.src})` ;
        })
    })
}popupGallery()

// end popup Gallery

// =========================================================

// Start Scroll Top
function scrollTop() {
    let scrolBack = document.querySelector(".scrollback");
    if ( scrollY >= 800 ) {
        scrolBack.style.display = "block";
    } 
    else {
        scrolBack.style.display = "none";
    }
    scrolBack.onclick = ()=>{
        window.scrollTo(0 , 0)
    }
}
// end Scroll Top

// =========================================================

// start Menu Mobile
function menuInMobile() {
    let menu = document.querySelector(".menu");
    let headingUl = document.querySelector(".landing-page .heading ul");
    menu.onclick = ()=>{
        headingUl.classList.toggle("show");
        menu.classList.toggle("clicked");
    }
}menuInMobile()
// End Menu Mobile