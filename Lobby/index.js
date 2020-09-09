window.onload=function(){
  document.getElementById("teaser").addEventListener("mouseover", showZoom);
  document.getElementById("teaser").addEventListener("click", popupVideo);
  document.getElementById("teaser").addEventListener("mouseout", closeZoom);
  document.getElementById('Zoom').addEventListener("click", copyLink);
  document.getElementsByClassName('Zoom')[0].addEventListener("click", showVideo);
  var ignoreClickOnMeElement = document.getElementById('poppop');
  var insideBox = document.getElementById('popup1');
  document.addEventListener('click', function(event) {
      var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
      var isInsideBox = insideBox.contains(event.target);
      if (!isClickInsideElement && isInsideBox) {
          document.getElementById('down3').style.display = 'block';
          window.location.href = "#";
      }
  });
  var ignoreClickOnMeElement1 = document.getElementById('poppop1');
  var insideBox1 = document.getElementById('popup2');
  document.addEventListener('click', function(event) {
      var isClickInsideElement1 = ignoreClickOnMeElement1.contains(event.target);
      var isInsideBox1 = insideBox1.contains(event.target);
      if (!isClickInsideElement1 && isInsideBox1) {
          document.getElementById('down3').style.display = 'block';
          window.location.href = "#";
          var iframe = document.getElementById('teaserVideo');
          document.getElementById('popup2').style.zIndex = "-1";
          let source = iframe.src;
          iframe.src = '';
          iframe.src = source;
      }
  });
}

function showZoom(){
  document.getElementsByClassName('Zoom')[0].style.display = 'block';
}
function popupVideo(){
  console.log("This is show video");
}
function closeZoom(){
  document.getElementsByClassName('Zoom')[0].style.display = 'none';
}
function networking(){
  document.getElementById('ExplainTitle').style.fontSize = "3rem";
  document.getElementById('down3').style.display = 'none';
  document.getElementById('ExplainImg').src = "undraw_content_team_3epn.svg";
  document.getElementById('ExplainTitle').innerHTML = "Networking Lounge";
  document.getElementsByClassName('conten')[0].innerHTML = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."+"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
  +"content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.";
  document.getElementById('ExplainLogo').className = 'fab fa-facebook-f';
  document.getElementsByClassName('Event')[0].style.display= "none";
  document.getElementsByClassName('conten')[0].style.display= "block";
  document.getElementById('Zoom').style.display= "none";
  document.getElementById('button').onclick = function(){
    location.href="#";
    location.href = "https://www.facebook.com/groups/129891057657115/";
  }
  document.getElementById('ExplainDesc').innerHTML = 'Enter Facebook Group';
  document.getElementById('ExplainDesc').style.marginLeft = '20px';
  location.href="#popup1";
}
function hall(){
  document.getElementById('ExplainTitle').style.fontSize = "3rem";
  document.getElementById('down3').style.display = 'none';
  document.getElementById('ExplainDesc').style.marginLeft = '0px';
  document.getElementById('ExplainImg').src = "undraw_booking_33fn.svg";
  document.getElementById('ExplainTitle').innerHTML = "Hall Of Experts";
  document.getElementsByClassName('Event')[0].style.display= "none";
  document.getElementsByClassName('conten')[0].style.display= "block";
  document.getElementById('Zoom').style.display= "none";
  document.getElementsByClassName('conten')[0].innerHTML = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."+"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
  +"content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.";
  document.getElementById('ExplainLogo').className = 'fas fa-trophy';
  document.getElementById('ExplainDesc').innerHTML = 'Coming Soon';
  document.getElementById('button').onclick = function(){
    location.href="#";
    location.href = "https://masteryasia.lpages.co/msi-2020/";
  }
  location.href="#popup1";
}
function vip(){
  document.getElementById('ExplainTitle').style.fontSize = "3rem";
  document.getElementById('down3').style.display = 'none';
  document.getElementById('ExplainDesc').style.marginLeft = '0px';
  document.getElementById('ExplainImg').src = "undraw_celebration_0jvk.svg";
  document.getElementById('ExplainTitle').innerHTML = "VIP Room";
  document.getElementsByClassName('Event')[0].style.display= "none";
  document.getElementsByClassName('conten')[0].style.display= "block";
  document.getElementById('Zoom').style.display= "none";
  document.getElementsByClassName('conten')[0].innerHTML = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."+"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
  +"content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.";
  document.getElementById('ExplainLogo').className = 'fas fa-crown';
  document.getElementById('ExplainDesc').innerHTML = 'Coming Soon';
  document.getElementById('button').onclick = function(){
    location.href="#";
    location.href = "https://masteryasia.lpages.co/msi-2020/";
  }
  location.href="#popup1";
}
var eventz = ['Evening Unfold Events Mosaic Events Eden Spring Events','Dark Roast Events','Origami Crane Wedding Planners',
              'Evening Unfold Events','Mosaic Events','Eden Spring Events'];
var dating = [new Date(2020,08,09,07,45,00),
              new Date(2020,09,03,08,00,00),
              new Date(2020,09,14,08,00,00),
              new Date(2020,09,14,18,00,00),
              new Date(2020,09,23,18,00,00),
              new Date(2020,09,23,08,00,00),
              new Date(2020,09,23,18,00,00)];
var categories = ['Entertainment','Entertainment','Wedding',
                  'Wedding','Music','Relaxing'];
var passcode = ['2:&*[JS%(e5`','Jk~K2&vP}yCj','U4(d9?)p[mGG','4%@jHKS.Sr6U','>Y6d[5`)9cf+','D]a22[9BAJ]C'];
function main(){
  document.getElementById('down3').style.display = 'none';
  document.getElementById('ExplainDesc').style.marginLeft = '0px';
  var now = new Date();
  for(var i=0;i<eventz.length;i++){
    var Difference_In_Time = dating[i].getTime() - now.getTime();
    if(Difference_In_Time <= 1800000 && Difference_In_Time >= -180 * 60000){
      //alert(Difference_In_Time/60000);
      document.getElementById('ExplainImg').src = "undraw_video_call_kxyp.svg";
      document.getElementsByClassName('conten')[0].style.display= "none";
      document.getElementById('Zoom').style.display= "block";
      document.getElementsByClassName('Event')[0].style.display= "grid";
      document.getElementById('down3').style.display = 'none';
      document.getElementById('Date').innerHTML = "Date: "+dating[i].toLocaleDateString();
      document.getElementById('Time').innerHTML = "Time: "+dating[i].toLocaleTimeString();
      document.getElementById('Category').innerHTML = "Category: "+categories[i];
      document.getElementById('Password').innerHTML = "Password: "+passcode[i];
      document.getElementById('Zoom').innerHTML = passcode[i]+'<div class="fa fa-link" style="margin-left:10px;" id="link" aria-hidden="true"></div>';
      document.getElementById('ExplainTitle').innerHTML = eventz[i];
      document.getElementById('ExplainTitle').style.fontSize = checkSize(eventz[i]);
      document.getElementById('ExplainLogo').className = 'fas fa-arrow-alt-circle-right';
      document.getElementById('ExplainDesc').innerHTML = 'Enter Live Session';
      document.getElementById('button').onclick = function(){
        location.href="#";
        location.href = "https://masteryasia.lpages.co/msi-2020/";
      }
      location.href="#popup1";
      break;
    }
    else{
      document.getElementById('ExplainTitle').style.fontSize = "3rem";
      document.getElementById('down3').style.display = 'none';
      document.getElementById('ExplainDesc').style.marginLeft = '0px';
      document.getElementById('ExplainImg').src = "undraw_make_it_rain_iwk4.svg";
      document.getElementById('ExplainTitle').innerHTML = "Thank You For Register";
      document.getElementsByClassName('Event')[0].style.display= "none";
      document.getElementsByClassName('conten')[0].style.display= "block";
      document.getElementById('Zoom').style.display= "none";
      document.getElementsByClassName('conten')[0].innerHTML = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."+"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
      +"content here', making it look like readable English. ";
      document.getElementById('ExplainLogo').className = 'fas fa-arrow-alt-circle-right';
      document.getElementById('ExplainDesc').innerHTML = 'Coming Soon';
      document.getElementById('button').onclick = function(){
        location.href="#";
        location.href = "https://masteryasia.lpages.co/msi-2020/";
      }
      location.href="#popup1";
    }
  }

}
function copyLink(){
  var el = document.getElementById('comment');
  el.style.animation= '5s muncul';
  var text = document.getElementById('Zoom').innerHTML.replace('<div class="fa fa-link" style="margin-left:10px;" id="link" aria-hidden="true"></div>',"");
  var input = document.createElement('input');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand('copy');
  document.body.removeChild(input);
  document.getElementById('poppop').removeChild(el);
  void document.getElementById('poppop').offsetWidth;
  document.getElementById('poppop').appendChild(el);
}
function showVideo(){
  document.getElementById('popup2').style.zIndex = "10";
  document.getElementById('down3').style.display = 'none';
  location.href = "#popup2";
}

function checkSize(x){
  if(x.length <=21){
    return "3rem";
  }
  else if(x.length <=70){
    return "2rem";
  }
  else{
    return "1.2rem";
  }
}
