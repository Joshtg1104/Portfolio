// let reveal = document.getElementsByClassName('hitMeUp');
// console.log(reveal);
// reveal[0].onmouseover=function() {
//     reveal.removeAttr('hidden')
// };


let reveal = document.getElementsByClassName('hitMeUp');
let notHidden = document.getElementsByClassName('notHiddenArea');


notHidden[0].onmouseover=function() {
    reveal[0].removeAttribute('hidden');
    reveal[0].classList.add("animated", "pulse");
};

// notHidden[0].addEventListener("mouseover", function(){
//     reveal[0].removeAttribute('hidden')
// });