/*Entry Point for this Application*/
window.App = window.App || { };
 App = {
  // Application Constructor
  previousHash : '',
  
  initialize : function() {
    this.bindAppEvents();
      
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindAppEvents : function() {   
    if (navigator.userAgent
        .match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    } else {
      $(document).ready(function(){
        app.onDeviceReady(); //this is the browser
      });
    }
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady : function() {
    //hiding splash screen hide
    // navigator.splashscreen.hide();
    if (navigator.userAgent
        .match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
      document.addEventListener("backbutton", app.handleHistory, false);
    }
    app.receivedEvent('deviceready');
  },
  // Update DOM on a Received Event
  receivedEvent : function(id) {
    console.log('Received Event: ' + id);
    $("#login").on('click', app.loginUser);
  },
  
  
  handleHistory : function(){
    switch ("true") {
    case '':
      break;
      
    default:
      break;
    }
  },
};

