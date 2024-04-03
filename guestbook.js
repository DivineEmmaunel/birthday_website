function addMessage(){
    let name = document.getElementById("name").value;
     let message = document.getElementById("message").value;
  
    let newMessage = document.createElement("div");
    newMessage.innerHTML = "<strong>" + name + ":</strong> " + message;
    document.getElementById("messages").appendChild(newMessage);
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
  }