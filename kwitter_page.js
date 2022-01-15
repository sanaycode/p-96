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
function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
  var room_name=localStorage.getItem("room_name");
  var msg=document.getElementById("message").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });