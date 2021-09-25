var firebaseConfig = {
      apiKey: "AIzaSyCgRzCeVUVSezRQH73HgCK677QLaMZhZ3U",
      authDomain: "schoolwebpagebot-hgng.firebaseapp.com",
      databaseURL: "https://schoolwebpagebot-hgng-default-rtdb.firebaseio.com",
      projectId: "schoolwebpagebot-hgng",
      storageBucket: "schoolwebpagebot-hgng.appspot.com",
      messagingSenderId: "659079868076",
      appId: "1:659079868076:web:1dbfac4206e607b35ff909",
      measurementId: "G-ZWEB8Y8GH9"
    };
    

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "WELCOME" + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child("room_name").update({
         purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}

function redirectToRoomName (name)
{
   console.log(name);
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
}
