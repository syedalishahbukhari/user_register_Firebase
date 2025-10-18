
// function myfun(){
//     alert('wor')
// }

let myfun = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value


    if(email === "" || password === ""){
        // alert('fill the inputs')
        Swal.fire({
  icon: "error",
  title: "Oops... fil the inputs",

});
    } else{
        // console.log(email + password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    // alert('User Register')
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "User Register",
  showConfirmButton: false,
  timer: 1500
});
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode + errorMessage)
    // ..
  });
         
    }
    
}