const quizData = [
    {
        question: "Who is the PM of India?",
        a: "Narendra Damodar Das Modi",
        b: "Rahul Gandhi",
        c: "Adityanath Yogi",
        d: "Arvind Kejriwal",
        correct: "a"
    },
    {
        question: "Who is the President of India?",
        a: "Rahul  Gandhi",
        b: "Ram Nath Kovind",
        c: "Pranab Mukherji",
        d: "M. Venkaiya Naidu",
        correct: "b"
    },
    {
        question: "Who is the CM of Jharkhand?",
        a: "Bidyut Baran Mahto",
        b: "Hemant Soren",
        c: "Shibu Soren",
        d: "Lalu Yadav",
        correct: "b"
    },
    {
        question: "What is the best monument of love?",
        a: "Taj Mahal",
        b: "Qutub Minar",
        c: "Lal Kila",
        d: "Ram-Setu",
        correct: "d"
    }
]

const container =document.getElementById("container");
const question = document.getElementById("question-text")
const aText = document.getElementById("a-text")
const bText = document.getElementById("b-text")
const cText = document.getElementById("c-text")
const dText = document.getElementById("d-text")
const btn = document.getElementById("submitBtn")
let score = 0;
let currentquestion = 0;

loadQuiz()

function loadQuiz(){
    question.innerText = quizData[currentquestion].question;
    aText.innerHTML = quizData[currentquestion].a;
    bText.innerHTML = quizData[currentquestion].b;
    cText.innerHTML = quizData[currentquestion].c;
    dText.innerHTML = quizData[currentquestion].d;

    document.getElementById("a").checked = false
    document.getElementById("b").checked = false
    document.getElementById("c").checked = false
    document.getElementById("d").checked = false
}

btn.addEventListener("click", () => {
    const isSelected = getSelected()
    if (currentquestion < quizData.length && isSelected){
        loadQuiz()
    }else if(currentquestion < quizData.length && isSelected === false){
        alert("please select one option")
    } else {
        container.innerHTML = `<h2>Congratulations! You have completed the test.</h2>
        <h2>Your Score: ${score}/${quizData.length}</h2>
        <button onclick="reset()">Restart Test</button>`
    }
})
function reset(){
    location.reload();
}

function getSelected() {
    const selected = document.querySelector('input[name="answer"]:checked')
    if (selected != null)
    {
        const selectedId = selected.id
        if(selectedId === quizData[currentquestion].correct){
            score++;
        }
        currentquestion++;
        return true;
    }
    else{
        return false
    }
}

