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
