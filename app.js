//Hamburger Menu Click application
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector("#navbarNav");
navbarToggler.addEventListener("click", function () {
  navbarCollapse.classList.toggle("show");
});

//Scroll application
var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 70) {
          nav.style.backgroundColor = 'rgb(50, 85, 147)';
        } else {
          nav.style.backgroundColor = ''; 
        }
      });
  
//Our Classes Button Change 
const yoga = document.querySelector("#yoga");
const group = document.querySelector("#group");
const solo = document.querySelector("#solo");
const stretching = document.querySelector("#stretching");
const firstTitle = document.querySelector("#firstTitle");
const secondTitle = document.querySelector("#secondTitle");
const firstText = document.querySelector("#firstText");
const secondText = document.querySelector("#secondText");
const imgChange = document.querySelector("#imgChange");
const tire = '-'

yoga.addEventListener("click",()=>{
  firstTitle.textContent = "Why are your yoga?",
  secondTitle.textContent = "When comes Yoga Your Time?",
  firstText.textContent = "Yoga is a sports activity consisting of balance and breathing exercises. People do yoga for different reasons, such as relaxing or providing peace of mind and body. Doing yoga regularly; It enables people to increase their body elasticity, breathe correctly and stay fit."
  secondText.innerHTML = `Saturday-Sunday: 8:00am - 10:00am <br>
  Monday-Tuesday: 10:00am - 12:00pm <br>
  Wednesday-Friday: 3:00pm - 8:00pm`
  imgChange.src= "./assets/yoga.jpg"
});
group.addEventListener("click",()=>{
  firstTitle.textContent = "Why are your group?",
  secondTitle.textContent = "When comes Group Your Time?",
  firstText.textContent = "Group is a sports activity consisting of balance and breathing exercises. People do yoga for different reasons, such as relaxing or providing peace of mind and body. Doing yoga regularly; It enables people to increase their body elasticity, breathe correctly and stay fit."
  secondText.innerHTML = `Saturday-Sunday: 8:00am - 10:00am <br>
  Monday-Tuesday: 10:00am - 12:00pm <br>
  Wednesday-Friday: 3:00pm - 6:00pm`
  imgChange.src= "./assets/group.webp"
})
solo.addEventListener("click",()=>{
  firstTitle.textContent = "Why are your solo?",
  secondTitle.textContent = "When comes Solo Your Time?",
  firstText.textContent = "Group is a sports activity consisting of balance and breathing exercises. People do yoga for different reasons, such as relaxing or providing peace of mind and body. Doing yoga regularly; It enables people to increase their body elasticity, breathe correctly and stay fit."
  secondText.innerHTML = `Saturday-Sunday: 9:00am - 11:00am <br>
  Monday-Tuesday: 11:00am - 13:00pm <br>
  Wednesday-Friday: 4:00pm - 7:00pm`
  imgChange.src= "./assets/solo.jpg"
});
stretching.addEventListener("click",()=>{
  firstTitle.textContent = "Why are your stretching?",
  secondTitle.textContent = "When comes Stretching Your Time?",
  firstText.textContent ="The importance of stretching is also frequently emphasized by experts. Stretching movements help open and relax all muscle groups, from fingers to back and neck. Stretching movements are recommended to exercise the mind correctly and effectively along with the body."
  secondText.innerHTML = `Saturday-Sunday: 10:00am - 12:00am <br>
  Monday-Tuesday: 12:00am - 2:00pm <br>
  Wednesday-Friday: 3:00pm - 6:00pm`
  imgChange.src= "./assets/stret.webp"
})


// BMI Calculator
const arrow = document.querySelector('#arrow');

function bmiCalc() {
    let height = parseFloat(document.getElementById("cm").value); // x değerini sayıya dönüştür
    let weight = parseFloat(document.getElementById("kg").value); // y değerini sayıya dönüştür
   
    const bmiText = document.querySelector("#bmiText");
    let bmi = weight / ((height / 100) ** 2);
    bmiText.innerHTML = "Your BMI = " + bmi.toFixed(2) ;
    if (!isNaN(bmi) && bmi >= 0) {
      
      
      var leftValue;
      if (bmi <= 0) {
          leftValue = '8%';
      } else if (bmi > 0 && bmi <= 18.5) {
        var underWeight = 8 + (bmi - 0) * ((24 - 8) / (18.5 - 0)); // Lineer bir aralık hesabı
        leftValue = underWeight + '%';
      } else if (bmi > 18.5 && bmi <=24.9) {
        var normal = 24 + (bmi - 18.5) * (15 / (24.9 - 18.5)); 
        leftValue = normal + '%';
      }
      else if (bmi > 24.9 && bmi <=29.9) {
        var overWeight =39 + (bmi - 24.9) * ((55 - 39) / (29.9 - 24.9)); 
        leftValue = overWeight + '%';
      }else if (bmi > 29.9 && bmi <=34.9) {
        var obese =55 + (bmi - 29.9) * ((71 - 55) / (34.9 - 29.9));
        leftValue = obese + '%';
      }
      else if (bmi > 35 && bmi <=53.5) {
        var extraObese =71 + (bmi - 34.9) * ((84 - 71) / (53.5 - 34.9)); 
        leftValue = extraObese + '%';
      }

      
      arrow.style.left = leftValue;
  }
    
}

//Nav Links Target Id Application 

document.querySelectorAll('nav a').forEach(move => {
  move.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({
        top: offsetTop - 100, 
        behavior: 'smooth' 
      });
    }
  });
});
