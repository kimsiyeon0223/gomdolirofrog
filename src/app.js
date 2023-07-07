import words from "../data/words.mjs";

const score = document.querySelector('.score');
const randomWord = document.querySelector('.random--word');
const StartButton = document.querySelector('.start--button');
const FinishButton = document.querySelector('.finish--button');
const inputCheck = document.querySelector('.input--check');
const input = document.querySelector('.input--box');
let random = ""; //랜덤 초기값 설정
let mscore = 0; //내 점수 초기값 설정

// TODO-1: "게임 시작" 버튼을 누르면 단어 게임이 시작됩니다.
const GameStart = () => {
    random = RandomWord(); //랜덤돌리기
    score.textContent = mscore;
    randomWord.textContent = random;
};

// TODO-2: "data" 폴더의 "words.js" 파일을 import하여 단어들을 무작위로 표시합니다.
function RandomWord() {
    return words[Math.floor(Math.random() * words.length)];
};

// TODO-3: 사용자로부터 입력을 받기 위해 입력 필드를 사용합니다.

// TODO-4: 사용자가 입력한 단어와 무작위로 표시된 단어가 일치하는지 확인합니다.
const CheckWord = () => {
    const minput = input.value;
    // TODO-5: 일치하는 경우 5점을 점수에 추가하고, 일치하지 않는 경우 3점을 감점합니다.
    if(minput === random){ // 내 입력값이 랜덤값과 일치하면
        mscore += 5; // 5점 추가
        score.textContent = mscore;
    }
    else if(minput === ""){
        alert("입력이 안 됐어용"); //입력하지 않았을때 안 됐다고 알려주기
        return; //alert창이 뜨고난 뒤에도 랜덤값 유지
    }
    else{
        mscore -= 3; //일치하지 않으면 3점 감점
        score.textContent = mscore;
    }
    input.value = ""; //input 값 초기화
    random = RandomWord(); //다시 랜덤 돌리기
    score.textContent = mscore;
    randomWord.textContent = random;
}

// TODO-6: 사용자가 "끝내기" 버튼을 클릭하면 점수를 초기화하고 "게임이 정상적으로 종료되었습니다"라는 메시지를 표시합니다.
const GameFinish = () => {
    mscore = 0; //mscore 초기화
    random = ""; //랜덤 초기화
    input.value = ""; //input 값 초기화
    score.textContent = mscore;
    alert("게임이 정상적으로 종료되었습니다"); //종료되었다고 알려주기
};

StartButton.addEventListener("click", GameStart);
FinishButton.addEventListener("click", GameFinish);
inputCheck.addEventListener("click", CheckWord);