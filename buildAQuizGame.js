const questions = [
    {
        category: "JavaScript",
        question: "Apa hasil dari typeof NaN?",
        choices: ["number", "undefined", "object"],
        answer: "number"
    },
    {
        category: "JavaScript",
        question: "Tipe data apa yang mempresentasikan variabel kosong secara eksplisit?",
        choices: ["undefined", "null", "boolean"],
        answer: "null"
    },
    {
        category: "JavaScript",
        question: "Fungsi apa yang digunakan untuk mengubah objek menjadi JSON string?",
        choices: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()"],
        answer: "JSON.stringify()"
    },
    {
        category: "General Knowledge",
        question: "Apa singkatan dari HTML?",
        choices: ["Hypertext Markup Language", "Hyperlink Text Manipulation Language", "Home Tool Markup Language"],
        answer: "Hypertext Markup Language"
    },
    {
        category: "General Knowledge",
        question: "Metode Array mana yang digunakan untuk memeriksa apakah suatu data berupa array?",
        choices: ["Array.isCheck()", "Array.isArray()", "Array.typeOf()"],
        answer: "Array.isArray()"
    }
];

function getRandomQuestion(questions) {
    const questionIndex = Math.floor(Math.random() * questions.length);
    return questions[questionIndex];
}

function getRandomComputerChoice(choices) {
    const choicesIndex = Math.floor(Math.random() * choices.length);
    return choices[choicesIndex];
}

function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
}


const randomQuestion = getRandomQuestion(questions);
console.log("Soal Terpilih: ", randomQuestion.question);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Pilihan Komputer :", computerChoice);

const result = getResults(randomQuestion, computerChoice);
console.log("Hasil Evaluasi: ", result);