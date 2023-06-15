// 변수
// 호이스팅
// TDZ(Temporal Dead Zone)

// 변수
// let, const, var

// var: 선언된 변수 다시 선언 가능.
// var는 선언하기 전에 사용할 수 있다 == 호이스팅 : 스코프(function 함수 내부) 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
// 코드가 실제로 이동하진 않지만 최상위로 끌어올려진 것처럼 동작 var name; 이 맨 위에 있는 것처럼 동작
console.log(name); // undefined.
var name = 'Mike';

// TDZ(Temporal Dead Zone) : tdz에 영향을 받는 let 과 const는  tdz 영역에 있을 경우 사용할 수 없습니다. 코드 예측 가능, 잠재적 버그 제거
// tdz 영역 :
// console.log(name)   여기까지가 tdz 영역. 즉, let, const가 할당되기 전까지.
// const name = "Mike";
// console.log(name);

// 변수의 생성과정 : 선언 > 초기화 > 할당
// var 는 선언과 초기화가 동시에 됨. > 할당
// let 선언 > 초기화 > 할당
let name;
name = "Mike";
// const 선언 + 초기화 + 할당
const gender;
gender = 'male';   // 에러남
// 이라 쓸 경우 const만 에러남. 선언하면서 할당을 동시에 하지 않았기 때문.


// var 는 함수 스코프
// let과 const는 블록 스코프
// 블록 스코프: 코드 블록 내에서 선언한 변수는 지역변수. 코드 블록 외부에서 접근 불가
function add(){
    // block-level Scope
}


// 생성자 함수

// 객체 리터럴
let user = {
    name: 'Mike',
    age: 30,
}

// 생성자 함수
// a.k.a. 붕어빵 틀(필요한 재료를 넣고 찍어내는 것)
function User(name, age){     //User 생성자함수 첫글자는 대문자로 하는 것이 관례.
    // this = {}       new 연산자를 사용하면 this에 빈 객체를 만들어서 this에 할당하는 것처럼 동작함.
    this.name = name;    // 함수를 실행하면서 this에 프로퍼티들을 추가함.
    this.age = age;
    // return this;     가 있는 것처럼 반환함.
}

let user1 = new User('Mike', 30);    // new 연산자를 사용해서 호출
let user2 = new User('Jane', 22);    // 비슷한 객체 3개를 생성한 것
let user3 = new User('Tom', 17);







