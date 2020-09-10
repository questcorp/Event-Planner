var ans = [-1,-1,-1,-1,-1,-1,-1,-1];
var count =0;
function saveData(value){
  reset();
  ans[count] = changeGIF(value);
  if(count == 7){
    document.getElementById('Next').innerHTML = "Submit &#x25BA";
    document.getElementById('Next').onclick = function(){
      alert("Total score: "+totalUP());
      location.href ="http://127.0.0.1:3000/4%20Quadrant%20Question/Dummy%20Result/1stQuestion.html";
    }
  }
  value.style.backgroundImage = "linear-gradient(to top left, #F7971E 20%, #FFD200 78%)";
  value.style.borderRadius = "25px";
  value.children[1].style.display = "none";
  document.getElementsByClassName('Page')[count].style.backgroundColor = "#FFD200";
  document.getElementsByClassName('Order')[count].style.color = "#FFD200";
}

function reset(){
  document.getElementById('Neutral').style.marginTop = "-30px";
  document.getElementById('Agree').style.marginTop = "-30px";
  for(var i=0;i<6;i++){
    document.getElementsByClassName('Reaction')[i].style.backgroundImage = 'none';
    document.getElementsByClassName('Reaction')[i].children[1].style.display ="block";
    returnPic(document.getElementsByClassName('Reaction')[i].children[0]);
  }
}

function changeGIF(select){
  //alert(select.children[0].id);
  var check = select.children[0].id;
  if(check == "No"){
    select.children[0].src = 'https://docs.google.com/uc?export=download&id=1q-pb3kDMV2gi-_4uSWzogxopU5dyU84Y';
    return 0;
  }
  else if(check =="OK"){
    select.children[0].src = 'https://docs.google.com/uc?export=download&id=1q-pb3kDMV2gi-_4uSWzogxopU5dyU84Y';
    return 1;
  }
  else if(check =="Neutral"){
    select.children[0].src = 'https://docs.google.com/uc?export=download&id=1KrHdk7XKaE4weXWyNueGjYQy-U0EeKZ3';
    select.children[0].style.marginTop = "0px";
    return 2;
  }
  else if(check =="Agree"){
    select.children[0].src = 'https://docs.google.com/uc?export=download&id=1NLbrjmBJUX52FNqJ-8jZeCg2N_d1OKaK';
    select.children[0].style.marginTop = "0px";
    return 3;
  }
  else if(check =="Super"){
    select.children[0].src = 'https://docs.google.com/uc?export=download&id=1LvSKdOkQuTytxabBfBSdUW5NNIpbw4it';
    return 4;
  }
  else if(check =="Extreme"){
    select.children[0].src = 'https://docs.google.com/uc?export=download&id=1eF37clowI1bx5ffS3ls3oeioKrxXc7ZL';
    return 5;
  }
}
function returnPic(value){
  var check = value.id;
  if(check == "No"){
    value.src = 'https://docs.google.com/uc?export=download&id=1Ps_VfC_quNZ7I0luPtGY_hncZB6YM21c';
  }
  else if(check =="OK"){
    value.src = 'https://docs.google.com/uc?export=download&id=1z_CSk6HZAjc-wQW-VpRua0R913qK976p';
  }
  else if(check =="Neutral"){
    value.src = 'https://docs.google.com/uc?export=download&id=1_y1UBAmrGMoW1EaEWAuyRGsJiMLKTNBV';
  }
  else if(check =="Agree"){
    value.src = 'https://docs.google.com/uc?export=download&id=1tBGHEtkFCQi2A5mGdETAhn4uExm00YkI';
  }
  else if(check =="Super"){
    value.src = 'https://docs.google.com/uc?export=download&id=1dN6UfAxppsX1Cq1N9fHwPNYVICdnJJfP';
  }
  else if(check =="Extreme"){
    value.src = 'https://docs.google.com/uc?export=download&id=1zaZXShKYwowJKV-wfHN2IIxPVybHZy9g';
  }
}
function totalUP(){
  var time = 0;
  var money = 0;
  var score = [];
  for(var kk=0;kk<4;kk++){
    time += ans[kk];
  }
  setCookie("time",time,0.5);
  score.push(time);
  for(var kk=4;kk<8;kk++){
    money += ans[kk];
  }
  setCookie("money",money,0.5);
  score.push(money);
  return score;
}
function setCookie(cname, cvalue, exhour) {
  var d = new Date();
  d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
