<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
            answer: "JavaScript"
        },
        {
            question: "What year was JavaScript launched?",
            options: ["1996", "1995", "1994", "1997"],
            answer: "1995"
        }
    ];

    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('nextBtn');
    const scoreElement = document.getElementById('score');

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let answerChecked = false;

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        
        optionsElement.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('div');
            button.classList.add('option');
            button.textContent = option;
            button.addEventListener('click', () => selectOption(button, option));
            optionsElement.appendChild(button);
        });

        feedbackElement.textContent = '';
        feedbackElement.className = 'feedback';
        nextButton.disabled = true;
        answerChecked = false;
        selectedOption = null;
    }

    function selectOption(button, option) {
        if (answerChecked) return;
        
        // Remove selected class from all options
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        button.classList.add('selected');
        selectedOption = option;
        nextButton.disabled = false;
    }

    function checkAnswer() {
        if (selectedOption === null || answerChecked) return;
        
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            feedbackElement.textContent = "Correct!";
            feedbackElement.className = "feedback correct";
            score++;
            scoreElement.textContent = score;
        } else {
            feedbackElement.textContent = `Wrong! The correct answer is ${currentQuestion.answer}.`;
            feedbackElement.className = "feedback wrong";
        }
        
        answerChecked = true;
        nextButton.disabled = false;
    }

    function nextQuestion() {
        if (!answerChecked && selectedOption !== null) {
            checkAnswer();
            return;
        }
        
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            // Quiz completed
            questionElement.textContent = `Quiz completed! Your score is ${score}/${quizData.length}`;
            optionsElement.innerHTML = '';
            feedbackElement.textContent = '';
            nextButton.style.display = 'none';
        }
    }

    nextButton.addEventListener('click', nextQuestion);
    loadQuestion();
=======
document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
            answer: "JavaScript"
        },
        {
            question: "What year was JavaScript launched?",
            options: ["1996", "1995", "1994", "1997"],
            answer: "1995"
        }
    ];

    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('nextBtn');
    const scoreElement = document.getElementById('score');

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let answerChecked = false;

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        
        optionsElement.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('div');
            button.classList.add('option');
            button.textContent = option;
            button.addEventListener('click', () => selectOption(button, option));
            optionsElement.appendChild(button);
        });

        feedbackElement.textContent = '';
        feedbackElement.className = 'feedback';
        nextButton.disabled = true;
        answerChecked = false;
        selectedOption = null;
    }

    function selectOption(button, option) {
        if (answerChecked) return;
        
        // Remove selected class from all options
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        button.classList.add('selected');
        selectedOption = option;
        nextButton.disabled = false;
    }

    function checkAnswer() {
        if (selectedOption === null || answerChecked) return;
        
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            feedbackElement.textContent = "Correct!";
            feedbackElement.className = "feedback correct";
            score++;
            scoreElement.textContent = score;
        } else {
            feedbackElement.textContent = `Wrong! The correct answer is ${currentQuestion.answer}.`;
            feedbackElement.className = "feedback wrong";
        }
        
        answerChecked = true;
        nextButton.disabled = false;
    }

    function nextQuestion() {
        if (!answerChecked && selectedOption !== null) {
            checkAnswer();
            return;
        }
        
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            // Quiz completed
            questionElement.textContent = `Quiz completed! Your score is ${score}/${quizData.length}`;
            optionsElement.innerHTML = '';
            feedbackElement.textContent = '';
            nextButton.style.display = 'none';
        }
    }

    nextButton.addEventListener('click', nextQuestion);
    loadQuestion();
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
});