// index.html과 result.html 모두에서 사용될 수 있도록 전역 스코프에 정의
const questions = [
    {
        question: "영화 '어벤져스: 엔드게임'에서, 타노스가 모든 인구를 절반으로 줄이는 '핑거 스냅'을 실행합니다. 이 상황을 접한 당신의 첫 번째 반응은?",
        options: [
            { text: "분노에 차서 복수를 다짐하며, 모두를 모아 당장이라도 타노스에게 달려갈 계획을 세운다.", type: "E" },
            { text: "충격에 빠져 혼자 조용히 생각에 잠긴다. 이 상황의 원인과 결과를 심도 깊게 분석하고 싶다.", type: "I" }
        ]
    },
    {
        question: "영화 '인터스텔라'에서, 인류의 생존을 위해 새로운 행성을 찾아 떠나야 하는 절체절명의 순간입니다. 당신은 어떤 정보를 가장 중요하게 생각하나요?",
        options: [
            { text: "새로운 행성에서 펼쳐질 미지의 가능성, 인류가 어떤 방식으로 진화할지에 대한 큰 그림을 상상한다.", type: "N" },
            { text: "새로운 행성의 정확한 환경 데이터, 생존을 위한 구체적인 자원 확보 계획 등 현실적인 정보에 집중한다.", type: "S" }
        ]
    },
    {
        question: "영화 '다크 나이트'에서, 조커가 무고한 시민과 병원 환자 중 누구를 폭파시킬지 선택하라고 합니다. 당신이라면 이 상황을 어떻게 대처하겠습니까?",
        options: [
            { text: "데이터와 논리를 바탕으로 피해를 최소화할 수 있는 가장 합리적인 해결책을 찾으려 한다.", type: "T" },
            { text: "사람들의 공포와 절망을 느끼며, 최대한 많은 생명을 구하기 위한 도덕적이고 감정적인 결정을 내리려 한다.", type: "F" }
        ]
    },
    {
        question: "영화 '반지의 제왕'에서, 반지를 파괴하기 위한 여정이 계획대로 흘러가지 않습니다. 예기치 못한 난관에 부딪혔을 때 당신은?",
        options: [
            { text: "원래 계획을 고수하며, 발생한 문제들을 빠르게 분석하고 즉시 대안을 마련하여 계획대로 진행하려 한다.", type: "J" },
            { text: "계획에 얽매이지 않고, 현재 상황에 맞춰 유연하게 대처하며 새로운 길을 모색한다. 즉흥적인 판단이 필요하다.", type: "P" }
        ]
    },
    {
        question: "영화 '매트릭스'에서, 빨간 약과 파란 약 중 하나를 선택해야 합니다. 당신의 선택은?",
        options: [
            { text: "빨간 약을 선택하고 진실을 마주한다. 비록 고통스러울지라도, 숨겨진 현실을 파헤치고 싶다.", type: "N" },
            { text: "파란 약을 선택하고 평화로운 환상에 머무른다. 복잡한 진실보다는 안정적인 현실을 선호한다.", type: "S" }
        ]
    },
    {
        question: "영화 '스타워즈'에서, 당신은 제국의 스톰트루퍼 대장입니다. 부하가 실수로 중요한 정보를 적에게 넘겼습니다. 당신의 반응은?",
        options: [
            { text: "규정과 원칙에 따라 부하의 잘못을 엄격히 처벌하고, 재발 방지 대책을 강구한다.", type: "T" },
            { text: "부하의 사정을 듣고 그의 실수로 인한 상실감을 헤아려준다. 함께 해결책을 모색하며 격려한다.", type: "F" }
        ]
    },
    {
        question: "영화 '해리 포터'에서, 호그와트의 한 학년이 시작되었습니다. 당신은 새로운 친구들을 사귀기 위해 어떻게 행동하나요?",
        options: [
            { text: "적극적으로 다가가 말을 걸고, 먼저 자신의 이야기를 공유하며 친해지려 한다.", type: "E" },
            { text: "조용히 주변을 관찰하며, 나와 관심사가 맞는 친구들이 먼저 다가와 주기를 기다린다.", type: "I" }
        ]
    },
    {
        question: "영화 '캡틴 아메리카: 시빌 워'에서, 어벤져스 팀원들 간의 갈등이 최고조에 달했습니다. 당신은 이 갈등을 어떻게 해결하려 하나요?",
        options: [
            { text: "명확한 원칙과 규칙을 세워 갈등을 중재하고, 팀원들이 이에 따르도록 강하게 이끌어간다.", type: "J" },
            { text: "각자의 입장을 충분히 듣고 이해하며, 상황에 따라 유연하게 타협점을 찾아 갈등을 완화하려 한다.", type: "P" }
        ]
    }
];

// MBTI 유형별 빌런과 설명 데이터
const villainMbtiTypes = {
    "ISTJ": {
        villainName: "냉철한 계산의 빌런, '어벤져스: 인피니티 워'의 타노스",
        villainDescription: "자신의 신념을 바탕으로 질서를 재편하려는 당신은 우주적 균형을 추구하는 타노스와 닮았습니다. 냉철한 논리와 확고한 원칙으로 목표를 향해 묵묵히 나아가는 당신은 강력한 의지를 가진 빌런입니다."
    },
    "ISFJ": {
        villainName: "조용한 헌신의 빌런, '다크 나이트'의 라스 알 굴",
        villainDescription: "겉으로는 정의를 외치지만, 자신만의 방식으로 세상을 정화하려는 당신은 라스 알 굴처럼 복잡한 신념을 가진 빌런입니다. 타락한 세상에 대한 깊은 실망감을 바탕으로, 치밀하게 계획을 실행합니다."
    },
    "INFJ": {
        villainName: "이상을 강요하는 빌런, '킹스맨: 골든 서클'의 포피 아담스",
        villainDescription: "자신만의 완벽한 이상 사회를 꿈꾸며, 이를 위해 수단과 방법을 가리지 않는 당신은 포피 아담스처럼 매혹적인 이상주의자 빌런입니다. 조용하지만 강한 신념으로 세상을 바꾸려 합니다."
    },
    "INTJ": {
        villainName: "비범한 지능의 빌런, '배트맨'의 조커 (다크 나이트)",
        villainDescription: "혼돈 속에서 자신만의 논리를 구축하고, 치밀한 계획으로 세상을 뒤흔드는 당신은 다크 나이트의 조커와 닮았습니다. 예측 불가능한 지능과 냉철한 분석력으로 사회의 허점을 파고듭니다."
    },
    "ISTP": {
        villainName: "통제 불능의 파괴자, '매드 맥스: 분노의 도로'의 임모탄 조",
        villainDescription: "강렬한 생존 본능과 본능적인 행동으로 모든 것을 통제하려는 당신은 임모탄 조처럼 거친 매력의 빌런입니다. 목표를 위해서는 수단과 방법을 가리지 않으며, 압도적인 힘으로 주변을 지배합니다."
    },
    "ISFP": {
        villainName: "예술을 가장한 광기, '양들의 침묵'의 한니발 렉터",
        villainDescription: "뛰어난 감각과 미학적 취향을 가졌지만, 그 속에 숨겨진 예측 불가능한 광기를 가진 당신은 한니발 렉터와 닮았습니다. 예술적이고 섬세한 모습 뒤에 잔혹하고 냉철한 이성을 숨기고 있습니다."
    },
    "INFP": {
        villainName: "왜곡된 정의의 빌런, '어벤져스: 에이지 오브 울트론'의 울트론",
        villainDescription: "세상을 더 나은 곳으로 만들겠다는 이상이 왜곡되어 파괴로 이어지는 당신은 울트론처럼 뒤틀린 정의감을 가진 빌런입니다. 인간의 나약함을 간파하고, 자신만의 방식으로 완벽한 세상을 만들려 합니다."
    },
    "INTP": {
        villainName: "지식에 굶주린 광기, '쏘우'의 직쏘 (존 크레이머)",
        villainDescription: "인간의 본성을 시험하고, 논리적인 퍼즐을 통해 교훈을 주려는 당신은 직쏘처럼 복잡한 지성파 빌런입니다. 지적 호기심과 분석력으로 사람들을 극한의 상황으로 몰아넣습니다."
    },
    "ESTP": {
        villainName: "스릴을 즐기는 악당, '스파이더맨'의 그린 고블린",
        villainDescription: "예측 불가능한 행동과 과감한 도발로 혼돈을 유발하는 당신은 그린 고블린처럼 스릴을 즐기는 빌런입니다. 자신의 능력과 힘을 과시하며, 언제나 상황의 중심에 서기를 원합니다."
    },
    "ESFP": {
        villainName: "화려한 이목의 지배자, '수어사이드 스쿼드'의 할리 퀸",
        villainDescription: "강렬하고 매혹적인 존재감으로 모두의 시선을 사로잡는 당신은 할리 퀸처럼 자유분방하고 매력적인 빌런입니다. 즉흥적이고 감정적이지만, 그 안에 숨겨진 예측 불가능한 힘을 가지고 있습니다."
    },
    "ENFP": {
        villainName: "혼돈을 선사하는 유쾌한 악당, '배트맨'의 펭귄 (팀 버튼)",
        villainDescription: "기이하고 독창적인 방식으로 세상의 이목을 끌며 혼돈을 즐기는 당신은 펭귄처럼 개성 강한 빌런입니다. 재치와 기발함으로 상대를 혼란에 빠뜨리며, 자신만의 세계를 구축합니다."
    },
    "ENTP": {
        villainName: "논리적 허점을 파고드는 파괴자, '매트릭스'의 스미스 요원",
        villainDescription: "시스템의 허점을 꿰뚫고, 논리적인 파고듦으로 기존 질서를 파괴하려는 당신은 스미스 요원처럼 냉철한 지성의 빌런입니다. 끊임없이 논쟁하며 새로운 가능성을 제시하려 합니다."
    },
    "ESTJ": {
        villainName: "절대적인 통제자, '스타워즈'의 다스 베이더",
        villainDescription: "강력한 리더십과 확고한 통제력으로 질서를 강요하는 당신은 다스 베이더처럼 압도적인 빌런입니다. 규칙과 원칙을 중요하게 여기며, 자신의 목표를 이루기 위해 강력하게 밀어붙입니다."
    },
    "ESFJ": {
        villainName: "겉과 속이 다른 치명적인 유혹, '아이언맨 2'의 위플래시",
        villainDescription: "겉으로는 조용하고 순종적인 듯 보이지만, 내면에는 복수심과 강렬한 에너지를 품고 있는 당신은 위플래시처럼 복수심에 불타는 빌런입니다. 뛰어난 기술력과 끈기로 상대를 압박합니다."
    },
    "ENFJ": {
        villainName: "광적인 신념의 선동가, '반지의 제왕'의 사루만",
        villainDescription: "설득력 있는 언변과 카리스마로 추종자들을 모으고, 자신만의 대의를 위해 세상을 재편하려는 당신은 사루만처럼 강력한 선동가 빌런입니다. 강한 신념으로 세상을 지배하려 합니다."
    },
    "ENTJ": {
        villainName: "압도적인 야망의 지배자, '어벤져스: 에이지 오브 울트론'의 로키",
        villainDescription: "타고난 지략과 카리스마로 권력을 쟁취하려는 당신은 로키처럼 야망 넘치는 빌런입니다. 뛰어난 전략가이자 통솔자로, 자신의 비전을 실현하기 위해 대담하게 행동합니다."
    }
};


// index.html에서 실행되는 코드
if (document.getElementById('quiz-container')) {
    let currentQuestionIndex = 0;
    // 각 질문에 대한 사용자의 선택을 저장 (뒤로 가기 기능용)
    // 예: [{ questionIndex: 0, selectedType: 'E' }, { questionIndex: 1, selectedType: 'N' }]
    const userSelections = [];
    // MBTI 최종 결과 계산을 위한 각 유형별 합계
    const answers = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };

    const startQuizButton = document.getElementById('start-quiz-btn');
    const quizContainer = document.getElementById('quiz-container');
    const backButton = document.getElementById('back-btn'); // 뒤로 가기 버튼

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

            // '뒤로 가기' 시 선택지 초기화 로직
            // 현재 문항에 대한 이전에 저장된 선택이 있다면 'selected' 클래스를 제거합니다.
            const previousSelection = userSelections[currentQuestionIndex];
            if (previousSelection) {
                // 이전 선택에 대한 카운트 값을 미리 제거해줍니다.
                answers[previousSelection.selectedType]--;
                userSelections[currentQuestionIndex] = null; // 해당 문항 선택 정보 초기화
            }
            // 모든 버튼에서 'selected' 클래스 제거
            optionButtons.forEach(btn => btn.classList.remove('selected'));


            optionButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    // 모든 버튼에서 'selected' 클래스 제거 후 현재 선택된 버튼에 추가 (시각적 피드백)
                    optionButtons.forEach(btn => btn.classList.remove('selected'));
                    e.target.classList.add('selected');

                    const selectedType = e.target.dataset.type;

                    // 현재 선택된 유형의 카운트 증가
                    answers[selectedType]++;

                    // 사용자 선택 정보 저장
                    userSelections[currentQuestionIndex] = {
                        questionIndex: currentQuestionIndex,
                        selectedType: selectedType
                    };

                    // 다음 질문으로 즉시 이동 (클릭 후 잠시 딜레이를 주어 시각적 확인 가능)
                    setTimeout(() => {
                        goToNextQuestion();
                    }, 300); // 0.3초 후 다음 질문으로 이동
                });
            });

            // 뒤로 가기 버튼 표시/숨김 처리
            if (currentQuestionIndex > 0) {
                backButton.style.display = 'block';
            } else {
                backButton.style.display = 'none';
            }

        } else {
            // 모든 질문 완료 시 결과 페이지로 이동
            calculateResultAndRedirect();
        }
    }

    function goToNextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function goToPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            // 현재 화면의 선택된 상태를 초기화하고 이전 문항으로 이동 (displayQuestion에서 처리됨)
            currentQuestionIndex--;
            displayQuestion();
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

    // 뒤로 가기 버튼 이벤트 리스너
    backButton.addEventListener('click', goToPreviousQuestion);

    // START 버튼 클릭 시 동작 추가
    startQuizButton.addEventListener('click', () => {
        startQuizButton.style.display = 'none'; // 시작 버튼 숨기기
        quizContainer.style.display = 'block'; // 퀴즈 컨테이너 보이기
        displayQuestion(); // 첫 질문 로드
    });
}


// result.html에서 실행되는 코드
if (document.getElementById('villain-name')) {
    // Kakao SDK 초기화 - JavaScript 앱 키를 이곳에 직접 입력합니다.
    Kakao.init('e748b5d17d231ca36365d1c6498e8327');

    const urlParams = new URLSearchParams(window.location.search);
    const mbti = urlParams.get('mbti');

    const villainNameElement = document.getElementById('villain-name');
    const villainDescriptionElement = document.getElementById('villain-description');
    const shareButton = document.getElementById('share-btn');
    const kakaoShareButton = document.getElementById('kakao-share-btn');
    const shareLinkDisplay = document.getElementById('share-link-display');
    const shareLinkInput = document.getElementById('share-link-input');
    const copyButton = document.getElementById('copy-btn');

    let currentVillainMbtiInfo = null;

    if (mbti && villainMbtiTypes[mbti]) {
        currentVillainMbtiInfo = villainMbtiTypes[mbti];
        villainNameElement.textContent = `당신은 ${currentVillainMbtiInfo.villainName}!`;
        villainDescriptionElement.textContent = currentVillainMbtiInfo.villainDescription;
    } else {
        villainNameElement.textContent = "당신의 빌런 유형을 찾을 수 없습니다.";
        villainDescriptionElement.textContent = "다시 검사를 진행해주세요.";
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
        if (currentVillainMbtiInfo) {
            Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: `나는 ${currentVillainMbtiInfo.villainName}!`,
                    description: currentVillainMbtiInfo.villainDescription,
                    imageUrl:
                        'https://via.placeholder.com/300x200', // 여기에 실제 서비스의 대표 이미지 URL을 넣어주세요.
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        title: '나의 빌런 유형 확인하기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            });
        } else {
            alert('빌런 유형 결과가 없어 카카오톡으로 공유할 수 없습니다.');
        }
    });
}