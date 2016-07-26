$(document).ready(function() {
  var sessionTime=1*60;
  // var secSessionTime=sessionTime*60 ;
  var breakTime=5*60 ;
  var running = 0;
  // default display
  $('#breakscr').html(Math.floor(breakTime/60));
  $('#sessionscr').html(Math.floor(sessionTime/60));
  $('#mainscr').html(Math.floor(sessionTime/60));
  //functions to do add subtract to var
  function addSessionTime() {
    sessionTime=sessionTime+60;
    $('#sessionscr').html(Math.floor(sessionTime/60));
  }

  function subtractSessionTime() {
    sessionTime=sessionTime-60;
    $('#sessionscr').html(Math.floor(sessionTime/60));
  }

  function addBreakTime() {
    breakTime=breakTime+60;
    $('#breakscr').html(Math.floor(breakTime/60));
  }

  function subtractBreakTime() {
    breakTime=breakTime-60;
    $('#breakscr').html(Math.floor(breakTime/60));
  }

  //trigerring events
  $('#bplus').click(addBreakTime);
  $('#bminus').click(subtractBreakTime);

  $('#splus').click(addSessionTime);
  $('#sminus').click(subtractSessionTime);

  $('#start').click(startPause);

  $('#reset').click(reset);

  //Main clock
  function startPause() {
    if (running == 0) {
      running = 1;
      timer();
      $('#start').html('Pause');

    } else {
      running = 0;
      $('#start').html('Start');

    }
  }

  function reset() {
    sessionTime = 25*60;
    running = 0;
    $('#mainscr').html(Math.floor(sessionTime/60));
    $('#breakscr').html(Math.floor(breakTime/60));
    $('#sessionscr').html(Math.floor(sessionTime/60));
  
    $('#start').html('Start');
  }
  

  // ================Break timer 
  function breakTimer() {
    
    if(running==1){
      breakTime--;

    //display in min sec format
    var mins = Math.floor(breakTime/60);
    var secs = Math.floor(breakTime%60);
    $('#mainscr').html(mins+':'+secs+' (Break Time)');
    // $('#mainscr').html(mins+':'+secs);

    var breakCounter = setTimeout(function() {

      breakTimer();
    }, 1000);
    if (breakTime < 1) {
      clearTimeout(breakCounter);
      reset();

    }
    }

  } //breaktimer closure 

//====================MAIN TIMER FUNCTION

  function timer() {
    if (running == 1) { 
    sessionTime --;
         
      
      //display in min sec format
      var mins = Math.floor(sessionTime/60);
      var secs = Math.floor(sessionTime%60);
      $('#mainscr').html(mins+':'+secs);
      // $('#mainscr').html(mins+':'+secs);

      var counter1 = setTimeout(function() {

        timer();
      }, 1000);
      if (sessionTime<1) {
        clearTimeout(counter1);

        breakTimer();

      }
    } //if running1

  } //timer closure

  

});