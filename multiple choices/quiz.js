/* bütün herşeyden önce işe başlamadan önce İŞ PLANI */
/*  

A ) görünümün çizimi yapılmalı, herşeyin çizimi, nasıl olacak, basmalı, tutmalı vs. çizilmeli belirlenmeli
B ) HTML de bu çizimin ana hatları, div ler halinde, id ler class lar belirlenerek hazırlanmalı
C ) JS yada programlama kısmına geçince koordineli olarak css + js gibisinde hazırlanmalı

 */
//1
// html dosyasını hazırla gerekiyorsa style ı düzenle

//2
// select all elements
//html deki id ve classları kullanabilmek için element seçimi
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("qImg");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//3
// create questions
//sorular array şeklinde bu kısım source da görünür canlıya
// alırken düzenlenmeli
let questions = [{
       question : "Türkiyenin başkenti neresidir?",
       imgSrc : "img/city.jpg",
       choiceA : "ankara",
       choiceB : "bursa",
       choiceC : "ceyhan",
       correct : "A"
    },
    {
       question :"Amerika Birleşik Devletlerinin başkenti neresidir?",
       imgSrc : "img/washington.jpg",
       choiceA : "adana",
       choiceB : "Washington",
       choiceC : "ceyhan",
       correct : "B"
    },
    {
       question : "'80 Günde Devri Alem' kitabının yazarı kimdir?",
       imgSrc : "img/balloon.jpg",
       choiceA : "George Orwell",
       choiceB : "Dan Brown",
       choiceC : "Jules Verne",
       correct : "C"
    },
    {
       question : "Hangisi bir programlama dili değildir?",
       imgSrc : "img/code.jpg",
       choiceA : "Java",
       choiceB : "Rubicon",
       choiceC : "Go",
       correct : "B"
    },
    {
       question : "Hangisi temel renktir? ",
       imgSrc : "img/colors.jpg",
       choiceA : "Kırmızı",
       choiceB : "Sarı",
       choiceC : "Siyah",
       correct : "A"
    },
    {
       question : "Hangisi suyun kimyasal bileşiminde yoktur?",
       imgSrc : "img/chemistry.jpg",
       choiceA : "Oksijen",
       choiceB : "Hidrojen",
       choiceC : "Azot",
       correct : "C"
    }];


/* kaç soru var? */
let lastQuestion = questions.length - 1;
/* işlem anındaki sorunun indisi */
let runningQuestion = 0;
/* 6. adımda aşağıdaki tanımlamalarıda yapıyoruz */
let count = 0;
const questionTime = 10; //10 saniyede bir soru
const gaugeWidth = 150; //px olarak göstergenin uzunluğu
const gaugeUnit = gaugeWidth / questionTime; //saniye başı kaç px
/* sorunun html de oluşturulması, görünür hale getirilmesi, render edilmesi */
//7 adımda TIMER tanımlayacağız, soru geldğinde 10 a kadar sayacak
// sonra başa dönecek
let TIMER;
let score = 0;// checkAnswer() da kullanacağız
//4
//question render
function renderQuestion(){
    let q = questions[runningQuestion];
    /* questions array indeki hangi indisteki sorunun ekrana geleceği */
    /* q.question demek questions array indeki question key inin value sini getir demek */
    question.innerHTML = "<p>"+ q.question +"</p>"
    /* aynı şekilde questions arrayindeki imgSrc nin değerini getir demek */
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    /* aynı şekilde questions daki choiceA, ... getir demek */
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

/*
start.style.display = "none";
renderQuestion();
quiz.style.display ="block";
renderProgress();
renderCounter();
TIMER = setInterval(renderCounter, 1000);
//1000ms = 1 saniye, renderCounter() çalıştıracak
*/

//8
/* yukarıdakilerin hepsini startQuiz()  içine koyacağız
daha sonra startQuiz() in başlamasınıda html deki start quiz yazısnıa tıklanmasına bağlayacağız
*/

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display ="block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
//1000ms = 1 saniye, renderCounter() çalıştıracak
}
start.addEventListener("click", startQuiz);

//5
//progress render
//ilerlemenin ekranda gösterilmesi
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML +="<div class='prog' id=" + qIndex + "></div>";
    }
}

//6
//counter render
/* 
let count = 0;
const questionTime = 10; //10 saniyede bir soru
const gaugeWidth = 150; //px olarak göstergenin uzunluğu
const gaugeUnit = gaugeWidth / questionTime; //saniye başı kaç px
*/
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else {
        count = 0;
        //change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
    } else {
        //end the quiz and show the score
        clearInterval(TIMER);
        renderScore();
    }
}
}
//7
//TIMER ayarlaması yapacağız, soru geldğinde
// geriye doğru saymaya başlayacak


//9 
//check answer

// <div class="choice" id="A" onclick="checkAnswer('A')">A</div> için 


function checkAnswer(answer){
    if(questions[runningQuestion].correct == answer ){
        score++;
        answerIsCorrect();//yeşil lamba yanacak
    }else{
        answerIsWrong();//kırmızı lamba yanacak
    }
    count = 0; //cevap verilince count 0 lanacak
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        //end the quiz and show the score
        renderScore();

    }
}
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}


//10
//scoreRender() yazacağız, oyun bittiğinde score göstermesi için

function renderScore(){
    scoreDiv.style.display = "block";

    //calculate the amount of question percent answered by the user
    const scorePercent = Math.round(100 * score/questions.length);

    //choose the image based on the scorePercent
    let img = ( scorePercent >= 80 ) ? "img/5.png" : 
    ( scorePercent >= 60 ) ? "img/4.png" : 
    ( scorePercent >= 40 ) ? "img/3.png" : 
    ( scorePercent >= 20 ) ? "img/2.png" : "img/1.png";

    scoreDiv.innerHTML =  "<img src=" + img + "><p>" + scorePercent + "%</p>";

}

/* 
//7
//checkAnswer()



//8
//start quiz
// 
<div id="start">Start Quiz!</div> index.html deki kod
const start = document.getElementById("start");


start.addEventListener("click", startQuiz);

//let TIMER;
function startQuiz(){
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender, 1000);
    progressRender();
    renderQuestion();
    quiz.style.display = "block";
    //  <div id="quiz" style="display : none;"> 
}

//9
//ternary operator
// if, else if in daha kıza yazılabildiği operator gösterimi
if(x=="abc"){
    console.log("true")
}else{
    console.log(false)
}

(x == "abc") ? console.log("true") : console.log("false");

bu iki gözterimde aynıdır, ikincisi ternary operator
aynı şekilde else if ilede çalışır.


//10
//score render

function scoreRender(){
    scoreContainer.style.display ="block";
    let scorePercent = Math.round(100 * score / questions.length);
    let img = ( scorePercent >= 80 ) ? "img/5.png" : 
        ( scorePercent >= 60 ) ? "img/4.png" : 
        ( scorePercent >= 40 ) ? "img/3.png" : 
        ( scorePercent >= 20 ) ? "img/2.png" : "img/1.png";
    scoreContainer.innerHTML = "<img src=" + img + "><p>" + scorePercent + "%</p>";
}
*/
