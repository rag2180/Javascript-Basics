//alert("Connected");

document.querySelector(".myform").addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    console.log(event.target.email.value);
    event.target.username.value = '';
    event.target.password.value = '';
    event.target.email.value = '';
});