 
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBZKVkpri74uq-4aUknrp6Z8Mw4w3pHR5Y",
    authDomain: "form-a38cb.firebaseapp.com",
    databaseURL: "https://form-a38cb.firebaseio.com",
    projectId: "form-a38cb",
    storageBucket: "form-a38cb.appspot.com",
    messagingSenderId: "902201711837",
    appId: "1:902201711837:web:a96043f1c2e07acb870f34",
    measurementId: "G-Q12D9V1Y36"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth=firebase.auth();
  const db=firebase.firestore();

  db.settings({timestampsInSnapshots: true});

const signupForm=document.querySelector('#register');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const email=signupForm['email'].value;
    const password=signupForm['password'].value;

    console.log(email);
    console.log(password);

    auth.createUserWithEmailAndPassword(email,password).then(cred=>{
        console.log(cred.user);
        const modal =document.querySelector(".wrapper #register");
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })

});