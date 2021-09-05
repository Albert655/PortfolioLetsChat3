
//Your web app's Firebase configuration

var firebaseConfig = {

    apiKey: "AIzaSyAqW6N2wLEw31RTjUgG7qdnGEfnu-2EgMg",

    authDomain: "kwitter-e021b.firebaseapp.com",

    databaseURL: "https://kwitter-e021b-default-rtdb.firebaseio.com",

    projectId: "kwitter-e021b",

    storageBucket: "kwitter-e021b.appspot.com",

    messagingSenderId: "532289319081",

    appId: "1:532289319081:web:494ac398529884681779b8"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>"
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }
  