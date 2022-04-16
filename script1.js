var ans=["a","b","b"];
var score=0;
var curi=0;
var obj=["img0","img1","img2"];
var img=["im0","im1","im2"]
var x=1;

function answer(){
    while (x) {
       var response=prompt("你的答案");
      if(response===ans[curi]){
        alert("恭喜你答对了！");
        score++;
        x=0;
        }
      else if(response===null){
             break;
          }
      else{
        alert("错误！"+"\n"+"再接再厉");
     }
    }
}


function changephoto(){
document.getElementById(obj[curi-1]).style.display="none";
document.getElementById(obj[curi]).style.display="block";
}
function next(){
  document.getElementById(obj[curi]).style.display="none";
  document.getElementById(img[curi]).style.display="none";
  curi++;
  document.getElementById(obj[curi]).style.display="block";
  x=1;
}
next()

function back(){
  window.open("index.html");
  alert(window.location);
}

function analysis(){
  document.getElementById(img[curi]).style.display="block";
}
analysis()

function finish(){
   alert("测试结束！"+"\n"+"你的分数为"+score);
   score=0;
}
finish()
