//alert('File is Attached')

/////////////////////////


//Document Object Model allows us to use as below
//console.log(document.head);
//console.log(document);
//console.log(document.URL);
//console.log(document.title);

/////////////////////////
/*
document.title = "This is New Title";
console.log(document.title); // This returns title content
console.log(document.getElementById("idone")); // This returns whole element. Hence we can't change it the way we did it for title above
console.log(document.getElementsByClassName("class1"));
 */

/////////////////////////

/*
const MyElement1 = document.querySelector('p'); //Only first normal p tag
console.log(MyElement1);

const MyElement2 = document.querySelector('#idone'); //to select from id
console.log(MyElement2);

const MyElement3 = document.querySelector('.class1'); //to select from class
console.log(MyElement3);

const AllElements = document.querySelectorAll('p');
console.log(AllElements);
 */

////////////////////////

/*
const myPelement = document.querySelector("p");
console.log(myPelement);
myPelement.textContent = "I am being changed from JS";
 */

/////////////////////////

/*
const myPelements = document.querySelectorAll("p");
for (const [k,v] of myPelements.entries()){
    console.log(k, v);
}

myPelements.forEach((p) => {p.textContent = 'I am changed using JS Loop'});

 */

/////////////////////////
/*
//Adding Elements
const myNewPara = document.createElement('p');
myNewPara.textContent = "This is created via JS";
document.querySelector('body').appendChild(myNewPara);

 */
///////////////////////
//Events Listener
/*
document.querySelector('button').addEventListener('click', (myevent) =>{
    console.log("Button Was Pressed");
    console.log(myevent);
    myevent.target.textContent = "I was Clicked" //Button Text
});

 */

////////////////////////
//Track Input Form
document.querySelector("#myform").addEventListener('input',(myevent)=>{
    console.log(myevent.target.value)
});

