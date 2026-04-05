// -------------------- СТРАНИЦА 1 (Марс & Париж) --------------------
const buttons1 = document.querySelectorAll('.quiz-btn');
const feedback1 = document.getElementById('feedback1');

if (buttons1.length > 0) {
    buttons1.forEach(button => {
        button.addEventListener('click', function() {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            buttons1.forEach(btn => { btn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)'; });
            if (isCorrect) {
                this.style.background = '#28a745';
                feedback1.innerHTML = '✅ Правильно! Марс — красная планета из-за оксида железа на поверхности.';
                feedback1.style.backgroundColor = '#e8f5e9';
                feedback1.style.color = '#155724';
            } else {
                this.style.background = '#dc3545';
                feedback1.innerHTML = '❌ Неверно. Правильный ответ: Марс.';
                feedback1.style.backgroundColor = '#ffebee';
                feedback1.style.color = '#721c24';
            }
        });
    });
}

const inputField1 = document.getElementById('answerInput1');
const submitBtn1 = document.getElementById('submitBtn1');
const feedback2_1 = document.getElementById('feedback2_1');

if (submitBtn1) {
    function checkAnswer1() {
        const userAnswer = inputField1.value.trim().toLowerCase();
        const correctAnswers = ['париж', 'paris', 'parij'];
        let isCorrect = correctAnswers.includes(userAnswer);
        if (isCorrect) {
            inputField1.classList.add('input-correct');
            inputField1.classList.remove('input-wrong');
            feedback2_1.innerHTML = '✅ Правильно! Столица Франции — Париж.';
            feedback2_1.style.backgroundColor = '#e8f5e9';
            feedback2_1.style.color = '#155724';
        } else {
            inputField1.classList.add('input-wrong');
            inputField1.classList.remove('input-correct');
            feedback2_1.innerHTML = '❌ Неверно. Правильный ответ: Париж.';
            feedback2_1.style.backgroundColor = '#ffebee';
            feedback2_1.style.color = '#721c24';
        }
    }
    submitBtn1.addEventListener('click', checkAnswer1);
    inputField1.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkAnswer1(); });
}

// -------------------- СТРАНИЦА 2: Океаны и горы --------------------
const btnsPage2 = document.querySelectorAll('.quiz-btn2');
const fbPage2_mc = document.getElementById('feedbackPage2_mc');

if (btnsPage2.length > 0) {
    btnsPage2.forEach(btn => {
        btn.addEventListener('click', function() {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            btnsPage2.forEach(b => { b.style.background = 'linear-gradient(135deg, #667eea, #764ba2)'; });
            if(isCorrect) {
                this.style.background = '#28a745';
                fbPage2_mc.innerHTML = '✅ Верно! Тихий океан — самый большой (около 165 млн км²).';
                fbPage2_mc.style.backgroundColor = '#e8f5e9';
                fbPage2_mc.style.color = '#155724';
            } else {
                this.style.background = '#dc3545';
                fbPage2_mc.innerHTML = '❌ Ошибка. Самый большой океан — Тихий.';
                fbPage2_mc.style.backgroundColor = '#ffebee';
                fbPage2_mc.style.color = '#721c24';
            }
        });
    });
}

const input2 = document.getElementById('answerInput2');
const submit2 = document.getElementById('submitBtn2');
const fb2_2 = document.getElementById('feedback2_2');

if (submit2) {
    function checkPage2() {
        let ans = input2.value.trim().toLowerCase();
        const valid = ['эверест', 'джомолунгма', 'everest', 'сагарматха'];
        let ok = valid.includes(ans);
        if(ok) {
            input2.classList.add('input-correct'); input2.classList.remove('input-wrong');
            fb2_2.innerHTML = '✅ Абсолютно верно! Эверест (Джомолунгма) 8848 м.';
            fb2_2.style.backgroundColor = '#e8f5e9'; fb2_2.style.color = '#155724';
        } else {
            input2.classList.add('input-wrong'); input2.classList.remove('input-correct');
            fb2_2.innerHTML = '❌ Неверно. Правильный ответ: Эверест (Джомолунгма).';
            fb2_2.style.backgroundColor = '#ffebee'; fb2_2.style.color = '#721c24';
        }
    }
    submit2.addEventListener('click', checkPage2);
    input2.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkPage2(); });
}

// -------------------- СТРАНИЦА 3: Физика/химия --------------------
const btnsPage3 = document.querySelectorAll('.quiz-btn3');
const fbPage3_mc = document.getElementById('feedbackPage3_mc');

if (btnsPage3.length > 0) {
    btnsPage3.forEach(btn => {
        btn.addEventListener('click', function() {
            const isCor = this.getAttribute('data-correct') === 'true';
            btnsPage3.forEach(b => { b.style.background = 'linear-gradient(135deg, #667eea, #764ba2)'; });
            if(isCor) {
                this.style.background = '#28a745';
                fbPage3_mc.innerHTML = '✅ Точно! F = ma — второй закон Ньютона.';
                fbPage3_mc.style.backgroundColor = '#e8f5e9'; fbPage3_mc.style.color = '#155724';
            } else {
                this.style.background = '#dc3545';
                fbPage3_mc.innerHTML = '❌ Нет. Правильная формула: F = ma.';
                fbPage3_mc.style.backgroundColor = '#ffebee'; fbPage3_mc.style.color = '#721c24';
            }
        });
    });
}

const input3 = document.getElementById('answerInput3');
const submit3 = document.getElementById('submitBtn3');
const fb2_3 = document.getElementById('feedback2_3');

if (submit3) {
    function checkPage3() {
        let val = input3.value.trim().toLowerCase();
        const okWords = ['кислород', 'oxygen', 'оксиген'];
        if(okWords.includes(val)) {
            input3.classList.add('input-correct'); input3.classList.remove('input-wrong');
            fb2_3.innerHTML = '✅ Отлично! O — это Кислород.';
            fb2_3.style.backgroundColor = '#e8f5e9'; fb2_3.style.color = '#155724';
        } else {
            input3.classList.add('input-wrong'); input3.classList.remove('input-correct');
            fb2_3.innerHTML = '❌ Не угадали. Символ O — кислород.';
            fb2_3.style.backgroundColor = '#ffebee'; fb2_3.style.color = '#721c24';
        }
    }
    submit3.addEventListener('click', checkPage3);
    input3.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkPage3(); });
}

// -------------------- СТРАНИЦА 4: животные / берёза --------------------
const btnsPage4 = document.querySelectorAll('.quiz-btn4');
const fbPage4_mc = document.getElementById('feedbackPage4_mc');

if (btnsPage4.length > 0) {
    btnsPage4.forEach(btn => {
        btn.addEventListener('click', function() {
            const isCorr = this.getAttribute('data-correct') === 'true';
            btnsPage4.forEach(b => { b.style.background = 'linear-gradient(135deg, #667eea, #764ba2)'; });
            if(isCorr) {
                this.style.background = '#28a745';
                fbPage4_mc.innerHTML = '✅ Правильно! Верблюда называют кораблём пустыни.';
                fbPage4_mc.style.backgroundColor = '#e8f5e9'; fbPage4_mc.style.color = '#155724';
            } else {
                this.style.background = '#dc3545';
                fbPage4_mc.innerHTML = '❌ Нет. Корабль пустыни — верблюд.';
                fbPage4_mc.style.backgroundColor = '#ffebee'; fbPage4_mc.style.color = '#721c24';
            }
        });
    });
}

const input4 = document.getElementById('answerInput4');
const submit4 = document.getElementById('submitBtn4');
const fb2_4 = document.getElementById('feedback2_4');
if (submit4) {
    function checkPage4() {
        let tree = input4.value.trim().toLowerCase();
        const birchVariants = ['берёза', 'береза', 'birch', 'betula'];
        if(birchVariants.includes(tree)) {
            input4.classList.add('input-correct'); input4.classList.remove('input-wrong');
            fb2_4.innerHTML = '✅ Великолепно! Берёза — неофициальный символ России.';
            fb2_4.style.backgroundColor = '#e8f5e9'; fb2_4.style.color = '#155724';
        } else {
            input4.classList.add('input-wrong'); input4.classList.remove('input-correct');
            fb2_4.innerHTML = '❌ Неверно. Символ России с белой корой — берёза.';
            fb2_4.style.backgroundColor = '#ffebee'; fb2_4.style.color = '#721c24';
        }
    }
    submit4.addEventListener('click', checkPage4);
    input4.addEventListener('keypress', (e) => { if(e.key === 'Enter') checkPage4(); });
}

// Инициализация градиентов для всех кнопок
document.querySelectorAll('.quiz-btn, .quiz-btn2, .quiz-btn3, .quiz-btn4').forEach(btn => {
    if (!btn.style.background || btn.style.background === '') {
        btn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }
});
