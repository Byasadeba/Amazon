const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener('click',function(event) {
    console.log('do0ne');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft += 1100;
    event.preventDefult();
});
leftbtn.addEventListener('click',function(event) {
    console.log('do0ne');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -= 1100;
    event.preventDefult();
});

const leftbtn1 = document.querySelector(".btn-1b");
const rightbtn1 = document.querySelector(".btn-1a");

rightbtn1.addEventListener('click',function(event) {
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft += 1100;
    event.preventDefult();
});
leftbtn1.addEventListener('click',function(event) {
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft -= 1100;
    event.preventDefult();
});

const leftbtn2 = document.querySelector(".btn-2b");
const rightbtn2 = document.querySelector(".btn-2a");

rightbtn2.addEventListener('click',function(event) {
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-2');
    conent.scrollLeft += 1100;
    event.preventDefult();
});
leftbtn2.addEventListener('click',function(event) {
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-2');
    conent.scrollLeft -= 1100;
    event.preventDefult();
});

const leftbtn3 = document.querySelector(".btn-3b");
const rightbtn3 = document.querySelector(".btn-3a");

rightbtn3.addEventListener('click',function(event) {
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-3');
    conent.scrollLeft += 1100;
    event.preventDefult();
});
leftbtn3.addEventListener('click',function(event) {
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-3');
    conent.scrollLeft -= 1100;
    event.preventDefult();
})

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", ( ) => {
    window.scrollTo({
        top:0 ,
        behaviour:"smooth"
    });
} )

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-x");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", ( ) => {
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll")
});
cross.addEventListener("click", ( ) => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll")
});


const  sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", ( ) => {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
});
 
window.onload = couponload()

function couponload(){
    document.querySelector(".main").style.visibility='visible';
    document.querySelector(".sec-1").style.opacity = '0.4'
    document.body.classList.add("stop-scroll")
};
function couponclose(){
    document.querySelector(".main").style.visibility='hidden';
    document.querySelector(".sec-1").style.opacity = '1'
    document.body.classList.remove("stop-scroll")
};

let body = document.querySelector('body');
let dark_mode_btn = document.querySelector('.dark_mode_btn');
let dark_mode_status = false;            
    dark_mode_btn.addEventListener('click', function(){
    body.classList.toggle('dark_mode_active');
    if (dark_mode_status == false) {
    this.innerHTML = '<i class="fa-sharp fa-solid fa-sun" aria-hidden="true">';
    dark_mode_status = true;
    }else{
    this.innerHTML = '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
    dark_mode_status = false;
    }
    });


//geo with Weather

const temparatureField = document.querySelector(".weather1 span")
const cityField = document.querySelector(".weather2 p")
const dateField = document.querySelector(".weather2 span")
const emojiField = document.querySelector(".weather3 img")
const weatherField = document.querySelector(".weather3 span")



let target = "Bhubaneswar"


const fetchData = async() =>{
    const url = `https://api.weatherapi.com/v1/current.json?key=eb25ae7039054da5840154151222310&q=${target}`
    const response = await fetch(url);
    const data = await response.json();


    console.log(data);

    const {
        
        current:{
            temp_c,
            condition:{text,icon},
        },
        location:{name,localtime},


    } = data

    updateDom(temp_c,name,localtime,icon,text);
};

function updateDom (temparature,city,time,emoji,text){
    temparatureField.innerText = temparature;
    cityField.innerText = city;
    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = getDayName(new Date(exactDate).getDay());

    dateField.innerText = `${exactTime} - ${exactDay} ${exactDate}`

    emojiField.src = emoji;
    weatherField.innerText = text;
}

fetchData();

function getDayName (num){
    switch (num){
        case 0:
            return "Sunday"; 
            case 1: 
                return "Monday"
                case 2: 
                    return "Tuesday"
                    case 3: 
                        return "Wednesday"
                        case 4: 
                            return "Thursday"
                            case 5: 
                                return "Friday"
                                case 6: 
                                    return "Saturday"
        default:
            return "Don't know"
    }
}