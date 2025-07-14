document.addEventListener("DOMContentLoaded", function () {
    const decreaseFontButton = document.getElementById("decrease_font_button");
    const increaseFontButton = document.getElementById("increase_font_button");
    const resetFontButton = document.getElementById("reset_font_button");
    const setFont1remButton = document.getElementById("set_font_1rem_button");
    const fontSizeDisplay = document.getElementById("font_size_display");
    const fontSizeMinAlert = document.getElementById("font_size_min_alert");
    const minFontSize = 0.5;
    let defaultFontSize;

    function setFontSize(size) {
        document.querySelectorAll("main *").forEach((el) => {
            el.style.fontSize = size + "rem";
        });
        fontSizeDisplay.value = size + "rem";

        if(fontSizeDisplay.tagName === "INPUT"){
            fontSizeDisplay.value = size + "rem";
        } else{
            fontSizeDisplay.textContent = size + "rem";
        }

        // 폰트 사이즈가 최소값 이하일 경우 decrease 버튼 disabled
        if (size <= minFontSize) {
            decreaseFontButton.disabled = true;
        } else {
            decreaseFontButton.disabled = false;
        }
    }

    function getFontSize() {
        return parseFloat(window.getComputedStyle(document.querySelector("main *")).fontSize) / 16;
    }

    function determineDefaultFontSize() {
        const width = window.innerWidth;
        if (width >= 1400) {
            return 1.4;
        } else if (width >= 700) {
            return 1.3;
        } else {
            return 1.0;
        }
    }

    defaultFontSize = determineDefaultFontSize();

    decreaseFontButton.addEventListener("click", function () {
        let currentSize = getFontSize();
        if (currentSize > minFontSize) {
            setFontSize(currentSize - 0.1);
            fontSizeMinAlert.classList.remove("min_fonted");
        }
        if (currentSize - 0.1 <= minFontSize) {
            fontSizeMinAlert.classList.add("min_fonted");
        }
    });

    increaseFontButton.addEventListener("click", function () {
        let currentSize = getFontSize();
        setFontSize(currentSize + 0.1);
        fontSizeMinAlert.classList.remove("min_fonted");
    });

    resetFontButton.addEventListener("click", function () {
        setFontSize(defaultFontSize);
        fontSizeMinAlert.classList.remove("min_fonted");
    });

    setFont1remButton.addEventListener("click", function () {
        setFontSize(1);
        fontSizeMinAlert.classList.remove("min_fonted");
    });

    // 초기 설정
    setFontSize(defaultFontSize);
    fontSizeMinAlert.classList.remove("min_fonted");
});


KumarOne.addEventListener('click', function(){
    console.log(1);
})
Roboto.addEventListener('click', function(){
    console.log("ud_mincho" , 1);
})


// document.addEventListener("DOMContentLoaded", () => {
//     const fontRadios = document.querySelectorAll('input[name="font_family_select"]');
//     const contentText = document.querySelector('.content_text'); // 여기서 선택

//     console.log("Font Radios:", fontRadios); // 라디오 버튼 확인
//     console.log("Content Text:", contentText); // 선택된 요소 확인

//     if (!fontRadios.length || !contentText) {
//         console.error("라디오 버튼 또는 컨텐츠 요소를 찾을 수 없습니다.");
//         return;
//     }

//     fontRadios.forEach((radio) => {
//         radio.addEventListener("change", (e) => {
//             const selectedFont = e.target.value;

//             // 기존 클래스 제거
//             contentText.classList.remove('biz_udpgothic', 'biz_udpmincho');

//             // 새 폰트 클래스 추가
//             contentText.classList.add(selectedFont.toLowerCase().replace(/-/g, '_'));

//             // 또는 직접 폰트 스타일 변경
//             contentText.style.fontFamily = selectedFont;
//         });
//     });
// });

document.querySelectorAll('input[name="font_family_select"]').forEach((radio) => {
    radio.addEventListener('change', function () {
        let selectedFont = this.value;
        const text = document.querySelectorAll('#text').forEach((text) => {
            text.style.fontFamily = selectedFont;
        });
    });
});

const translations = {
    "ko": {
        "title": "안녕하세요!",
        "description": "이것은 한글 버전입니다.",
        "button": "영어로 변경"
    },
    "en": {
        "title": "Hello!",
        "description": "This is the English version.",
        "button": "Change to Korean"
    }
};

function changeLanguage(lang) {
    document.getElementById("title").textContent = translations[lang]["title"];
    document.getElementById("description").textContent = translations[lang]["description"];

    // 선택한 언어를 localStorage에 저장 (새로고침해도 유지)
    localStorage.setItem("language", lang);
}

// 라디오 버튼 이벤트 리스너 추가
document.querySelectorAll('input[name="Lang_select"]').forEach((radio) => {
    radio.addEventListener('change', function () {
        changeLanguage(this.value);
    });
});

// 페이지 로드 시, 저장된 언어 설정 불러오기
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("language") || "ko"; // 기본값: 한국어
    document.querySelector(`input[value="${savedLang}"]`).checked = true; // 저장된 라디오 체크
    changeLanguage(savedLang);
});