var firebaseConfig = {
      apiKey: "AIzaSyB2X89Jxmwj2M2IwLPtn9d3b4KD6Hye0rc",
      authDomain: "tic-tac-toe-46a7a.firebaseapp.com",
      databaseURL: "https://tic-tac-toe-46a7a-default-rtdb.firebaseio.com",
      projectId: "tic-tac-toe-46a7a",
      storageBucket: "tic-tac-toe-46a7a.appspot.com",
      messagingSenderId: "38750884870",
      appId: "1:38750884870:web:30e311d74cf873b0a3df87"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function add_room()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }