const firebaseConfig = {
    apiKey: "AIzaSyByTLPvU56qnrosvqFHozp735co51idgkM",
    authDomain: "hostelbuddy-6408c.firebaseapp.com",
    databaseURL: "https://hostelbuddy-6408c-default-rtdb.firebaseio.com",
    projectId: "hostelbuddy-6408c",
    storageBucket: "hostelbuddy-6408c.appspot.com",
    messagingSenderId: "783009313222",
    appId: "1:783009313222:web:bfe3592fbd3c97d9cc02c7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// referencing

var db = firebase.database().ref("service_request");

document.getElementById("service_request").addEventListener("submit", submitForm);

function submitForm() {
    // e.preventDefault();

    var name = document.getElementById("name").value;
    var room = get_value("room");
    var email = get_value("email");
    var enroll = get_value("enroll");
    var phone = get_value("phone");
    var message = get_value("message");

    //tester

    console.log(name, room, email, enroll, phone, message);

    save_data(name, room, email, enroll, phone, message);
}

const save_data = (name, room, email, enroll, phone, message) => {
    var object = db.push();
    object.set(
        {
            Name: name,
            Room: room,
            Email: email,
            Enrollment: enroll,
            Phone : phone,
            Message: message,
        }

    )
}

const get_value = (id) => {
    return document.getElementById(id).value;
}