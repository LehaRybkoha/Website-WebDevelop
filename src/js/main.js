//slider
let owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    center:true,
    margin:10,
    pagination:true,
    dots:true,
    loop:true,
    autoplay:true,
    autoplayTimeout: 2500,
    autoplayHoverPause:true,
});

//work loading
// const hiddenText = (textElement, textElement2, textElement3, textElement4, textElement5, textElement6, textElement7, textElement8) => {
// 	textElement = document.getElementById('work-examples__item--afterClick');
// 	textElement.parentNode.removeChild(textElement);
// 	//second
// 	textElement2 = document.getElementById('work-examples__item--afterClick2');
// 	textElement2.parentNode.removeChild(textElement2);
// 	//third
// 	textElement3 = document.getElementById('work-examples__item--afterClick3');
// 	textElement3.parentNode.removeChild(textElement3);
// 	//four
// 	textElement4 = document.getElementById('work-examples__item--afterClick4');
// 	textElement4.parentNode.removeChild(textElement4);
// 	//five
// 	textElement5 = document.getElementById('work-examples__item--afterClick5');
// 	textElement5.parentNode.removeChild(textElement5);
// 	//six
// 	textElement6 = document.getElementById('work-examples__item--afterClick6');
// 	textElement6.parentNode.removeChild(textElement6);
// 	//seven
// 	textElement7 = document.getElementById('work-examples__item--afterClick7');
// 	textElement7.parentNode.removeChild(textElement7);
// 	//eight
// 	textElement8 = document.getElementById('work-examples__item--afterClick8');
// 	textElement8.parentNode.removeChild(textElement8);
// };
// hiddenText();

const showText = (workList, textElement, textElement2, textElement3, textElement4, textElement5, textElement6, textElement7, textElement8) => {
	workList = document.querySelector('.work-examples__list')

	textElement = document.createElement('li');
	textElement.className = 'work-examples__item';
	textElement.setAttribute('id', 'work-examples__item--afterClick');
	workList.appendChild(textElement);
	///second
	textElement2 = document.createElement('li');
	textElement2.className = 'work-examples__item';
	textElement2.setAttribute('id', 'work-examples__item--afterClick2');
	workList.appendChild(textElement2);
	//third
	textElement3 = document.createElement('li');
	textElement3.className = 'work-examples__item';
	textElement3.setAttribute('id', 'work-examples__item--afterClick3');
	workList.appendChild(textElement3);
	//four
	textElement4 = document.createElement('li');
	textElement4.className = 'work-examples__item';
	textElement4.setAttribute('id', 'work-examples__item--afterClick4');
	workList.appendChild(textElement4);
	//five
	textElement5 = document.createElement('li');
	textElement5.className = 'work-examples__item';
	textElement5.setAttribute('id', 'work-examples__item--afterClick5');
	workList.appendChild(textElement5);
	// //six
	textElement6 = document.createElement('li');
	textElement6.className = 'work-examples__item';
	textElement6.setAttribute('id', 'work-examples__item--afterClick6');
	workList.appendChild(textElement6);
	//seven
	textElement7 = document.createElement('li');
	textElement7.className = 'work-examples__item';
	textElement7.setAttribute('id', 'work-examples__item--afterClick7');
	workList.appendChild(textElement7);
	//eight
	textElement8 = document.createElement('li');
	textElement8.className = 'work-examples__item';
	textElement8.setAttribute('id', 'work-examples__item--afterClick8');
	workList.appendChild(textElement8);
};
const workExamplesAdding = (htmlFirstText, htmlSecondText) => {
	htmlFirstText = '<img src="/images/your_img_here1.png" alt="Example of our work" class="work-examples__item-img"><div class="work-examples__item-img--overlay"><a href="#" class="work-examples__item-link"><i class="far fa-eye"></i></a></div>';
	htmlSecondText = '<img src="/images/your_img_here2.png" alt="Example of our work" class="work-examples__item-img"><div class="work-examples__item-img--overlay"><a href="#" class="work-examples__item-link"><i class="far fa-eye"></i></a></div>';

	document.getElementById("work-examples__item--afterClick").innerHTML = htmlFirstText;
	document.getElementById("work-examples__item--afterClick2").innerHTML = htmlSecondText;
	document.getElementById("work-examples__item--afterClick3").innerHTML = htmlFirstText;
	document.getElementById("work-examples__item--afterClick4").innerHTML = htmlSecondText;
	document.getElementById("work-examples__item--afterClick5").innerHTML = htmlFirstText;
	document.getElementById("work-examples__item--afterClick6").innerHTML = htmlSecondText;
	document.getElementById("work-examples__item--afterClick7").innerHTML = htmlFirstText;
	document.getElementById("work-examples__item--afterClick8").innerHTML = htmlSecondText;
};
const btnClick = (elementIsClicked, element) => {
elementIsClicked = false; // declare the variable that tracks the state
function clickHandler(){ // declare a function that updates the state
  if (elementIsClicked = true) {
  	showText();
  	workExamplesAdding();
  } else {
  	alert("Error");
  };
};

element = document.getElementById('load-work-examples-btn'); // grab a reference to your element
element.addEventListener('click', clickHandler); // associate the function above with the click event
}

btnClick();