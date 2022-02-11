# learn-typescript

### 타입 추론(type inference)

특정 변수나 상수에 어떤 타입을 사용했는지를 추론하는 내장기능

```ts
const number = 5;
```

항상 숫자 5를 가지는 상수  
<br/>

```ts
let number = 5;
```

number 타입을 가지는 변수  
<br />

```ts
let number: number = 5;
```

가능한 방식이지만 좋은 작업방식은 아니다. 타입스크립트가 이 타입을 완벽하게 추론할 수 있기 때문이다.  
<br />

```ts
let number: number;
```

값을 지정하지 않았을 때 나중에 값을 할당할 때 어떤 값을 저장할지 타입스크립트에 알려주는 것이 좋다.

---

### 튜플(Tuple)

길이와 타입이 고정된 배열 JS에는 없는 새로운 타입이다.

```ts
let role: [number, string];
```

길이가 2이고 0번째 요소에는 숫자가, 1번째 요소에는 문자가 들어와야 하는 고정된 배열이다.  
<br>

```ts
role = [2, "admin", "user"]; //error 길이가 맞지 않기 때문에
role[0] = "admin"; //error 0번째는 숫자가 할당되어야 하지만 문자열 입력했기 때문에
role = [1, "admin"]; //ok

//예외
role.push("user");
```

예외적인 상황으로 push를 사용한 경우에는 타입스크립트가 에러를 잡지 못한다.

---

### 이넘(enum)

사용자 지정 열거형 타입이다.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up); // 0

enum Direction {
  Up = 45,
  Down = 100,
  LEft = 40,
  Right = 2,
}
console.log(Direction.Up); // 45
```

자동 증가 기능으로 Down, Left, Right는 차례대로 1, 2, 3의 값을 갖게 된다.
또한 필요에 따라 임의의 숫자를 모든 식별자에 고유한 값으로 할당할 수 있다.

---

### Any

가장 유연한 타입이다. 모든 종류의 값을 저장할 수 있다.  
타입스크립트가 주는 모든 장접을 `any`가 상쇄시켜 바닐라 자바스크립트를 쓰는 것과 다를 바 없게 되기 때문에 잘 사용하지 않는다.

---

### 유니언 & 리터럴 타입

```ts
let resultConversion: "as-number" | "as-text";
```

위와 같이 특정한 문자를 타입으로 지정하는 것을 리터럴 타입,  
여러개 중에 하나의 타입을 쓰겠다는 or 연산자 사용이 유니언 타입이다.

---

### 타입 앨리어스(type alias)

타입 앨리어스는 새로운 타입을 정의한다.

```ts
type Combinable = number | string;

let input1: Combinable;
let input2: number | string;
```

`input1`과 `input2`는 `number` 혹은 `string` 타입을 가질 수 있다.

<br>

```ts
type User = { name: string; age: number };
const user: User = { name: "minhwan", age: 30 };
```

객체 타입도 새롭게 정의할 수 있다.

---

### 함수 반환 타입 - void

함수 안에서 return 되는 값의 타입

```ts
function printResult(num: number): void {
  console.log(`Result: ` + num);
}
```

타입스크립트는 함수가 `undefined`를 비롯해 아무것도 반환하지 않는다면 `void` 타입을 추론한다.

---

### 타입의 기능을 하는 함수 - Function

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}

let combineValues; //타입 any

combineValues = add;
combineValues = 5; //any 타입이라 어떤 값이든 할당 가능

console.log(combineValues(8, 8)); //정상적으로 컴파일 된다.
```

`combineValues`는 `any`타입을 가지기 때문에 컴파일 과정에서 에러를 잡아내지 못하고 런타임 환경에서 에러를 출력하게 된다. 이런 에어를 방지하기 위해 타입을 함수로 설정한다.  
<br />

```ts
let combineValues: Function;

combineValues = add;
combineValues = 5; //에러
```

`combineValues`는 함수타입만 할당이 될 수 있다. 함수 타입은 아래와 같이 조금 더 자세하게 설정이 가능하다.

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
combineValues = printResult; //에러
```

매개변수의 타입과 리턴 타입을 설정함으로써 `combineValues`에 할당될 수 있는 함수를 특정할 수 있다.

---

### unknown

`any`와 같이 어떤 타입이든지 올 수 있지만 `any`보다는 조금 제한적이다.

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

userName = userInput; //컴파일 에러
```

`userInput`의 타입을 `any`로 바꾸면 컴파일 에러는 사라지게 된다.
