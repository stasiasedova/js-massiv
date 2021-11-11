let answerArr = [a5, a4, a1, a1, a5];
let imgNum = 0;
let answNum = 0;
let sum = 0;
let image = document.getElementById("image");

btn.addEventListener("click", fnc);
function fnc() {
  imgNum++;
  if (imgNum > answerArr.length-1) {
    return;
  }
  image.src = imgNum + 1 + '.png';
}
btn.addEventListener("click", fnc1);
function fnc1() {
  if (answerArr[answNum].checked) {
    alert("Right answer");
    sum++;
  } else {
    alert("Wrong answer");
  }
  answNum++;
  if (answNum == answerArr.length) {
    alert("Your result is : " + sum);
  }
}