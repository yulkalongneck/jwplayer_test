var video = document.getElementById('video'),
  controls = document.getElementById("video").controls = true,
  play = document.getElementById('play'),
  pause = document.getElementById('pause'),
  addChapter = document.getElementById('add-chapter');


play.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  };
}, false);

pause.addEventListener("click", function() {
  if (!video.paused) {
    video.pause();
  }
}, false);

// hours
var hours = $(function() {
  var $timeHours = $("#chapter-timing-hours");
  for (var i = 1; i <= 3; i++) {
    $timeHours.append($('<option value='+ i +'> 0'+i+'</option>'));
  }
});
//minutes
var minutes = $(function() {
  var $timeMinutes = $("#chapter-timing-minutes");
  for (var i = 1; i <= 9; i++) {
    $timeMinutes.append($('<option value='+ i +'> 0'+i+'</option>'));
  }
  for (var i = 10; i <= 59; i++) {
    $timeMinutes.append($('<option value='+ i +'>'+i+'</option>'));
  }
});
// seconds
var seconds = $(function() {
  var $timeSeconds = $("#chapter-timing-seconds");
  for (var i = 1; i <= 9; i++) {
    $timeSeconds.append($('<option value='+ i +'> 0'+i+'</option>'));
  }
  for (var i = 10; i <= 59; i++) {
    $timeSeconds.append($('<option value='+ i +'>'+i+'</option>'));
  }
});


// add new chapter
addChapter.addEventListener("click", function() {
  var name = document.getElementById('chapter-name').value;
  console.log(name);
  var $Hours = (document.getElementById("hours").value = document.getElementById("chapter-timing-hours").value);
  var $Minutes = (document.getElementById("minutes").value = document.getElementById("chapter-timing-minutes").value);
  var $Seconds = (document.getElementById("seconds").value = document.getElementById("chapter-timing-seconds").value);
  var time = ((parseInt($Hours) * 360) + (parseInt($Minutes) * 60) + (parseInt($Seconds)));

  // name validation
  if ((name == "") || (name.length > 20)) {
    alert("Name can't be blank or longer than 20 characters.");
  } else if (name.match(/^[0-9]/)) {
    alert("Name format is invalid! Name can't start with a digit!");
  } else if (time > video.duration) {
    alert("This video is not long enough!");
    // time validation
  } else if (time == 0) {
    alert("Timing can't be equal to 0!");
  } else {
    var nameid = name.replace(/\s+/g, "-");
    $('#new-chapter').append('<button id=' + nameid + '>' + name + '</button>' + time + 'sec');
    $('#' + nameid).click(function() {
      video.currentTime = time;
      event.preventDefault();
    });
  };
});
