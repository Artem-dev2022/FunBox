const card1 = document.querySelectorAll('.card')[0];
const card1Link = document.querySelectorAll('.products__item__link')[0];
const card2 = document.querySelectorAll('.card')[1];
const card2Link = document.querySelectorAll('.products__item__link')[1];
const card3 = document.querySelectorAll('.card')[2];
const card3Link = document.querySelectorAll('.products__item__link')[2];

document.addEventListener('DOMContentLoaded', function(){
    card1.disabled == true ? card1Link.innerHTML = 'Печалька, с фуа-гра закончился.' : null;
    card2.disabled == true ? card2Link.innerHTML = 'Печалька, с рыбой закончился.' : null;
    card3.disabled == true ? card3Link.innerHTML = 'Печалька, с курой закончился.' : null;
})

const link1 = document.querySelectorAll('.products__item__link button')[0];
const border1 = document.querySelectorAll('.border__path')[0];
const weight1 = document.querySelectorAll('.card__weight')[0];
const link2 = document.querySelectorAll('.products__item__link button')[1];
const border2 = document.querySelectorAll('.border__path')[1];
const weight2 = document.querySelectorAll('.card__weight')[1];
const link3 = document.querySelectorAll('.products__item__link button')[2];
const border3 = document.querySelectorAll('.border__path')[2];
const weight3 = document.querySelectorAll('.card__weight')[2];

//////////////////1\\\\\\\\\\\\\\\\\\\\\\\

function selectFirst(){
    border1.classList.toggle('border-selected');
    weight1.classList.toggle('weight-selected');
}
function selectFirstOver(){
    border1.classList.contains('border-selected') ? 
    (border1.classList.add('border-hover-selected'),
    weight1.classList.add('weight-hover-selected')) :
    (border1.classList.add('border-hover-default'),
    weight1.classList.add('weight-hover-default')) 
}
function selectFirstOut(){
    border1.classList.remove('border-hover-selected')
    weight1.classList.remove('weight-hover-selected')
    border1.classList.remove('border-hover-default')
    weight1.classList.remove('weight-hover-default')
}

card1.addEventListener('click', selectFirst);
link1.addEventListener('click', selectFirst);

card1.onmouseenter = selectFirstOver;
card1.onmouseleave = selectFirstOut;

//////////////////2\\\\\\\\\\\\\\\\\\\\\\\

function selectSecond(){
    border2.classList.toggle('border-selected');
    weight2.classList.toggle('weight-selected');
}
function selectSecondOver(){
    border2.classList.contains('border-selected') ? 
    (border2.classList.add('border-hover-selected'),
    weight2.classList.add('weight-hover-selected')) :
    (border2.classList.add('border-hover-default'),
    weight2.classList.add('weight-hover-default')) 
}
function selectSecondOut(){
    border2.classList.remove('border-hover-selected')
    weight2.classList.remove('weight-hover-selected')
    border2.classList.remove('border-hover-default')
    weight2.classList.remove('weight-hover-default')
}

card2.addEventListener('click', selectSecond);
link2.addEventListener('click', selectSecond);

card2.onmouseenter = selectSecondOver;
card2.onmouseleave = selectSecondOut;

//////////////////3\\\\\\\\\\\\\\\\\\\\\\\

function selectThird(){
    border3.classList.toggle('border-selected');
    weight3.classList.toggle('weight-selected');
}
function selectThirdOver(){
    border3.classList.contains('border-selected') ? 
    (border3.classList.add('border-hover-selected'),
    weight3.classList.add('weight-hover-selected')) :
    (border3.classList.add('border-hover-default'),
    weight3.classList.add('weight-hover-default')) 
}
function selectThirdOut(){
    border3.classList.remove('border-hover-selected')
    weight3.classList.remove('weight-hover-selected')
    border3.classList.remove('border-hover-default')
    weight3.classList.remove('weight-hover-default')
}

card3.addEventListener('click', selectThird);
link3.addEventListener('click', selectThird);

card3.onmouseenter = selectThirdOver;
card3.onmouseleave = selectThirdOut;