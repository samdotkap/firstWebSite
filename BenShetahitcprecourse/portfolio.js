var body=document.getElementsByTagName("BODY")[0];

if (body.classList.contains('home')){
  var card = document.getElementById('card');

  card.addEventListener('click', function() {
    if (!this.classList.contains('on')) {
      this.classList.add('on');
    } else {
      this.classList.remove('on');
    }
  });
  
  const GITHUB_URL = "https://api.github.com/users/samdotkap";
  
  fetch(GITHUB_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const profileImage = document.getElementById("profile-image");
      profileImage.src = data.avatar_url;
      const myName = document.getElementById("myName")
      myName.innerHTML = data.name;
    });

}//end of homepage logic

if (body.classList.contains('about')){
  
  const prevBtn = document.querySelector('.prev');
  const nxtBtn = document.querySelector('.nxt');
  const iframe= document.querySelectorAll('.iframe');
  let currentlySelected = 0;
  prevBtn.disabled=true;
  
  prevBtn.addEventListener('click', function(){
    iframe[currentlySelected].classList.remove('active');
    currentlySelected--;
    iframe[currentlySelected].classList.add('active');
    prevBtn.disabled = false;
  
    if (currentlySelected === 0){
      prevBtn.disabled= true; 
    }
  });
   
  nxtBtn.addEventListener('click', function(){
    iframe[currentlySelected].classList.remove('active');
    currentlySelected++;
    iframe[currentlySelected].classList.add('active');
    prevBtn.disabled = false;
  
  if (iframe.length === currentlySelected +1){
    nxtBtn.disabled= true;
   } 
   else{
     nxtBtn.disabled= false;
     console.log(currentlySelected);
   }
  });
} //end of about logic
 
if (body.classList.contains('contact')){
  
  var submit = document.querySelector('.submit');
  submit.disabled = true

 
  var required = document.querySelector(".inputt");
  
  var lastNames = document.getElementById("Lastname");
  var firstNames= document.getElementById("Firstname");
  var emails= document.getElementById("Email");
  var comments= document.getElementById("Comment");
  var phones= document.getElementById("Phone");

  required.addEventListener("change", stateHandle);
  comments.addEventListener("change", stateHandle);

  function stateHandle(){
    if(document.querySelector(".inputt").value===""){
      submit.disabled = true;
      console.log("Button does not work")
    }   else {
      submit.disabled = false;
     console.log("BUtton works")}
  }
  document.getElementById('submit').addEventListener("click", function(){
    console.log("First Name: "+firstNames.value);
    console.log("Last Name: "+lastNames.value);
    console.log("Email: "+emails.value);
    console.log("Comment: "+comments.value);
    console.log("Phone Number: "+phones.value);
  })
}//end of contact logic

document.addEventListener("DOMContentLoaded",function(event){
  var langs = ["HTML", "CSS", "JavaScript"];
  var text = "This page was built using: ";
  for(let i=0; i<langs.length-1;i++){
    text=text+langs[i]+", "
  }
  textNew=text+"and "+langs[langs.length-1]+".";

  document.getElementById("lang").innerHTML = textNew;
});
