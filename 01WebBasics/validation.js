//alert('Connected');

// function myValidation() {
//     let myValue = document.getElementById("myform").value;
//     if (isNaN(myValue) || myValue < 1 || myValue > 100){
//         console.log("Wrong Input");
//     }else{
//         console.log("This is a Valid Input");
//         e = document.getElementById("idone")
//         console.log(e);
//         e.textContent = `You Entered - ${myValue}`;
//     }
// }

//form Validation
q = document.querySelector(".myform");
console.log(q);
q.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = '';
    event.target.realname.value = '';
});