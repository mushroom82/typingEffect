let target = document.querySelector("#dynamic"); //dynamic이라는 ID 속성값을 가지고 있는 문서객체를 선택하라.

//타이핑 될 문자 배열 생성---Start
function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor( Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}
//타이핑 될 문자 배열 생성---End


//타이핑 될 문자열 리셋---Start
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}
//타이핑 될 문자열 리셋---End


//한글자씩 텍스트를 출력하는 효과---Start
function dynamic(randomArr){

    if (randomArr.length>0){
        target.textContent += randomArr.shift();        //randomArr 매개변수에서 앞에서부터 한자리씩 빼온다
        setTimeout(function(){dynamic(randomArr)},80)   //0.08초의 간격으로 dynamic 함수를 재귀 호출한다.
    }
    else{
        setTimeout(resetTyping, 2000);                  //radomArr 매개변수 출력이 완료되면 3초 단위로 resetTyping 호출
    }
}

dynamic(randomString());
//한글자씩 텍스트를 출력하는 효과---End


//Cursor 깜빡이는 효과---Start
function blink (){
    target.classList.toggle("active");
}

setInterval(blink, 500);        //blink 함수를 0.5초 단위로 call
//Cursor 깜빡이는 효과---End