const stationData = {
    yeouido: [
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
        { name: "용호동낙지 - 낙곱새", category: "korean" },
        { name: "마마된장 - 우렁된장", category: "korean" },
        { name: "오한수우육면가 - 홍콩우육면", category: "chinese" },
        { name: "팔당반점 - 짜장면", category: "chinese" },
        { name: "용설왕족발 - 족발 정식", category: "korean" },
        { name: "카레나이스 - 카레라이스", category: "asian" },
        { name: "구이구이 - 생선구이", category: "korean" },
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
        { name: "이자와 - 규카츠", category: "asian" },
        { name: "무탄 - 마카롱 멘보샤", category: "chinese" },
        { name: "르베지왕 - 새아볼", category: "western" },
        { name: "오근내8닭갈비 - 닭갈비", category: "korean" },
        { name: "유림면 - 메밀국수", category: "korean" },
        { name: "청담동순도리 - 곱도리탕", category: "korean" },
        { name: "남도고깃간 - 김치찌개", category: "korean" },
        { name: "개성손만두 - 만두전골", category: "korean" },
        { name: "마포옥 - 설렁탕", category: "korean" },
        { name: "와인주막차차 - 육장밥", category: "korean" },
        { name: "강남교자 - 칼국수", category: "korean" },
        { name: "풀향기 보쌈칼국수 - 보쌈정식", category: "korean" },
        { name: "르뵈프 - 런치 스테이크 코스", category: "western" },
        { name: "스시미소 - 스시", category: "asian" },
        { name: "신동양 - 깐풍기", category: "chinese" },
        { name: "영원식당 - 수제비", category: "korean" },
        { name: "사위식당 - 낙곱새", category: "korean" },
        { name: "후라토식당 - 규카츠", category: "asian" },
        { name: "서울경양 - 돈까스", category: "western" },
        { name: "한미옥 - 차돌구이", category: "korean" },
        { name: "야마야 - 모츠나베", category: "asian" },
        { name: "본우리반상 - 스테이크 솥밥", category: "korean" },
        { name: "제주산방식당 - 제주식 밀면", category: "korean" },
        { name: "고슬담 - 순대국", category: "korean" },
        { name: "우상화로구이 - 제덮밥", category: "korean" },
        { name: "동해도 - 회전초밥", category: "asian" },
        { name: "창고43 - 육회비빔밥", category: "korean" },
        { name: "민소한우 - 갈비탕", category: "korean" },
        { name: "강가 - 커리", category: "asian" },
        { name: "테이스팅룸 - 파스타", category: "western" },
        { name: "더플레이스 - 폭탄피자", category: "western" },
        { name: "매드포갈릭 - 갈릭 스노잉 피자", category: "western" },
        { name: "퍼틴 - 쌀국수", category: "asian" },
        { name: "알로하포케 - 포케", category: "western" },
        { name: "파낙스 - 삼계탕", category: "korean" },
        { name: "바스버거 - 수제버거", category: "western" },
        { name: "홍보석 - 짜장면", category: "chinese" },
        { name: "을밀대 - 평양냉면", category: "korean" },
        { name: "워킹온더클라우드 - 스테이크", category: "western" },
        { name: "나폴레옹제과점 - 샌드위치", category: "western" },
        { name: "카페마마스 - 파니니", category: "western" },
        { name: "무교동낙지 - 낙지볶음", category: "korean" },
        { name: "신송한식 - 대구탕", category: "korean" },
        { name: "장원북어국 - 북어국", category: "korean" },
        { name: "희정식당 - 부대찌개", category: "korean" }
    ],
    seolleung: [
        { name: "농민백암순대 - 순대국", category: "korean" },
        { name: "신동궁감자탕 - 뼈숯불구이", category: "korean" },
        { name: "뽕나무쟁이 - 족발", category: "korean" },
        { name: "카츠젠 - 돈까스", category: "western" },
        { name: "마담밍 - 짬뽕냉면", category: "chinese" },
        { name: "새마을식당 - 열탄불고기", category: "korean" },
        { name: "경천애인2237 - 육회비빔밥", category: "korean" },
        { name: "이남장 - 설렁탕", category: "korean" },
        { name: "풍년집 - 참숯갈비", category: "korean" },
        { name: "하남돼지집 - 삼겹살", category: "korean" },
        { name: "스시소라 - 오마카세", category: "asian" },
        { name: "피양콩할마니 - 콩비지", category: "korean" },
        { name: "진대감 - 차돌삼합", category: "korean" },
        { name: "강남교자 - 칼국수", category: "korean" },
        { name: "강남순대국 - 순대국", category: "korean" },
        { name: "선릉설렁탕 - 설렁탕", category: "korean" },
        { name: "선릉손칼국수 - 칼국수", category: "korean" },
        { name: "명동칼국수 - 칼국수", category: "korean" },
        { name: "청국장서갈비 - 청국장", category: "korean" },
        { name: "꽃둑 - 꽃살", category: "korean" },
        { name: "동대문엽기떡볶이 - 떡볶이", category: "korean" },
        { name: "맛자랑 - 콩국수", category: "korean" },
        { name: "나이스샤워 - 텐동", category: "asian" },
        { name: "백소정 - 마제소바", category: "asian" },
        { name: "수타우동 겐 - 붓카케우동", category: "asian" },
        { name: "장정정 - 스테이크덮밥", category: "asian" },
        { name: "육미식탁 - 제육쌈밥", category: "korean" },
        { name: "솔솥 - 솥밥", category: "korean" },
        { name: "잇쇼우 - 우동", category: "asian" },
        { name: "우리집만두 - 만두전골", category: "korean" },
        { name: "떡판왕 - 즉석떡볶이", category: "korean" },
        { name: "시골밥상 - 깡장비빔밥", category: "korean" },
        { name: "오한수우육면가 - 우육면", category: "chinese" },
        { name: "스시산원 - 오마카세", category: "asian" },
        { name: "남원추어탕 - 추어탕", category: "korean" },
        { name: "제주몬트락 - 흑돼지", category: "korean" },
        { name: "킹콩부대찌개 - 부대찌개", category: "korean" },
        { name: "듬북담북 - 북어국", category: "korean" },
        { name: "사보텐 - 돈까스", category: "western" },
        { name: "명정루 - 중화요리", category: "chinese" },
        { name: "카토멘 - 토마토라멘", category: "asian" },
        { name: "코르바니 - 파스타", category: "western" },
        { name: "오징어풍경 - 오징어불고기", category: "korean" },
        { name: "담소소사골순대 - 순대국", category: "korean" },
        { name: "부산양곱창 - 곱창전골", category: "korean" },
        { name: "별양집 - 양대창", category: "korean" },
        { name: "대치정육식당 - 한우", category: "korean" },
        { name: "서래향 - 탕수육", category: "chinese" },
        { name: "일미리금계찜닭 - 찜닭", category: "korean" },
        { name: "바스버거 - 수제버거", category: "western" }
    ],
    gwanghwamun: [
        { name: "광화문국밥 - 돼지국밥", category: "korean" },
        { name: "미진 - 메밀국수", category: "korean" },
        { name: "청진옥 - 해장국", category: "korean" },
        { name: "포시즌스호텔 보칼리노 - 파스타", category: "western" },
        { name: "덕후선생 - 베이징덕", category: "chinese" },
        { name: "몽중헌 - 딤섬", category: "chinese" },
        { name: "무무돈까스 - 돈까스", category: "asian" },
        { name: "깡장집 - 깡장비빔밥", category: "korean" },
        { name: "화목순대국 - 순대국", category: "korean" },
        { name: "평안도만두집 - 만두국", category: "korean" },
        { name: "장호왕곱창 - 김치찌개", category: "korean" },
        { name: "고가빈커리하우스 - 커리", category: "asian" },
        { name: "힐사이드테이블 - 샐러드", category: "western" },
        { name: "오제제 - 자루우동", category: "asian" },
        { name: "도토리브라더스 - 대창덮밥", category: "asian" },
        { name: "빌즈 - 브런치", category: "western" },
        { name: "테라로사 - 샌드위치", category: "western" },
        { name: "카페마마스 - 리코타치즈샐러드", category: "western" },
        { name: "광화문집 - 김치찌개", category: "korean" },
        { name: "모루카츠 - 돈카츠", category: "asian" },
        { name: "광화문뚝감 - 감자탕", category: "korean" },
        { name: "후니도니 - 치즈돈까스", category: "western" },
        { name: "헤비스테이크 - 스테이크", category: "western" },
        { name: "뽐모도로 - 파스타", category: "western" },
        { name: "쿠아타이푸드 - 팟타이", category: "asian" },
        { name: "장수회관 - 샤브샤브", category: "korean" },
        { name: "전주콩나물해장국 - 콩나물국밥", category: "korean" },
        { name: "소국밥 - 소국밥", category: "korean" },
        { name: "홍지식탁 - 가정식", category: "korean" },
        { name: "허니떡볶이 - 즉석떡볶이", category: "korean" },
        { name: "서촌백년화로 - 제육볶음", category: "korean" },
        { name: "오가와 - 스시", category: "asian" },
        { name: "스시산원 경 - 오마카세", category: "asian" },
        { name: "칸다소바 - 마제소바", category: "asian" },
        { name: "유림면 - 메밀국수", category: "korean" },
        { name: "무교동북어국집 - 북어국", category: "korean" },
        { name: "이문설농탕 - 설렁탕", category: "korean" },
        { name: "열빈 - 짜장면", category: "chinese" },
        { name: "가봉루 - 짬뽕", category: "chinese" },
        { name: "초이다이닝 - 후토마끼", category: "asian" },
        { name: "우육면관 - 우육면", category: "chinese" },
        { name: "오레노라멘 - 라멘", category: "asian" },
        { name: "플래터7 - 파스타", category: "western" },
        { name: "브루클린더버거조인트 - 버거", category: "western" },
        { name: "다운타우너 - 버거", category: "western" },
        { name: "아이엠베이글 - 베이글", category: "western" },
        { name: "르메이에르 - 쌀국수", category: "asian" },
        { name: "반포식스 - 쌀국수", category: "asian" },
        { name: "완차이면가 - 볶음밥", category: "chinese" },
        { name: "크리스탈제이드 - 딤섬", category: "chinese" }
    ],
    gangnam: [
        { name: "강남진해장 - 양선지해장국", category: "korean" },
        { name: "농민백암순대 - 순대국", category: "korean" },
        { name: "보승회관 - 수육국밥", category: "korean" },
        { name: "왓쇼이켄 - 라멘", category: "asian" },
        { name: "무월식탁 - 간장새우덮밥", category: "korean" },
        { name: "도치피자 - 화덕피자", category: "western" },
        { name: "스시마이우 - 회전초밥", category: "asian" },
        { name: "미엔아이천등 - 우육면", category: "chinese" },
        { name: "마초쉐프 - 스테이크", category: "western" },
        { name: "1992덮밥&짜글이 - 짜글이", category: "korean" },
        { name: "을지다락 - 파스타", category: "western" },
        { name: "백운축산꽃갈비 - 갈비정식", category: "korean" },
        { name: "봉피양제주 - 평양냉면", category: "korean" },
        { name: "시골야채된장 - 된장비빔밥", category: "korean" },
        { name: "딘타이펑 - 샤오롱바오", category: "chinese" },
        { name: "우동명가기리야마본진 - 우동", category: "asian" },
        { name: "갓덴스시 - 스시", category: "asian" },
        { name: "정돈 - 돈까스", category: "asian" },
        { name: "고에몬 - 파스타", category: "western" },
        { name: "김밥천국 - 김밥", category: "korean" },
        { name: "오제제 - 자루우동", category: "asian" },
        { name: "다몽집 - 돼지고기", category: "korean" },
        { name: "장인닭갈비 - 닭갈비", category: "korean" },
        { name: "만원수산 - 회덮밥", category: "korean" },
        { name: "스파게티스토리 - 스파게티", category: "western" },
        { name: "보영만두 - 쫄면", category: "korean" },
        { name: "대우부대찌개 - 부대찌개", category: "korean" },
        { name: "보슬보슬 - 키토김밥", category: "korean" },
        { name: "강남불백 - 불백", category: "korean" },
        { name: "솔솥 - 솥밥", category: "korean" },
        { name: "여수오동도 - 장어탕", category: "korean" },
        { name: "만족오향족발 - 족발", category: "korean" },
        { name: "쉐이크쉑 - 쉑버거", category: "western" },
        { name: "마녀주방 - 파스타", category: "western" },
        { name: "바바인디아 - 커리", category: "asian" },
        { name: "아쭈 - 쭈꾸미", category: "korean" },
        { name: "청담돈가스 - 돈가스", category: "western" },
        { name: "삼산회관 - 김치찌개", category: "korean" },
        { name: "프리모바치오바치 - 빠네", category: "western" },
        { name: "땀땀 - 곱창쌀국수", category: "asian" },
        { name: "미즈컨테이너 - 샐러드파스타", category: "western" },
        { name: "바비레드 - 파스타", category: "western" },
        { name: "을밀대 - 평양냉면", category: "korean" },
        { name: "구구당 - 홍콩파스타", category: "chinese" },
        { name: "낙원타코 - 파히타", category: "western" },
        { name: "감성타코 - 타코", category: "western" },
        { name: "무공돈까스 - 돈까스", category: "western" },
        { name: "역전우동 - 우동", category: "asian" },
        { name: "아비꼬 - 카레", category: "asian" },
        { name: "새마을식당 - 열탄불고기", category: "korean" }
    ],
    euljiro: [
        { name: "명동교자 - 칼국수", category: "korean" },
        { name: "애성회관 - 한우곰탕", category: "korean" },
        { name: "무교동북어국집 - 북어국", category: "korean" },
        { name: "진주회관 - 콩국수", category: "korean" },
        { name: "청진식당 - 오징어불고기", category: "korean" },
        { name: "황소고집 - 고추장불고기", category: "korean" },
        { name: "부엌데기 - 김치찌개", category: "korean" },
        { name: "서울고기집 - 김치찌개", category: "korean" },
        { name: "대독장 - 김치찌개", category: "korean" },
        { name: "골목집 - 김치찌개", category: "korean" },
        { name: "미당순두부 - 순두부", category: "korean" },
        { name: "은주정 - 김치찌개", category: "korean" },
        { name: "을지칼국수 - 칼국수", category: "korean" },
        { name: "이나니와요스케 - 우동", category: "asian" },
        { name: "비원손칼국수 - 칼국수", category: "korean" },
        { name: "된장예술과술 - 된장정식", category: "korean" },
        { name: "오부자 - 칼국수", category: "korean" },
        { name: "달인겉절이칼국수 - 칼국수", category: "korean" },
        { name: "하동관 - 곰탕", category: "korean" },
        { name: "남포면옥 - 평양냉면", category: "korean" },
        { name: "김밥일번가 - 김밥", category: "korean" },
        { name: "싸다김밥 - 분식", category: "korean" },
        { name: "명화당 - 냄비국수", category: "korean" },
        { name: "산불등심 - 된장찌개", category: "korean" },
        { name: "우육면관 - 우육면", category: "chinese" },
        { name: "원흥 - 짬뽕", category: "chinese" },
        { name: "부자돈까스 - 돈까스", category: "western" },
        { name: "우정함박 - 함박스테이크", category: "western" },
        { name: "명동돈가스 - 돈까스", category: "western" },
        { name: "가쯔야 - 돈까스", category: "asian" },
        { name: "오제제 - 돈까스", category: "asian" },
        { name: "아키나이제면 - 우동", category: "asian" },
        { name: "에도마에텐동하마다 - 텐동", category: "asian" },
        { name: "참치공방 - 회덮밥", category: "asian" },
        { name: "반포식스 - 쌀국수", category: "asian" },
        { name: "이멜다분식 - 떡볶이", category: "korean" },
        { name: "맛뜨리아 - 알밥", category: "korean" },
        { name: "한진빌딩구내식당 - 구내식당", category: "korean" },
        { name: "한국전력구내식당 - 구내식당", category: "korean" },
        { name: "국제빌딩직원식당 - 구내식당", category: "korean" },
        { name: "빌앤쿡 - 푸드코트", category: "korean" },
        { name: "고량주관 - 중식", category: "chinese" },
        { name: "용금옥 - 추어탕", category: "korean" },
        { name: "잠원 - 고기", category: "korean" },
        { name: "깡장집 - 비빔밥", category: "korean" },
        { name: "일미리금계찜닭 - 찜닭", category: "korean" },
        { name: "라칸티나 - 파스타", category: "western" },
        { name: "전남화순댁 - 생선구이", category: "korean" },
        { name: "늘보름 - 한식", category: "korean" },
        { name: "미진 - 메밀국수", category: "korean" },
        { name: "을지다락 - 오므라이스", category: "western" },
        { name: "필동면옥 - 평양냉면", category: "korean" },
        { name: "문경식당 - 냉동삼겹살", category: "korean" },
        { name: "영동골뱅이 - 골뱅이", category: "korean" },
        { name: "아웃백스테이크하우스 - 스테이크", category: "western" },
        { name: "매드포갈릭 - 피자", category: "western" },
        { name: "아그라 - 인도커리", category: "asian" }
    ]
};

// Detect station from body attribute
const currentStation = document.body.dataset.station || 'yeouido';
const menuData = stationData[currentStation];

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
        menuText.style.color = ''; // Reset color
        menuIcon.style.transform = ''; // Reset transform
        menuIcon.style.transition = ''; // Reset transition to CSS default
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

const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6C5CE7', '#A8E6CF', '#FF8B94'];

function pickMenu() {
    if (isAnimating) return;
    isAnimating = true;
    pickBtn.disabled = true;
    card.classList.remove('highlight');
    menuText.classList.remove('result-anim');
    menuText.style.color = ''; // Reset color
    menuIcon.style.transform = ''; // Reset transform
    menuIcon.style.transition = 'none'; // Disable transition for jitter effect
    document.getElementById('map-container').classList.remove('visible');

    let counter = 0;
    let speed = 50;

    // 1단계: 빠르게 바뀌는 효과
    const interval = setInterval(() => {
        menuText.innerText = getRandomMenu();
        menuIcon.innerText = ['🍽️', '🥢', '🥄', '🍴', '🥡', '🍜', '🥘'][Math.floor(Math.random() * 7)];

        // Visual effects
        menuText.style.color = colors[Math.floor(Math.random() * colors.length)];
        menuIcon.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${0.9 + Math.random() * 0.2})`;

        counter++;

        if (counter > 15) { // Reduced from 20 to 15 for 20% faster initial phase
            // 속도 줄이기 위한 준비
            clearInterval(interval);
            slowDown(speed);
        }
    }, speed);
}

function slowDown(currentSpeed) {
    let speed = currentSpeed * 1.35; // Increased to 1.35 for faster slowdown

    if (speed > 400) {
        // 최종 선택
        const finalMenu = getRandomMenu();
        menuText.innerText = finalMenu;
        menuIcon.innerText = '🎉';

        // Final visual state
        menuText.style.color = 'var(--primary-dark)';
        menuIcon.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'; // Enable transition for final pop
        menuIcon.style.transform = 'scale(1.2) rotate(0deg)';

        // 결과 효과
        menuText.classList.add('result-anim');
        card.classList.add('highlight');

        // 지도 링크 업데이트 및 표시
        const restaurantName = finalMenu.split(' - ')[0];
        const mapLink = document.getElementById('map-link');
        const mapContainer = document.getElementById('map-container');

        // 네이버 지도 검색 링크 생성 (역이름 + 식당이름)
        const stationNames = {
            yeouido: '여의도',
            seolleung: '선릉역',
            gwanghwamun: '광화문',
            gangnam: '강남역',
            euljiro: '을지로입구역'
        };
        const stationName = stationNames[currentStation];
        mapLink.href = `https://map.naver.com/v5/search/${stationName} ${restaurantName}`;
        mapContainer.classList.add('visible');

        isAnimating = false;
        pickBtn.disabled = false;
        return;
    }

    menuText.innerText = getRandomMenu();
    // Visual effects during slowdown
    menuText.style.color = colors[Math.floor(Math.random() * colors.length)];
    menuIcon.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${0.9 + Math.random() * 0.2})`;

    setTimeout(() => slowDown(speed), speed);
}

pickBtn.addEventListener('click', pickMenu);
