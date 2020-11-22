const f_firstname1=document.getElementById("f_firstname");
const f_lastname1=document.getElementById("f_lastname");
//const f_country1=document.getElementById("f_country");
const f_streetaddress1=document.getElementById("f_streetaddress");
const f_town1=document.getElementById("f_town");
const f_postcode1=document.getElementById("f_postcode");
const f_phone1=document.getElementById("f_phone");
const f_email1=document.getElementById("f_email");
//const f_radio1=document.getElementById("radiocheck");

//const f_message1=document.getElementById("f_message");
//const f_subject1=document.getElementById("f_subject");

//const f_id1=document.getElementById("f_id");

const placeorderbtn =document.getElementById("f_placeorder");

const database=firebase.database();
placeorderbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    database.ref('/users/'+ f_firstname1.value).set({
        last_name: f_lastname1.value,
        //country:f_country1.value,
        address:f_streetaddress1.value,
        town:f_town1.value,
        postcode:f_postcode1.value,
        phone: f_phone1.value,
        email: f_email1.value,
        //radio:f_radio1.value,
        //subject: f_subject1.value,
        //message: f_message1.value,


    });

});