document.getElementById('playPause').addEventListener('click', function () {
    const img = this.querySelector('img'); // 버튼 내부의 이미지 요소를 찾음
    if (img.src.includes('재생')) { // 이미지 경로에 "재생"이 포함되어 있는지 확인
        img.src = 'images/멈춤.png'; // "재생" 이미지라면 "멈춤" 이미지로 변경
    } else {
        img.src = 'images/재생.png'; // "멈춤" 이미지라면 다시 "재생" 이미지로 변경
    }
});
