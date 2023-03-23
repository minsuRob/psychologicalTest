const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function goNext(qIdx){
    const q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;
    const answerBox = document.querySelector("#answerBox");
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
