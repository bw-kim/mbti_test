const questions = [
    {
        question: "주말에 무엇을 하고 싶나요?",
        options: [
            { text: "친구들과 파티에서 신나게 놀고 싶어요.", value: "E" },
            { text: "집에서 조용히 책을 읽거나 영화를 보고 싶어요.", value: "I" }
        ]
    },
    {
        question: "새로운 프로젝트를 시작할 때, 당신은 주로 어디에 집중하나요?",
        options: [
            { text: "전체적인 그림과 미래의 가능성을 봅니다.", value: "N" },
            { text: "현실적인 세부 사항과 실용적인 방법을 봅니다.", value: "S" }
        ]
    },
    {
        question: "친구가 고민을 털어놓을 때, 당신의 반응은?",
        options: [
            { text: "친구의 감정에 공감하고 위로해 줍니다.", value: "F" },
            { text: "논리적으로 문제 해결 방법을 제시해 줍니다.", value: "T" }
        ]
    },
    {
        question: "계획을 세울 때, 당신은 어떤 편인가요?",
        options: [
            { text: "계획을 세우고 그에 따라 움직이는 것을 선호합니다.", value: "J" },
            { text: "자유롭게 상황에 따라 유연하게 대처하는 것을 선호합니다.", value: "P" }
        ]
    }
];

const quizContainer = document.getElementById('quiz-container');
const startButton = document.getElementById('start-button');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result-container');
const mbtiResult = document.getElementById('mbti-result');
const mbtiDescription = document.getElementById('mbti-description');
const shareButton = document.getElementById('share-button');

let answers = {
    E: 0, I: 0,
    N: 0, S: 0,
    F: 0, T: 0,
    J: 0, P: 0
};

const mbtiDescriptions = {
    ESTJ: "현실적, 활동적, 실용적, 사실적이며 행정적인 재능이 뛰어남. 체계적, 계획적이며 목표지향적이다.",
    ESTP: "현실적, 즉흥적, 활동적, 모험적이며 적응력이 뛰어나다. 관찰력이 뛰어나고 문제 해결에 능하다.",
    ESFJ: "사교적, 친화적, 활동적, 협조적이며 동정심이 많다. 타인에게 관심이 많고 도움을 주는 것을 좋아한다.",
    ESFP: "사교적, 명랑, 활동적, 즉흥적이며 현재를 즐긴다. 재치 있고 사람들과 어울리는 것을 좋아한다.",
    ENTJ: "논리적, 분석적, 합리적, 계획적이며 리더십이 강하다. 비전을 제시하고 목표 달성을 위해 노력한다.",
    ENTP: "논리적, 분석적, 창의적, 즉흥적이며 새로운 아이디어에 흥미가 많다. 토론과 논쟁을 즐긴다.",
    ENFJ: "사교적, 이상적, 열정적, 설득력 있으며 타인의 성장을 돕는 것을 좋아한다. 공감 능력이 뛰어나다.",
    ENFP: "사교적, 창의적, 열정적, 즉흥적이며 새로운 가능성을 탐색한다. 호기심이 많고 자유로운 영혼이다.",
    ISTJ: "현실적, 책임감, 신중, 계획적이며 꼼꼼하고 정확하다. 전통과 규칙을 중시하며 신뢰할 수 있다.",
    ISTP: "현실적, 논리적, 분석적, 즉흥적이며 손재주가 좋다. 독립적이며 문제 해결에 능하다.",
    ISFJ: "친절, 책임감, 신중, 조용하며 타인을 돕는 것을 좋아한다. 성실하고 세심하며 기억력이 좋다.",
    ISFP: "조용, 온화, 예술적, 즉흥적이며 미적 감각이 뛰어나다. 자연과 예술을 사랑하며 자유를 추구한다.",
    INTJ: "논리적, 분석적, 독립적, 계획적이며 비판적 사고력이 뛰어나다. 복잡한 문제를 해결하는 것을 즐긴다.",
    INTP: "논리적, 분석적, 추상적, 탐구적이며 지적 호기심이 많다. 독창적이고 새로운 이론에 관심이 많다.",
    INFJ: "이상적, 통찰력, 이해심, 사명감 있으며 타인의 성장을 돕는 것을 좋아한다. 깊이 있는 관계를 추구한다.",
    INFP: "이상적, 공감, 창의적, 유연하며 타인의 가치를 존중한다. 내면의 세계가 풍부하고 상상력이 풍부하다."
};


function renderQuestions() {
    quizContainer.innerHTML = ''; // 기존 질문 삭제
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <div class="options">
                ${q.options.map(option => `
                    <label>
                        <input type="radio" name="q${index}" value="${option.value}">
                        ${option.text}
                    </label>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function calculateMBTI() {
    answers = { E: 0, I: 0, N: 0, S: 0, F: 0, T: 0, J: 0, P: 0 }; // 초기화
    let allAnswered = true;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption) {
            answers[selectedOption.value]++;
        } else {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        alert('모든 질문에 답해주세요!');
        return null;
    }

    let mbti = "";
    mbti += (answers.E > answers.I) ? "E" : "I";
    mbti += (answers.N > answers.S) ? "N" : "S";
    mbti += (answers.F > answers.T) ? "F" : "T";
    mbti += (answers.J > answers.P) ? "J" : "P";

    return mbti;
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    submitButton.style.display = 'block';
    renderQuestions();
});

submitButton.addEventListener('click', () => {
    const calculatedMBTI = calculateMBTI();
    if (calculatedMBTI) {
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
        resultContainer.style.display = 'block';
        mbtiResult.textContent = calculatedMBTI;
        mbtiDescription.textContent = mbtiDescriptions[calculatedMBTI] || "MBTI 결과에 대한 설명이 없습니다.";
    }const questions = [
    // 외향(E) vs 내향(I) 지표
    {
        question: "주말에 무엇을 하고 싶나요?",
        options: [
            { text: "친구들과 파티에서 신나게 놀고 싶어요.", value: "E" },
            { text: "집에서 조용히 책을 읽거나 영화를 보고 싶어요.", value: "I" }
        ]
    },
    {
        question: "새로운 사람들과 만날 때, 당신은?",
        options: [
            { text: "에너지를 얻고 활기를 느낍니다.", value: "E" },
            { text: "에너지를 소모하고 피곤함을 느낍니다.", value: "I" }
        ]
    },
    {
        question: "회의나 그룹 토론에서 당신은?",
        options: [
            { text: "주도적으로 의견을 내고 발표하는 것을 좋아합니다.", value: "E" },
            { text: "다른 사람의 의견을 듣고 신중하게 생각한 후 말하는 편입니다.", value: "I" }
        ]
    },

    // 감각(S) vs 직관(N) 지표
    {
        question: "새로운 프로젝트를 시작할 때, 당신은 주로 어디에 집중하나요?",
        options: [
            { text: "현실적인 세부 사항과 실용적인 방법을 봅니다.", value: "S" },
            { text: "전체적인 그림과 미래의 가능성을 봅니다.", value: "N" }
        ]
    },
    {
        question: "이야기를 들을 때, 당신은?",
        options: [
            { text: "구체적인 사실과 경험을 중요하게 생각합니다.", value: "S" },
            { text: "숨겨진 의미나 상징, 가능성을 찾으려고 합니다.", value: "N" }
        ]
    },
    {
        question: "문제를 해결할 때, 당신은?",
        options: [
            { text: "과거의 경험이나 현재의 데이터에 기반하여 해결책을 찾습니다.", value: "S" },
            { text: "직관과 통찰력을 활용하여 새로운 접근 방식을 시도합니다.", value: "N" }
        ]
    },

    // 사고(T) vs 감정(F) 지표
    {
        question: "친구가 고민을 털어놓을 때, 당신의 반응은?",
        options: [
            { text: "논리적으로 문제 해결 방법을 제시해 줍니다.", value: "T" },
            { text: "친구의 감정에 공감하고 위로해 줍니다.", value: "F" }
        ]
    },
    {
        question: "어떤 결정을 내릴 때, 당신은 주로 무엇을 고려하나요?",
        options: [
            { text: "객관적인 사실과 논리적 타당성.", value: "T" },
            { text: "개인의 가치, 사람들과의 관계, 조화.", value: "F" }
        ]
    },
    {
        question: "비판을 받았을 때, 당신은?",
        options: [
            { text: "그 비판이 논리적으로 맞는지 분석하려고 합니다.", value: "T" },
            { text: "비판하는 사람의 의도나 감정에 더 신경이 쓰입니다.", value: "F" }
        ]
    },

    // 판단(J) vs 인식(P) 지표
    {
        question: "계획을 세울 때, 당신은 어떤 편인가요?",
        options: [
            { text: "계획을 세우고 그에 따라 움직이는 것을 선호합니다.", value: "J" },
            { text: "자유롭게 상황에 따라 유연하게 대처하는 것을 선호합니다.", value: "P" }
        ]
    },
    {
        question: "여행을 계획할 때, 당신은?",
        options: [
            { text: "구체적인 일정을 미리 세우고 계획대로 따릅니다.", value: "J" },
            { text: "대략적인 방향만 정하고 즉흥적으로 탐험하는 것을 즐깁니다.", value: "P" }
        ]
    },
    {
        question: "마감 기한이 다가올 때, 당신은?",
        options: [
            { text: "미리미리 준비하여 마감일 전에 끝내는 편입니다.", value: "J" },
            { text: "마감 기한이 임박해서야 본격적으로 시작하는 편입니다.", value: "P" }
        ]
    }
];

// ... (이후의 mbtiDescriptions 객체와 모든 함수 코드는 동일합니다) ...