// index.html과 result.html 모두에서 사용될 수 있도록 전역 스코프에 정의
const questions = [
    {
        question: "주말에 무엇을 하시나요?",
        options: [
            { text: "친구들과 파티에 갑니다.", type: "E" }
            ,
            { text: "집에서 혼자 영화를 봅니다.", type: "I" }
        ]
    },
    {
        question: "새로운 프로젝트를 시작할 때?",
        options: [
            { text: "큰 그림을 먼저 그립니다.", type: "N" }
            ,
            { text: "구체적인 세부사항부터 계획합니다.", type: "S" }
        ]
    },
    {
        question: "어려운 결정을 내려야 할 때?",
        options: [
            { text: "논리적이고 객관적으로 판단합니다.", type: "T" }
            ,
            { text: "사람들의 감정을 고려합니다.", type: "F" }
        ]
    },
    {
        question: "여행 계획을 세울 때?",
        options: [
            { text: "즉흥적으로 떠납니다.", type: "P" }
            ,
            { text: "세부 계획을 꼼꼼히 세웁니다.", type: "J" }
        ]
    },
    {
        question: "새로운 사람을 만날 때?",
        options: [
            { text: "먼저 다가가 말을 겁니다.", type: "E" }
            ,
            { text: "상대방이 다가오길 기다립니다.", type: "I" }
        ]
    },
    {
        question: "업무를 할 때?",
        options: [
            { text: "미래의 가능성과 아이디어에 집중합니다.", type: "N" }
            ,
            { text: "현재 사실과 실제 적용에 집중합니다.", type: "S" }
        ]
    },
    {
        question: "칭찬을 들었을 때?",
        options: [
            { text: "그것이 사실인지 합리적으로 분석합니다.", type: "T" }
            ,
            { text: "칭찬해 준 사람의 의도와 마음에 감사함을 느낍니다.", type: "F" }
        ]
    },
    {
        question: "일을 마칠 때?",
        options: [
            { text: "일단 끝내고 다른 일을 시작합니다.", type: "J" }
            ,
            { text: "상황에 따라 유연하게 변경할 여지를 둡니다.", type: "P" }
        ]
    }
];

// MBTI 유형별 과일과 설명 데이터
const fruitMbtiTypes = {
    "ISTJ": {
        fruitName: "믿음직한 호두",
        fruitDescription: "원리원칙을 중요하게 여기며 현실적이고 책임감이 강한 당신은 마치 껍질이 단단한 호두 같습니다. 꾸준하고 침착하게 맡은 일을 해내며, 주변 사람들에게 깊은 신뢰를 줍니다."
    },
    "ISFJ": {
        fruitName: "따뜻한 복숭아",
        fruitDescription: "타인에게 헌신적이며 배려심이 깊은 당신은 달콤하고 부드러운 복숭아 같습니다. 조용하고 온화한 성격으로 주변 사람들을 살뜰히 챙기며, 따뜻한 마음으로 모두에게 편안함을 선물합니다."
    },
    "INFJ": {
        fruitName: "신비로운 자두",
        fruitDescription: "깊은 통찰력과 이상을 추구하는 당신은 속이 깊고 매력적인 자두 같습니다. 조용하지만 강한 신념을 가지고 세상을 더 나은 곳으로 만들고자 노력하며, 타인의 감정을 이해하는 공감 능력이 뛰어납니다."
    },
    "INTJ": {
        fruitName: "날카로운 파인애플",
        fruitDescription: "독립적이고 혁신적인 사고를 가진 당신은 겉은 단단해도 속은 달콤한 파인애플 같습니다. 논리적이고 전략적인 사고로 문제를 해결하며, 장기적인 계획을 세우고 목표를 향해 흔들림 없이 나아갑니다."
    },
    "ISTP": {
        fruitName: "재주꾼 바나나",
        fruitDescription: "호기심 많고 실용적인 당신은 어떤 상황에서도 유연하게 대처하는 바나나 같습니다. 손재주가 뛰어나고 문제 해결 능력이 탁월하며, 즉흥적이고 모험을 즐기는 경향이 있습니다."
    },
    "ISFP": {
        fruitName: "자유로운 딸기",
        fruitDescription: "예술적 감각이 뛰어나고 자유로운 영혼을 가진 당신은 사랑스럽고 다채로운 딸기 같습니다. 현재를 즐기고 아름다움을 추구하며, 온화하고 겸손한 태도로 주변 사람들과 잘 어울립니다."
    },
    "INFP": {
        fruitName: "몽상가 포도",
        fruitDescription: "이상적이고 창의적인 당신은 상상력이 풍부한 포도 같습니다. 자신의 가치를 중요하게 생각하며, 세상을 긍정적으로 바라보는 따뜻한 마음을 가졌습니다. 내면의 세계가 풍부하고 섬세합니다."
    },
    "INTP": {
        fruitName: "궁금한 키위",
        fruitDescription: "지적 호기심이 많고 분석적인 당신은 겉모습만큼이나 흥미로운 키위 같습니다. 논리적이고 독창적인 사고로 새로운 아이디어를 탐구하며, 지식에 대한 끊임없는 갈증을 가졌습니다."
    },
    "ESTP": {
        fruitName: "활기찬 오렌지",
        fruitDescription: "활동적이고 즉흥적인 당신은 에너지가 넘치는 오렌지 같습니다. 현실적인 문제 해결에 능하고 사교적이며, 새로운 경험을 추구하고 도전을 두려워하지 않습니다."
    },
    "ESFP": {
        fruitName: "인기만점 사과",
        fruitDescription: "재미있고 사교적인 당신은 모두에게 사랑받는 사과 같습니다. 사람들과 어울리는 것을 좋아하고 분위기 메이커 역할을 하며, 타고난 유머 감각으로 주변을 즐겁게 만듭니다."
    },
    "ENFP": {
        fruitName: "재치있는 망고",
        fruitDescription: "열정적이고 창의적인 당신은 독특한 매력의 망고 같습니다. 새로운 가능성을 탐구하고 사람들과 소통하며 영감을 주고받는 것을 즐깁니다. 넘치는 에너지로 주변을 밝게 만듭니다."
    },
    "ENTP": {
        fruitName: "톡톡 튀는 레몬",
        fruitDescription: "똑똑하고 논리적인 당신은 신선하고 톡톡 튀는 레몬 같습니다. 논쟁을 즐기고 새로운 아이디어를 제시하는 데 능숙하며, 항상 지적인 자극을 추구합니다."
    },
    "ESTJ": {
        fruitName: "든든한 코코넛",
        fruitDescription: "현실적이고 체계적인 당신은 겉은 단단하고 속은 영양 가득한 코코넛 같습니다. 리더십이 뛰어나고 계획적인 성격으로 목표를 향해 꾸준히 나아갑니다. 조직을 이끄는 데 능숙합니다."
    },
    "ESFJ": {
        fruitName: "다정한 체리",
        fruitDescription: "사교적이고 친절한 당신은 달콤하고 다정한 체리 같습니다. 주변 사람들을 잘 챙기고 돕는 것을 좋아하며, 따뜻한 마음으로 모두에게 편안함과 안정감을 줍니다."
    },
    "ENFJ": {
        fruitName: "영감을 주는 배",
        fruitDescription: "카리스마 있고 영감을 주는 당신은 시원하고 넓은 마음의 배 같습니다. 타인의 성장을 돕고 긍정적인 영향을 미치고자 노력하며, 사람들을 이끄는 데 탁월한 능력을 발휘합니다."
    },
    "ENTJ": {
        fruitName: "과감한 석류",
        fruitDescription: "논리적이고 단호한 당신은 강렬한 개성의 석류 같습니다. 목표 지향적이고 탁월한 리더십으로 도전을 두려워하지 않으며, 효율적으로 문제를 해결하는 데 능숙합니다."
    }
};


// index.html에서 실행되는 코드
if (document.getElementById('quiz-container')) {
    let currentQuestionIndex = 0;
    const answers = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };
    let selectedOptionType = null;

    const startQuizButton = document.getElementById('start-quiz-btn');
    const quizContainer = document.getElementById('quiz-container');
    const nextButton = document.getElementById('next-btn');
    const submitButton = document.getElementById('submit-btn');

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="question">${q.question}</div>
                <div class="options">
                    ${q.options.map((option, index) =>
                        `<button data-type="${option.type}">${option.text}</button>`
                    ).join('')}
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    optionButtons.forEach(btn => btn.classList.remove('selected'));
                    e.target.classList.add('selected');
                    selectedOptionType = e.target.dataset.type;
                    if (currentQuestionIndex < questions.length - 1) {
                        nextButton.style.display = 'block';
                        submitButton.style.display = 'none';
                    } else {
                        nextButton.style.display = 'none';
                        submitButton.style.display = 'block';
                    }
                });
            });
            nextButton.style.display = 'none';
            submitButton.style.display = 'none';
            selectedOptionType = null;
        } else {
            // 모든 질문 완료 (이 부분은 submit-btn이 처리하므로 사실상 도달하지 않음)
        }
    }

    function goToNextQuestion() {
        if (selectedOptionType) {
            answers[selectedOptionType]++;
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                calculateResultAndRedirect();
            }
        } else {
            alert("답변을 선택해주세요!");
        }
    }

    function calculateResultAndRedirect() {
        let mbti = "";
        mbti += (answers.E >= answers.I) ? "E" : "I";
        mbti += (answers.N >= answers.S) ? "N" : "S";
        mbti += (answers.T >= answers.F) ? "T" : "F";
        mbti += (answers.J >= answers.P) ? "J" : "P";

        window.location.href = `result.html?mbti=${mbti}`;
    }

    nextButton.addEventListener('click', goToNextQuestion);
    submitButton.addEventListener('click', calculateResultAndRedirect);

    startQuizButton.addEventListener('click', () => {
        startQuizButton.style.display = 'none';
        quizContainer.style.display = 'block';
        displayQuestion();
    });
}


// result.html에서 실행되는 코드
if (document.getElementById('fruit-name')) {
    // Kakao SDK 초기화 - JavaScript 앱 키를 이곳에 직접 입력합니다.
    Kakao.init('e748b5d17d231ca36365d1c6498e8327');

    const urlParams = new URLSearchParams(window.location.search);
    const mbti = urlParams.get('mbti');

    const fruitNameElement = document.getElementById('fruit-name');
    const fruitDescriptionElement = document.getElementById('fruit-description');
    const shareButton = document.getElementById('share-btn');
    const kakaoShareButton = document.getElementById('kakao-share-btn');
    const shareLinkDisplay = document.getElementById('share-link-display');
    const shareLinkInput = document.getElementById('share-link-input');
    const copyButton = document.getElementById('copy-btn');

    let currentFruitMbtiInfo = null;

    if (mbti && fruitMbtiTypes[mbti]) {
        currentFruitMbtiInfo = fruitMbtiTypes[mbti];
        fruitNameElement.textContent = `나는 ${currentFruitMbtiInfo.fruitName}!`;
        fruitDescriptionElement.textContent = currentFruitMbtiInfo.fruitDescription;
    } else {
        fruitNameElement.textContent = "나의 과일 유형을 찾을 수 없습니다.";
        fruitDescriptionElement.textContent = "다시 검사를 진행해주세요.";
    }

    shareButton.addEventListener('click', () => {
        const shareUrl = window.location.origin + `/result.html?mbti=${mbti}`;
        shareLinkInput.value = shareUrl;
        shareLinkDisplay.style.display = 'block';

        shareLinkInput.select();
        shareLinkInput.setSelectionRange(0, 99999);
    });

    copyButton.addEventListener('click', () => {
        shareLinkInput.select();
        shareLinkInput.setSelectionRange(0, 99999);
        try {
            document.execCommand('copy');
            alert('링크가 클립보드에 복사되었습니다!');
        } catch (err) {
            console.error('클립보드 복사 실패:', err);
            alert('링크 복사에 실패했습니다. 직접 복사해주세요.');
        }
    });

    kakaoShareButton.addEventListener('click', () => {
        if (currentFruitMbtiInfo) {
            Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: `나는 ${currentFruitMbtiInfo.fruitName}!`,
                    description: currentFruitMbtiInfo.fruitDescription,
                    imageUrl:
                        'https://via.placeholder.com/300x200', // 여기에 실제 서비스의 대표 이미지 URL을 넣어주세요.
                                                              // 또는 모든 과일에 공통적으로 사용할 대표 이미지 URL
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        title: '나의 과일 유형 확인하기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            });
        } else {
            alert('과일 유형 결과가 없어 카카오톡으로 공유할 수 없습니다.');
        }
    });
}