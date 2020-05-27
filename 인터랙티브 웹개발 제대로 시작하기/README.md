# 인터랙티브 웹개발 제대로 시작하기

재밌다!!

### CSS변환과 애니메이션

**1. transform**

**2. transition**

- 개발자 도구에서 transition을 더 자세히 알 수 있다!
- transition-property, transition-duration, transition-timing-function, transition-delay
- timing-function도 직접 커스텀 가능!

**3. animation1**

- `transition`과 `animation`의 차이는? keyframe의 존재유무! keyframe이 있어서 animation이 transition보다 다양한 효과를 줄 수 있다.

**4. animation2**

- 좀 더 다양한 animation 속성들에 대해 알아봄!
- 역시 개발자 도구에서 어떠한 속성이 있는지 나옴(물론 에디터에서도 알려줌)

**5. animation3**

- frame by frame 애니메이션을 css 애니메이션으로 구현하기!
- 음.. 왜 150px로 하는지랑 background에 대해서 완전히 이해가 안됐다.

---

### CSS 3D

**1. CSS 3D 1**

- 오브젝트를 감싸고 있는 화면에 변화를 줘야 3D처럼 보인다.
- perspective를 주면 3D처럼 보인다.
- 부모에 perspective를 줬을 때랑 card에 perspective를 줬을 때 보이는 것이 다르다.
- rem과 em (font-size에 따라서 padding이나 margin 등등이 변화하게 하고 싶다면 padding, margin에 em을 주면 된다. em은 해당 엘리먼트 폰트사이즈의 배수! rem은 기본 폰트사이즈의 배수!)

**2. CSS 3D 2**

- 카드 뒤집기
- perspective 속성은 3D 효과가 발생해야할 엘리먼트들을 담는 컨테이너에, transform: perspective() 는 3D 효과를 줄 엘리먼트 자체에 넣는다고 보시면 됩니다.
- `transform-style: preserve-3d`;
- `backface-visibility: hidden`;

**3. CSS 3D 3**

- 파이어폭스와 IE에서 CSS 3D 사용하는 방법s?
- 나중에 필요하면 다시 보자...

---

### CSS Flex

**flex**

- 부모에게 display: flex;
- `flex-direction`의 기본값은 row (꼬치축)
- `justify-content`는 꼬치축 정렬 (flex-start, flex-end, space-between, space-around, space-evenly)
- `align-items`는 꼬치축의 수직축 정렬
- flex-grow, flex-shirink, flex-basis는 자식들이 어떤 비율로 보일지
- flex-grow는 비율인데 flex-basis의 기본값인 auto는 자식들의 공백을 기준으로 비율을 계산한다.
- flex: 1; 을 사용하면 flex-grow:1; flex-shirink:1; flex-basis: 0;이 들어간다. 그래서 자식들의 너비 그 자체를 기준으로 비율을 계산해서 편하다.

---

### 인터랙티브 웹 개발을 위한 자바스크립트 시작하기

**자바스크립트 워밍업**

- var, let, const의 차이는?

  - var vs let,const -> 유효범위의 차이! (var은 함수, let과 const는 블럭단위(중괄호))

```javascript
function temp() {
  var a = 100;
  let b = 100;
  const c = 100;
}
//모두 에러
console.log(a);
console.log(b);
console.log(c);

if (true) {
  var a = 100;
  let b = 100;
  const c = 100;
}
//let과 const만 에러
console.log(a);
console.log(b);
console.log(c);
```

- 단, 위처럼 방(유효범위) 밖에서는 방 안에서 선언한 변수에 접근할 수 없지만 안에서는 밖에서 선언한 변수에 접근할 수 있다.

**DOM 스크립트1, 2, 3**

- 원하는 엘리먼트를 가져오고 싶다.
  - `document.querySelector()` 또는 `document.querySelectorAll()`
- 엘리먼트에 속성을 넣거나 가져오고 싶다.
  - const temp = document.querySelector('.characters');
  - temp.setAttribute('data-id', 123);
  - temp.getAttribute('data-id');
  - data-는 표준 커스텀 속성이다. data-index, data-id 등 data-의 형식으로 시작하면 어떤 속성이든 필요에 따라 임의로 추가할 수 있다.
- 직접 엘리먼트를 만들고 넣기
  - const pElem = document.createElement('p');
  - pElem.innerText = `<a href="#">일분이</a>`
  - const characters = document.querySelector('.characters');
  - characters.appendChild(pElem);
- 엘리먼트 삭제하기

  - characters.removeChild(document.querySelector('.b'));

- 클래스 추가, 삭제, 토글
  - characters.classList.add('클래스이름');
  - characters.classList.remove('클래스이름');
  - characters.classList.toggle('클래스이름');

---

### 자바스크립트 이벤트 다루기

**1. 이벤트의 기본동작**

- 클릭 이벤트 추가하는 방법
  - ilbuni.addEventListener('click', function(){ilbuni.classList.toggle('special')})
- html 파일의 헤더에서 script를 작성할 때는 window.addEventListener('load', function(){}) 또는 window.addEventListener('DOMContentLoaded', function(){}) 안에 내용을 넣어줘야한다. (DOM을 사용할 수 있도록)
- 전역 변수를 많이 사용하면 안된다.(협업할 때 변수명이 겹칠 수도 있으므로)
  - body가 끝나기 직전에 script파일을 작성하는 경우 아래와 같이 작성해준다.

```javascript
<script>
  (function(){
    const characters = document.querySelector('.characters');
  })();
</script>
```

**2. this와 이벤트 객체**

- this, e.currentTarget과 e.target의 차이?
  - this와 e.currentTarget은 이벤트를 추가한 객체를 가리키고 e.target은 이벤트가 발생한 객체를 가리킨다.

```javacript
(function)(){
  const characters = document.querySelector('.characters');

  function clickHandler(e) {
    console.log(this);
    console.log(e.currentTarget);
    console.log(e.target);
  }

  characters.addEventListener('click', clickHandler);
}();
```

**3. 움직이는 캐릭터 예제로 클릭 이벤트 익혀보기**

- 움직이는 일분이를 클릭하면 일분이가 사라지는 예제
- transform, animation으로 css작성 후 아래와 같이 자바스크립트 작성

```javascript
(function () {
  const ilbuni = document.querySelectorAll(".ilbuni");

  const clickHandler = function (e) {
    this.parentNode.removeChild(this);
  };

  for (let i = 0; i < ilbuni.length; i++) {
    ilbuni[i].addEventListener("click", clickHandler);
  }
})();
```

**4. 이벤트 위임**

- 그런데, 위의 예제처럼 이벤트가 발생해야하는 엘리먼트에 모두 이벤트를 부여한다면 엘리먼트가 많아졌을 때, 굉장히 메모리를 많이 차지한다고 한다.(페이지 성능에 좋지 않음)
- 따라서 아래와 같이 부모에 이벤트를 부여하는 것이 좋은데, 이것을 이벤트 위임이라고 한다.
- 또 하나의 장점은, 동적으로 이벤트가 발생되야할 엘리먼트들이 생성되어야한다고 할 때 부모가 이미 이벤트를 가지고 있다면, 생성되는 엘리먼트마다 이벤트를 붙이지 않아도 된다.

```javascript
(function () {
  const container = document.querySelector(".container");

  const clickHandler = function (e) {
    // container 영역을 클릭했을 때 에러가 발생하지 않게 하기 위해
    if (e.target.classList.contains("ilbuni")) {
      container.removeChild(e.target);
    }
  };

  for (let i = 0; i < ilbuni.length; i++) {
    container.addEventListener("click", clickHandler);
  }
})();
```

**5. 이벤트 위임 보강 영상**

- 만약, 버튼을 클릭했을 때 이벤트가 발생해야하는데, 버튼 안에 텍스트나 이미지가 있어서, 클릭했을 때 이벤트가 제대로 발생하지 않는다면 어떻게 해야할까?
  1. css에서 해결: `pointer-events: none;`
  2. javascript에서 해결<br>
     => 상황에 따라 방법이 달라진다. (예를 들어 자식 엘리먼트 중에 이벤트가 또 있다면 css를 사용해서는 안된다. 자식들의 이벤트까지 막혀버리므로..)

```javascript
(function () {
  const menu = document.querySelector(".menu");

  function clickHandler(e) {
    let elem = e.target;
    while (!elem.classList.contains("menu-btn")) {
      elem = elem.parentNode;

      if ((elem.nodeName = "BODY")) {
        elem = null;
        return;
      }

      // data-를 가져오는 방법 2가지
      console.log(e.target.getAttribute("data-value"));
      console.log(e.target.dataset.value);
    }
  }
  menu.addEventListener("click", clickHandler);
})();
```

---

### 6. 3개의 문

문을 클릭했을 때 문이 열리며 일분이가 옆에서 슬라이딩 하면서 나오는 예제<br>
**1. 3개의 문1**

- outline으로 코딩을 하는 것을 보고 와.. 퍼블리싱은 저렇게 하는 거구나.. 하고 느낌..
- 기본 레이아웃을 구현.

**2. 3개의 문2**

- hover했을 때, 문이 열리고 일분이가 나타나는 것까지 구현함.

**3. 3개의 문3**

- javacript구현. 문을 클릭했을 때 열리도록 (아직 원래 열려있던 문은 닫히지 않음)

**4. 3개의 문4**

- 원래 열려있던 문도 닫히도록
  > 사실, 이 예제의 핵심은 현재 활성화된 아이템을 저장하는 이 자바스크립트 코드예요. 지금 예제처럼 여러개 중에 하나만 활성화 시키는 것은 정말 많아요. 예를 들어, 아코디언, 탭메뉴 등등.. 그러니까 이 형태를 암기하다시피 하세요.

**5. 3개의 문5**

- 코드 리팩토링
- 문을 여는 것과 닫는 것을 각각 함수로 정의함.
- 만약 홈페이지 로딩 완료되었을 때, 2번째 문을 열고 싶으면 active함수만 사용하면 되니까 편함. 그리고, requestAnimationFrame을 사용하면 animation이 적용되어 열린다.
  > 먼저 기본 상태가 로드된 후, requestAnimationFrame을 통해 한 템포 늦게 activate가 실행되며 문 열리는 디자인이 적용된다고 생각하시면 됩니다.

---

### 7. 객체(Object)

**1. 객체1**

- 객체를 만드는 방법

```javascript
//방법 1
const person = {};
person.name = '일분이';
person.age = 10;
person.introduce = function() {
  console.log("안녕하세요 저는 일분이 이고 나이는 10살이에요");
}

//방법2 (주로 쓰이는 방법)
const person = {
  person.name = '일분이';
  person.age = 10;
  person.introduce = function() {
    console.log("안녕하세요 저는 일분이 이고 나이는 10살이에요");
  }
}
```

**2. 객체2**

- 함수 수정

```javascript
const person = {
  person.name = '일분이';
  person.age = 10;
  person.introduce = function() {
    console.log("안녕하세요 저는 " + this.name + " 이고 나이는 " + this.age + "살이에요");
  }
}

const person2 = {
  person.name = '이분이';
  person.age = 8;
   person.introduce = function() {
    console.log("안녕하세요 저는 " + this.name + " 이고 나이는 " + this.age + "살이에요");
  }
}
```

**3. 객체3**

- 생성자 만드는 방법

```javascript
//생성자 (constructor)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    console.log(
      "안녕하세요 저는 " + this.name + " 이고 나이는 " + this.age + "살이에요"
    );
  };
}

//인스턴스 (instance)
const person1 = new Person("일분이", 10);
const person2 = new Person("이분이", 8);
```

**4. 객체4**

- prototype이란? 위에서 보면 introduce함수는 중복된다. 따라서 프로토타입이라는 객체에 넣어주면 메모리를 절약할 수 있다.

```javascript
//생성자 (constructor)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  console.log(
    "안녕하세요 저는 " + this.name + " 이고 나이는 " + this.age + "살이에요"
  );
};

//인스턴스 (instance)
const person1 = new Person("일분이", 10);
const person2 = new Person("이분이", 8);
```

- 또 다르 예시

```js
function Card(num, color) {
  this.num = num;
  this.color = color;
  this.init();
}

Card.prototype = {
  constructor: Card,
  init: function () {
    const mainElem = document.createElement("div");
    mainElem.style.color = this.color;
    mainElem.innerHTML = this.num;
    mainElem.classList.add("card");
    document.body.appendChild(mainElem);
  },
};

const card1 = new Card(1, "green");
const card2 = new Card(7, "blue");
```

---

### 8. 스크롤 다루기

**1.스크롤 이벤트 다루기**

- `window.pageYOffset`
  - 현재 스크롤 위치를 알려준다. (세로)

**2. 스크롤 위치에 따라 오브젝트 조작하기**

- `offsetTop`
  - 객체의 Top위치를 알려준다. (스크롤 위치가 변해도 같음)
- `getBoundingClientRect`
  - 스크롤 위치를 기준으로 객체의 위치를 알려준다.
- `innerHeight`
  - 브라우저의 높이를 알려준다.

---

### 9. Transition/Animation 이벤트

**1.Transition 이벤트**

- `transitionstart`
- `transitionend`

**2.Animation 이벤트**

- `animationstart`
- `animationend`
- `animationiteration`

---

### 10. 타이밍 제어하기

**1.setTimeout**

- 첫번째 매개변수: 원하는 시간 후에 실행될 함수, 두번째 매개변수: 원하는 시간
- clearTimeout(): 말 그대로 setTimeout을 클리어함(setTimeout이 실행되지 않음), setTimeout은 1을 리턴하는 데 이 값을 clearTimeout의 매개변수로 넣어주면 된다.

**2. setInterval**

- 두번째 매개변수로 넣은 시간마다 첫번째 매개변수에 있는 함수를 실행시킨다.
- clearTimeout과 마찬가지로 clearInterval을 사용하면 setInterval을 종료시킬 수 있다.

**3. requestAnimationFrame**

- setInterval의 단점들을 보완한 함수. 이것을 쓰는 것이 더 좋다고 한다.
- setInterval과 달리 실행함수 안에 넣어줘야한다. (재귀함수 같은..?)
- 1초에 60번을 실행하는 것을 목표로 한다고 한다. (컴퓨터 상황에 따라 달라지기 때문이라고 함.)
- cancelAnimationFrame을 사용해 종료시킬 수 있다.

```js
let timeId;
let n = 0;
const btn = document.querySelector(".btn");

function sample() {
  n++;
  // 1초에 한 번씩 실행시키기
  if (n % 60 == 0) {
    console.log("action!");
  }

  timeId = requestAnimationFrame(sample);
}

sample();

btn.addEventListener("click", () => {
  cancelAnimationFrame(timeId);
});
```

---

### 11. 전진! 3D스크롤

**전진! 3D스크롤 3**

- stage? 화면을 클릭했을 때 생기는 캐릭터는 house밖에 생김! house와 캐릭터들을 감싸줄 stage를 만듦

**전진! 3D스크롤 8**

- `pageYOffset`, `offsetHeight`, `innerHeight` 외우자~!

**전진! 3D스크롤 9**

- `resize` 이벤트 배움

**전진! 3D스크롤 11**

- clientX와 clientY를 이용해서 마우스의 위치에 따라 시점이 변하는 것처럼 만들기

**전진! 3D스크롤 12**

- 캐릭터 시작! (html)
- 머리, 몸통, 팔(왼쪽, 오른쪽), 다리(왼쪽, 오른쪽) 모두 나눠서 해야함.(모두 다르게 움직이니까)

**전진! 3D스크롤 13**

- css시작

**전진! 3D스크롤 14**

- 일분이 css로 그리기

**전진! 3D스크롤 15**

- 일분이 머리 흔들흔들 애니메이션
