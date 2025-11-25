
const menuData = [
    { name: "진주집 - 콩국수", category: "korean" },
    { name: "화목순대국 - 순대국", category: "korean" },
    { name: "별미볶음점 - 직화제육볶음", category: "korean" },
    { name: "바스버거 - 탐욕버거", category: "western" },
    { name: "브루클린더버거조인트 - 브루클린 웍스", category: "western" },
    { name: "차알 - 차알 볶음밥", category: "chinese" },
    { name: "콘타이 - 쇠고기 쌀국수", category: "asian" },
    { name: "훠궈야 - 런치 소고기 세트", category: "chinese" },
    { name: "돈이찌 - 부타규동", category: "asian" },
    { name: "남기분면 - 산라미엔", category: "chinese" },
    { name: "온더보더 - 런치 화이타", category: "western" },
    { name: "송옥 - 판모밀", category: "korean" },
    { name: "제일제면소 - 우동", category: "korean" },
    { name: "렌위치 - 샌드위치", category: "western" },
    { name: "완백부대찌개 - 부대찌개", category: "korean" },
    { name: "수하동 - 곰탕", category: "korean" },
    { name: "호우섬 - 뽀짜이판", category: "chinese" },
    { name: "마츠노하나 - 텐동", category: "asian" },
    { name: "쌉(SAAP) - 팟타이", category: "asian" },
    { name: "번패티번 - 번패티번 버거", category: "western" },
    { name: "파이브가이즈 - 리틀 치즈버거", category: "western" },
    { name: "칠암만장 - 솥밥", category: "korean" },
    { name: "수티 - 로스트 치킨", category: "western" },
    { name: "정육면체 - 우육면", category: "chinese" },
    { name: "가양칼국수버섯매운탕 - 버섯매운탕", category: "korean" },
    { name: "능동미나리 - 미나리 곰탕", category: "korean" },
    { name: "미스터초우 - 쭈꾸미 직화", category: "korean" },
    { name: "쌍대포 - 맷돌순두부", category: "korean" },
    { name: "무청감자탕 - 뼈해장국", category: "korean" },
    { name: "용호동낙지 - 낙곱새", category: "korean" },
    { name: "마마된장 - 우렁된장", category: "korean" },
    { name: "오한수우육면가 - 홍콩우육면", category: "chinese" },
    { name: "팔당반점 - 짜장면", category: "chinese" },
    { name: "불스버거 - 불스버거", category: "western" },
    { name: "용설왕족발 - 족발 정식", category: "korean" },
    { name: "카레나이스 - 카레라이스", category: "asian" },
    { name: "구이구이 - 생선구이", category: "korean" },
    { name: "정인면옥 - 평양냉면", category: "korean" },
    { name: "평안도만두집 - 만두국", category: "korean" },
    { name: "하노이의아침 - 차돌양지쌀국수", category: "asian" },
    { name: "오내또 - 가지덮밥", category: "asian" },
    { name: "삼보정 - 청국장", category: "korean" },
    { name: "대청마루 - 된장찌개", category: "korean" },
    { name: "무교동낙지 - 낙지비빔밥", category: "korean" },
    { name: "백년도담솥밥 - 제육볶음", category: "korean" },
    { name: "사랑채 - 모듬생선구이", category: "korean" },
    { name: "후루룩 - 메밀국수", category: "korean" },
    { name: "청수우동메밀냉면 - 메밀국수", category: "korean" },
    { name: "맛뜸 - 뼈해장국", category: "korean" },
    { name: "이자와 - 규카츠", category: "asian" }
];

let currentCategory = 'all';
let filteredMenus = menuData.map(item => item.name);

const menuText = document.getElementById('menu-text');
const pickBtn = document.getElementById('pick-btn');
const menuIcon = document.querySelector('.menu-icon');
const card = document.querySelector('.card');

let isAnimating = false;

const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active state update
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter logic
        currentCategory = btn.dataset.category;

        // Reset filteredMenus based on current selection
        if (currentCategory === 'all') {
            filteredMenus = menuData.map(item => item.name);
        } else {
            filteredMenus = menuData
                .filter(item => item.category === currentCategory)
                .map(item => item.name);
        }

        console.log(`Category changed to: ${currentCategory}, Items: ${filteredMenus.length}`);

        // Visual feedback
        menuText.innerText = "메뉴를 골라주세요";
        menuIcon.innerText = "🍽️";
        card.classList.remove('highlight');
        menuText.classList.remove('result-anim');
        document.getElementById('map-container').classList.remove('visible');
    });
});

function getRandomMenu() {
    // Double check filtering just in case
    let currentList = filteredMenus;
    if (currentCategory !== 'all') {
        const strictList = menuData
            .filter(item => item.category === currentCategory)
            .map(item => item.name);
        if (strictList.length > 0) {
            currentList = strictList;
        }
    }
    return currentList[Math.floor(Math.random() * currentList.length)];
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
