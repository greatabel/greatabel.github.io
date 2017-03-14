  function my_sound(filename) {
      // document.getElementById("showDiv1").innerHTML= filename;
    var snd = new Audio(filename); // buffers automatically when created
    snd.play();
  }

function divFunction(){
    //Some code
     my_sound("left.m4a");
}