//코딩앙마 youtube 자바스크립트 기초 강의(1시간 20분 object 부터)

//Object 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음.
//화살표 함수 내부에서 this를 사용하면 그 this는 외부에서 값을 가져옴.


let boy = {
    name: 'Mike',
    sayHello: () => {
        console.log(this);  //전역객체  브라우저 환경에서 전역객체는 window이고, node js에서는 global
    }
}

boy.sayHello();
this != boy




let boy = {
    name: "Mike",
    showName: function(){
      //console.log(boy.name)
        console.log(this.name)
    }
};

man.showName();  //Mike

let man = boy;
man.name = "Tom"
console.log(boy.name);  //Tom

boy = null;
man.showName();  //error boy.name이 없어져서 매소드 내에서는 객체명(boy)을 직접 써주는 것보다 this 활용하는게 좋음.

let boy = {
    name: "Mike",
    sayThis: function(){   //객체 내에서 화살표 함수 쓰면 오류남.
        console.log(this);
    }
};

boy.sayThis();



//배열(Array)

// index 배열 처음부터 매겨지는 고유번호(0부터 시작)
let students = ['철수', '영희', ... '영수']  

// 호출
console.log(students[0]);   //철수

// 특정 인덱스 대체
students[0] = '민정';
console.log(students);    //['민정', '영희', ...]

// 배열은 문자 뿐 아니라 숫자, 불린, 객체, 함수도 포함할 수 있음
let arr = [ 
    '민수', 3, false,
    {// 객체
        name: 'Mike',
        age: 30,
    },
    function(){
        console.log('TEST');
    }
];


// length: 배열의 길이
students.length    // 30



// push(): 배열 끝에 추가
let days = ['월', '화', '수'];
days.push('목')
console.log(days)  //['월', '화', '수', '목']


// pop(): 배열 끝 요소 제거
let days = ['월', '화', '수'];
days.pop('수')
console.log(days)  //['월', '화']



// shift, unshift : 배열 앞에 제거/추가
// 추가
days.unshift('일');
console.log(days)  // ['일', '월', '화', '수'];
// 제거
days.shift();
console.log(days)  // ['월', '화', '수'];

// shift/unshift는 여러 요소 한 번에 추가/제거 가능
days.unshift('금', '토', '일');
console.log(days)  // ['일', '월', '화', '수'];



// 반복문: for
let days = [ '월', '화', '수'];
for (let index = 0; index < days.length; index++){
    console.log(days[index])
}


// 반복문: for ... of
let days = [ '월', '화', '수'];
for (let day of days){
    console.log(day)
}




let days = ['mon', 'tue', 'wed'];
days[1] = '화요일';   // 대체대체대체!
console.log(days);   //['mon', '화요일', 'wed'];
console.log(days.length);   // 인덱스처럼 0부터 시작하는거 아니고 1부터!
days.push('thu');   // ['mon', 'tue', 'wed', 'thu'];
days.unshift('sun');   // ['sun', 'mon', 'tue', 'wed', 'thu'];



// for문
for (let index = 0; index < days.length; index++){
    console.log(days[index])
}


// for ... of문
for (let x of days) {
    console.log(x); 
}
// "sun"
// "mon"
// "tue"
// "wed"
// "thu"



