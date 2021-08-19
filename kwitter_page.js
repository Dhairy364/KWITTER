var firebaseConfig = {
      apiKey: "AIzaSyB2X89Jxmwj2M2IwLPtn9d3b4KD6Hye0rc",
      authDomain: "tic-tac-toe-46a7a.firebaseapp.com",
      databaseURL: "https://tic-tac-toe-46a7a-default-rtdb.firebaseio.com",
      projectId: "tic-tac-toe-46a7a",
      storageBucket: "tic-tac-toe-46a7a.appspot.com",
      messagingSenderId: "38750884870",
      appId: "1:38750884870:web:30e311d74cf873b0a3df87"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey ;
         message_data = childData ;
console.log(firebase_message_id) ;
console.log(message_data) ;
Name = message_data ['name'] ;
Message = message_data ['message'] ;
like =  message_data ['like'] ;
name_with_tag = "<h4>" + Name + "<img class = 'user_tick' src = 'tick.png'></h4>" ;
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>" ;
like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + "value = " + like + "onclick = 'update_like(this.id)'>" ;
span_with_tag = "<span class = 'glyphicon glyphicon-thumbsup'>like:" + like + "</span></button><hr>" ;
row = name_with_tag + message_with_tag + like_button + span_with_tag ;
document.getElementById("output").innerHTML += row ;

      } });  }); }
getData();
function update_like()
function logout()
{
      localStorage.removeItem("user_name") ;
      localStorage.removeItem("room_name") ;
      window.location.replace("index.html") ;
}
function send()
{
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name: user_name , message: msg , like : 0  
      }) ;
      document.getElementById("msg").value = "" ;
}
