# 인터랙티브 웹개발 제대로 시작하기

재밌다!!

### CSS변환과 애니메이션

**1. transform**

**2. transition**

- 개발자 도구에서 transition을 더 자세히 알 수 있다!
- transition-property, transition-duration, transition-timing-function, transition-delay
- timing-function도 직접 커스텀 가능!

**3. animation1**

- transition과 animation의 차이는? keyframe의 존재유무! keyframe이 있어서 animation이 transition보다 다양한 효과를 줄 수 있다.

**4. animation2**

- 좀 더 다양한 animation 속성들에 대해 알아봄!
- 역시 개발자 도구에서 어떠한 속성이 있는지 나옴(물론 에디터에서도 알려줌)

**5. animation3**

- frame by frame 애니메이션을 css 애니메이션으로 구현하기!
- 음.. 왜 150px로 하는지랑 background에 대해서 완전히 이해가 안됐다.

### CSS 3D

**1. CSS 3D 1**

- 오브젝트를 감싸고 있는 화면에 변화를 줘야 3D처럼 보인다.
- perspective를 주면 3D처럼 보인다.
- 부모에 perspective를 줬을 때랑 card에 perspective를 줬을 때 보이는 것이 다르다.
- rem과 em (font-size에 따라서 padding이나 margin 등등이 변화하게 하고 싶다면 padding, margin에 em을 주면 된다. em은 해당 엘리먼트 폰트사이즈의 배수! rem은 기본 폰트사이즈의 배수!)

**2. CSS 3D 2**

- 카드 뒤집기
- perspective 속성은 3D 효과가 발생해야할 엘리먼트들을 담는 컨테이너에, transform: perspective() 는 3D 효과를 줄 엘리먼트 자체에 넣는다고 보시면 됩니다.
- transform-style: preserve-3d;
- backface-visibility: hidden;

**3. CSS 3D 3**

- 파이어폭스와 IE에서 CSS 3D 사용하는 방법?
- 나중에 필요하면 다시 보자...
