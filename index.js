function hide(Id) {
  var txt = document.getElementsByName("txt");
  var button = document.getElementsByName("btnName");
  for (var i = 0; i < button.length; i++) {
    if (Id == button[i].id) {
      alert(button[i].id);
      document.getElementById(txt[i].id).style.display = "none";
    }
  }
}

function show(Id) {
  var txt = document.getElementsByName("txt");
  var button = document.getElementsByName("btnName");
  for (var i = 0; i < button.length; i++) {
    if (Id == button[i].id) {
      alert(button[i].id);
      document.getElementById(txt[i].id).style.display = "block";
    }
  }
}
