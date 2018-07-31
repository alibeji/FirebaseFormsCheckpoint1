


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApEI6fM93X6isxOGB16Z05IR2EY8EvCVg",
    authDomain: "fir-test-30af2.firebaseapp.com",
    databaseURL: "https://fir-test-30af2.firebaseio.com",
    projectId: "fir-test-30af2",
    storageBucket: "fir-test-30af2.appspot.com",
    messagingSenderId: "858239094175"
 	 };
 	 firebase.initializeApp(config);
	

document.getElementById('contactForm').addEventListener('submit', submitForm);

function getInputVal(id){
  return document.getElementById(id).value;
}
function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    document.getElementById('contactForm').reset();
    saveMessage(name, email, message);
    document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);
}

var messagesRef = firebase.database().ref('messages');

function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}




