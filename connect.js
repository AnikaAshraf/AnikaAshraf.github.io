const f_name1=document.getElementById("f_name");
const f_email1=document.getElementById("f_email");
const f_message1=document.getElementById("f_message");
const f_subject1=document.getElementById("f_subject");

const f_id1=document.getElementById("f_id");

const sendmessagebtn =document.getElementById("f_sendmessage");

const database=firebase.database();
sendmessagebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    database.ref('/users/'+ f_id1.value).set({
        first_name: f_name1.value,
        email: f_email1.value,
        subject: f_subject1.value,
        message: f_message1.value,


    });

});