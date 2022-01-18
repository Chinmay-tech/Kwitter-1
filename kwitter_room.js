

const firebaseConfig = {

      apiKey: "AIzaSyC6JIbAYe96s-SkEpw8eKDKKheaD7wHB7w",
    
      authDomain: "kwitter-1f66c.firebaseapp.com",
    
      projectId: "kwitter-1f66c",
    
      storageBucket: "kwitter-1f66c.appspot.com",
    
      messagingSenderId: "515600537355",
    
      appId: "1:515600537355:web:69867119441c4e1ceb340e"
    
    };
    
    
    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
