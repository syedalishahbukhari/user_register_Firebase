
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
        firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert('User Valid...')
        window.location.href = './landingpage.html'
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode + errorMessage)
    });

        }
    
}