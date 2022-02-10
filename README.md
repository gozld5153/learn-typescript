# learn-typescript

### 타입 추론(type inference)

특정 변수나 상수에 어떤 타입을 사용했는지를 추론하는 내장기능

```js
const number = 5;
```

항상 숫자 5를 가지는 상수  
<br/>

```js
let number = 5;
```

number 타입을 가지는 변수  
<br />

```js
let number: number = 5;
```

가능한 방식이지만 좋은 작업방식은 아니다. 타입스크립트가 이 타입을 완벽하게 추론할 수 있기 때문이다.  
<br />

```js
let number: number;
```

값을 지정하지 않았을 때 나중에 값을 할당할 때 어떤 값을 저장할지 타입스크립트에 알려주는 것이 좋다.  
<br />

### 튜플(Tuple)

길이와 타입이 고정된 배열 JS에는 없는 새로운 타입이다.

```js
let role: [number, string];
```

길이가 2이고 0번째 요소에는 숫자가, 1번째 요소에는 문자가 들어와야 하는 고정된 배열이다.  
<br>

```js
role = [2, "admin", "user"]; //error 길이가 맞지 않기 때문에
role[0] = "admin"; //error 0번째는 숫자가 할당되어야 하지만 문자열 입력했기 때문에
role = [1, "admin"]; //ok

//예외
role.push("user");
```

예외적인 상황으로 push를 사용한 경우에는 타입스크립트가 에러를 잡지 못한다.

### 이넘(enum)

사용자 지정 열거형 타입이다.

```js
enum Direction {Up,  Down, Left, Right}
console.log(Direction.Up) // 0

enum Direction {Up = 45, Down = 100, LEft = 40, Right = 2}
console.log(Direction.Up) // 45
```

자동 증가 기능으로 Down, Left, Right는 차례대로 1, 2, 3의 값을 갖게 된다.
또한 필요에 따라 임의의 숫자를 모든 식별자에 고유한 값으로 할당할 수 있다.
