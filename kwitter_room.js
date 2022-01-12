



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD9OEtCuBrmtdP010W5BkJlw1saD57iXls",
    authDomain: "p-94andetc.firebaseapp.com",
    databaseURL: "https://p-94andetc-default-rtdb.firebaseio.com",
    projectId: "p-94andetc",
    storageBucket: "p-94andetc.appspot.com",
    messagingSenderId: "480449063436",
    appId: "1:480449063436:web:5ad91e872406590403dc29"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name=localStorage.getItem("user_name");

function name(user_name){
   
    document.getElementById("name").innerHTML= user_name;
}

  function addRow(){
    var room_name=document.getElementById("room_name").value;
    console.log(room_name);
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect2room(this.id)'>"+"#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
  getData();
  function redirect2room(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
  }
  function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }