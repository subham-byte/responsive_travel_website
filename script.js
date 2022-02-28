const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener("click", function(){
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})