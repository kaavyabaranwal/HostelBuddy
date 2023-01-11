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

var db = firebase.database().ref("app_form");

document.getElementById("app_form").addEventListener("submit", submitForm);

function submitForm() {
    // e.preventDefault();

    var name = document.getElementById("name").value;
    var room = get_value("room");
    var email = get_value("email");
    var enroll = get_value("enroll");
    var date_out = get_value("out");
    var date_in = get_value("in");
    var message = get_value("message");

    //tester

    console.log(name, room, email, enroll, date_out, date_in, message);

    save_data(name, room, email, enroll, date_out, date_in, message);
}

const save_data = (name, room, email, enroll, date_out, date_in, message) => {
    var object = db.push();
    object.set(
        {
            Name: name,
            Room: room,
            Email: email,
            Enrollment: enroll,
            Date_Out: date_out,
            Date_In: date_in,
            Message: message,
        }

    )
}

const get_value = (id) => {
    return document.getElementById(id).value;
}