const email = document.getElementById('email')
const login = document.getElementsByClassName('startBtn')
let errStack = 0;

function hide() {
    let clicked = true;
    if (clicked) {
        document.getElementById("label").style.display = "none";
    //처음에 getElementByTag로 label 태그를 요소로 사용하려고 했으나 실패
    //-> html에 id를 추가해서 성공
    } else {
        document.getElementById("label").style.visibility = "visible";
    }
}

login.addEventListener('click', () => {
    
    if (email.value == 'kyr7091@naver.com') {
        alert('로그인 되었습니다!')
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }

    if (errStack >= 5) {
        alert('아이디를 5회 이상 틀리셨습니다.')
    }
})