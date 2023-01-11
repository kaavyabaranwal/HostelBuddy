
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByTLPvU56qnrosvqFHozp735co51idgkM",
    authDomain: "hostelbuddy-6408c.firebaseapp.com",
    projectId: "hostelbuddy-6408c",
    storageBucket: "hostelbuddy-6408c.appspot.com",
    messagingSenderId: "783009313222",
    appId: "1:783009313222:web:bfe3592fbd3c97d9cc02c7"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


// sign up code
const signup = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //tester
    console.log(email, password);

    // FROM FIREBASE
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // document.write("sign up success!");
            window.location = "home.html";
            console.log(result);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorMessage);
            // ..
        });
}

// sign in code 

const signin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //tester
    console.log(email, password);

    // FROM FIREBASE
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // document.write("sign in success!");
            window.location = "home.html";
            console.log(result);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorMessage);
        });
}