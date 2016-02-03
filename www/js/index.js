var colorOne = "blue";
var colorTwo = "red";
var nextColor = colorOne;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    ndk: function() {
        $(".board td").on("click", function() {
            $(this).css("background-color", nextColor);
            nextColor = nextColor === colorOne ? colorTwo : colorOne;
        });
        $("#reset").on("click", function() {
            $(".board td").css("background-color", "white");
        });
        $(".colA").css("background-color", "purple");
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.ndk();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
