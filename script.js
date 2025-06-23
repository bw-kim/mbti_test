// index.html과 result.html 모두에서 사용될 수 있도록 전역 스코프에 정의
const questions = [
    {
        question: "주말에 무엇을 하시나요?",
        options: [
            { text: "친구들과 파티에 갑니다.", type: "E" },
            { text: "집에서 혼자 영화를 봅니다.", type: "I" }
        ]
    },
    {
        question: "새로운 프로젝트를 시작할 때?",
        options: [
            { text: "큰 그림을 먼저 그립니다.", type: "N" },
            { text: "구체적인 세부사항부터 계획합니다.", type: "S" }
        ]
    },
    {
        question: "어려운 결정을 내려야 할 때?",
        options: [
            { text: "논리적이고 객관적으로 판단합니다.", type: "T" },
            { text: "사람들의 감정을 고려합니다.", type: "F" }
        ]
    },
    {
        question: "여행 계획을 세울 때?",
        options: [
            { text: "즉흥적으로 떠납니다.", type: "P" },
            { text: "세부 계획을 꼼꼼히 세웁니다.", type: "J" }
        ]
    },
    {
        question: "새로운 사람을 만날 때?",
        options: [
            { text: "먼저 다가가 말을 겁니다.", type: "E" },
            { text: "상대방이 다가오길 기다립니다.", type: "I" }
        ]
    },
    {
        question: "업무를 할 때?",
        options: [
            { text: "미래의 가능성과 아이디어에 집중합니다.", type: "N" },
            { text: "현재 사실과 실제 적용에 집중합니다.", type: "S" }
        ]
    },
    {
        question: "칭찬을 들었을 때?",
        options: [
            { text: "그것이 사실인지 합리적으로 분석합니다.", type: "T" },
            { text: "칭찬해 준 사람의 의도와 마음에 감사함을 느낍니다.", type: "F" }
        ]
    },
    {
        question: "일을 마칠 때?",
        options: [
            { text: "일단 끝내고 다른 일을 시작합니다.", type: "J" },
            { text: "상황에 따라 유연하게 변경할 여지를 둡니다.", type: "P" }
        ]
    }
];

const mbtiTypes = {
    "ISTJ": {
        name: "세상의 소금형",
        description: "청렴결백한 논리주의자, 현실적이고 책임감이 강하며 신뢰할 수 있습니다."
    },
    "ISFJ": {
        name: "용감한 수호자",
        description: "사려 깊고 헌신적인 성격으로 주변 사람들을 잘 챙깁니다."
    },
    "INFJ": {
        name: "선의의 옹호자",
        description: "통찰력과 영감을 가진 이상주의자, 조용하지만 강한 영향력을 가집니다."
    },
    "INTJ": {
        name: "전략가",
        description: "독립적이고 혁신적인 사고를 가진 전략가, 장기적인 계획에 능숙합니다."
    },
    "ISTP": {
        name: "만능 재주꾼",
        description: "호기심 많고 실용적인 문제 해결사, 기계나 도구를 다루는 데 능숙합니다."
    },
    "ISFP": {
        name: "자유로운 영혼",
        description: "예술적이고 유연하며 겸손한 성격, 아름다움을 추구합니다."
    },
    "INFP": {
        name: "열정적인 중재자",
        description: "이상적이고 창의적이며 온화한 성격, 자신의 가치를 중요하게 생각합니다."
    },
    "INTP": {
        name: "논리적인 사색가",
        description: "지적이고 분석적이며 독창적인 사고방식을 가졌습니다."
    },
    "ESTP": {
        name: "모험을 즐기는 사업가",
        description: "활동적이고 즉흥적이며 현실적인 문제 해결에 능합니다."
    },
    "ESFP": {
        name: "자유로운 영혼의 연예인",
        description: "재미있고 에너지가 넘치며 사교적입니다."
    },
    "ENFP": {
        name: "재기발랄한 활동가",
        description: "열정적이고 창의적이며 사회성이 뛰어납니다."
    },
    "ENTP": {
        name: "논쟁을 즐기는 변론가",
        description: "똑똑하고 호기심 많으며 논리적인 토론을 즐깁니다."
    },
    "ESTJ": {
        name: "엄격한 관리자",
        description: "현실적이고 체계적이며 리더십이 뛰어납니다."
    },
    "ESFJ": {
        name: "사교적인 외교관",
        description: "사교적이고 친절하며 주변 사람들을 잘 돕습니다."
    },
    "ENFJ": {
        name: "정의로운 사회 운동가",
        description: "카리스마 있고 영감을 주며 타인의 성장을 돕습니다."
    },
    "ENTJ": {
        name: "대담한 통솔자",
        description: "논리적이고 단호하며 탁월한 리더십을 발휘합니다."
    }
};


// index.html에서 실행되는 코드
if (document.getElementById('quiz-container')) {
    let currentQuestionIndex = 0;
    const answers = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };
    let selectedOptionType = null; // 현재 질문에서 선택된 옵션의 유형을 저장

    const startQuizButton = document.getElementById('start-quiz-btn'); // 추가된 시작 버튼
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
                    selectedOptionType = e.target.dataset.type; // 선택된 유형 저장
                    // 옵션 선택 시 다음 또는 결과 보기 버튼 표시
                    if (currentQuestionIndex < questions.length - 1) {
                        nextButton.style.display = 'block';
                        submitButton.style.display = 'none';
                    } else {
                        nextButton.style.display = 'none';
                        submitButton.style.display = 'block';
                    }
                });
            });
            nextButton.style.display = 'none'; // 다음 버튼 초기화
            submitButton.style.display = 'none'; // 제출 버튼 초기화
            selectedOptionType = null; // 선택된 옵션 초기화
        } else {
            // 모든 질문 완료 (이 부분은 submit-btn이 처리하므로 사실상 도달하지 않음)
        }
    }

    function goToNextQuestion() {
        if (selectedOptionType) {
            answers[selectedOptionType]++; // 선택된 유형의 카운트 증가
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

        // 결과 페이지로 리디렉션하며 MBTI 유형을 URL 매개변수로 전달
        window.location.href = `result.html?mbti=${mbti}`;
    }

    nextButton.addEventListener('click', goToNextQuestion);
    submitButton.addEventListener('click', calculateResultAndRedirect);

    // START 버튼 클릭 시 동작 추가
    startQuizButton.addEventListener('click', () => {
        startQuizButton.style.display = 'none'; // 시작 버튼 숨기기
        quizContainer.style.display = 'block'; // 퀴즈 컨테이너 보이기
        displayQuestion(); // 첫 질문 로드
    });
}


// result.html에서 실행되는 코드
if (document.getElementById('mbti-type')) {
    // Kakao SDK 초기화
    Kakao.init('e748b5d17d231ca36365d1c6498e8327'); // 여기에 카카오 자바스크립트 키를 넣어주세요

    const urlParams = new URLSearchParams(window.location.search);
    const mbti = urlParams.get('mbti');

    const mbtiTypeElement = document.getElementById('mbti-type');
    const mbtiDescriptionElement = document.getElementById('mbti-description');
    const shareButton = document.getElementById('share-btn');
    const kakaoShareButton = document.getElementById('kakao-share-btn'); // Kakao 공유 버튼
    const shareLinkDisplay = document.getElementById('share-link-display');
    const shareLinkInput = document.getElementById('share-link-input');
    const copyButton = document.getElementById('copy-btn');

    let currentMbtiTypeInfo = null; // 현재 MBTI 정보를 저장할 변수

    if (mbti && mbtiTypes[mbti]) {
        currentMbtiTypeInfo = mbtiTypes[mbti];
        mbtiTypeElement.textContent = `${mbti} - ${currentMbtiTypeInfo.name}`;
        mbtiDescriptionElement.textContent = currentMbtiTypeInfo.description;
    } else {
        mbtiTypeElement.textContent = "MBTI 유형을 찾을 수 없습니다.";
        mbtiDescriptionElement.textContent = "다시 검사를 진행해주세요.";
    }

    shareButton.addEventListener('click', () => {
        const shareUrl = window.location.origin + `/result.html?mbti=${mbti}`; // 현재 도메인과 쿼리 파라미터 조합
        shareLinkInput.value = shareUrl;
        shareLinkDisplay.style.display = 'block';

        // 자동으로 링크를 선택 (모바일에서는 작동하지 않을 수 있음)
        shareLinkInput.select();
        shareLinkInput.setSelectionRange(0, 99999); // 모바일용
    });

    copyButton.addEventListener('click', () => {
        shareLinkInput.select();
        shareLinkInput.setSelectionRange(0, 99999); // 모바일용
        try {
            document.execCommand('copy');
            alert('링크가 클립보드에 복사되었습니다!');
        } catch (err) {
            console.error('클립보드 복사 실패:', err);
            alert('링크 복사에 실패했습니다. 직접 복사해주세요.');
        }
    });

    // Kakao 공유 버튼 클릭 이벤트
    kakaoShareButton.addEventListener('click', () => {
        if (currentMbtiTypeInfo) {
            Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: `나의 MBTI 유형은 ${mbti} - ${currentMbtiTypeInfo.name}!`,
                    description: currentMbtiTypeInfo.description,
                    // TODO: 여기에 실제 서비스의 대표 이미지 URL을 넣어주세요.
                    // 예시 이미지 URL: 'https://cdn.pixabay.com/photo/2016/03/05/22/01/mbti-1239893_1280.jpg'
                    imageUrl:
                        'https://via.placeholder.com/300x200', // 임시 이미지 URL
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        title: 'MBTI 결과 확인하기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            });
        } else {
            alert('MBTI 결과가 없어 카카오톡으로 공유할 수 없습니다.');
        }
    });
}