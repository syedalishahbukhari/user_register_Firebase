

let getfulldata = () =>{
   let name =  document.getElementById('name').value
   let email =  document.getElementById('email').value
   let age =  document.getElementById('age').value
   let cnic =  document.getElementById('cnic').value
   let address =  document.getElementById('address').value
   let phoneno =  document.getElementById('phoneno').value
   let gender =  document.getElementById('gender').value

if(name == ""  || email ==""){
    alert('fill ....')
} else {


    let getfulldata = db.collection('get full data').doc()


    // let obj = {
    //     userName : 'kashan',
    //     age : 22 ,
    // }


    let obj = {
        UserName : name,
        UserEmail : email,
        Age : age,
        Usercnic : cnic,
        useraddress : address,
        thegender : gender,
        phoneNo : phoneno,
        date : Date()
    }


    getfulldata.set(obj)
    window.alert('data save..')

}

}