const menus = [
    "진주집 - 콩국수", "화목순대국 - 순대국", "별미볶음점 - 직화제육볶음", "사랑채 - 모듬생선구이", "맛뜸 - 뼈해장국",
    "거창왕돈까스 - 거창왕돈까스", "바스버거 - 바스버거 세트", "청수우동메밀냉면 - 메밀국수", "가양칼국수버섯매운탕 - 버섯매운탕", "정인면옥 - 평양냉면",
    "하동관 - 곰탕", "창고43 - 육회비빔밥", "후라토식당 - 규카츠", "오한수우육면가 - 홍콩우육면", "브루클린더버거조인트 - 브루클린 웍스",
    "사위식당 - 낙곱새", "미도인 - 가정식 스테이크", "솜씨 - 차돌된장찌개", "깡장양곱창 - 양밥", "동해도 - 회전초밥 런치",
    "오복수산 - 카이센동", "대동문 - 김치말이국수", "혜비수참치 - 회덮밥", "쿠차라 - 부리또 볼", "피그인더가든 - 파워 보울",
    "마초갈비 - 제육쌈밥", "교동전선생 - 모듬전 정식", "완도전복 - 전복죽", "평안도만두집 - 만두국", "장독대김치찌개 - 김치찌개",
    "쌍대포맷돌순두부 - 맷돌순두부찌개", "마포옥 - 설렁탕", "삼해집 - 해물칼국수", "구이구이 - 생선구이", "진진 - 손만두국",
    "옹기항아리수제비 - 항아리수제비", "희정식당 - 부대찌개", "부흥동태 - 동태탕", "제주은희네해장국 - 해장국", "무청감자탕 - 뚝배기불고기",
    "하노이의아침 - 차돌양지쌀국수", "오내또 - 가지덮밥", "차알 - 차알 볶음밥", "야마야 - 닭튀김 정식", "카레오 - 카레라이스",
    "온미동 - 사케동", "이와타 - 쇼유라멘", "최우영스시야 - 런치 스시", "디트로이트1달러피자 - 페퍼로니 피자", "해담온 - 흑돼지카츠"
];

const menuText = document.getElementById('menu-text');
const pickBtn = document.getElementById('pick-btn');
const menuIcon = document.querySelector('.menu-icon');
const card = document.querySelector('.card');

let isAnimating = false;

function getRandomMenu() {
    return menus[Math.floor(Math.random() * menus.length)];
}

function pickMenu() {
    if (isAnimating) return;
    isAnimating = true;
    pickBtn.disabled = true;
    card.classList.remove('highlight');
    menuText.classList.remove('result-anim');
    document.getElementById('map-container').classList.remove('visible');

    let counter = 0;
    let speed = 50;

    // 1단계: 빠르게 바뀌는 효과
    const interval = setInterval(() => {
        menuText.innerText = getRandomMenu();
        menuIcon.innerText = ['🍽️', '🥢', '🥄', '🍴', '🥡', '🍜', '🥘'][Math.floor(Math.random() * 7)];
        counter++;

        if (counter > 20) {
            // 속도 줄이기 위한 준비
            clearInterval(interval);
            slowDown(speed);
        }
    }, speed);
}

function slowDown(currentSpeed) {
    let speed = currentSpeed * 1.2; // 속도 점차 느리게

    if (speed > 400) {
        // 최종 선택
        const finalMenu = getRandomMenu();
        menuText.innerText = finalMenu;
        menuIcon.innerText = '🎉';

        // 결과 효과
        menuText.classList.add('result-anim');
        card.classList.add('highlight');

        // 지도 링크 업데이트 및 표시
        const restaurantName = finalMenu.split(' - ')[0];
        const mapLink = document.getElementById('map-link');
        const mapContainer = document.getElementById('map-container');

        // 네이버 지도 검색 링크 생성 (여의도 + 식당이름)
        mapLink.href = `https://map.naver.com/v5/search/여의도 ${restaurantName}`;
        mapContainer.classList.add('visible');

        isAnimating = false;
        pickBtn.disabled = false;
        return;
    }

    menuText.innerText = getRandomMenu();
    setTimeout(() => slowDown(speed), speed);
}

pickBtn.addEventListener('click', pickMenu);
