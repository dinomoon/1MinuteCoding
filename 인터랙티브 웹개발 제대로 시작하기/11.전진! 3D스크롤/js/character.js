function Character(info) {
  this.mainElem = document.createElement("div");
  this.mainElem.classList.add("character");
  this.mainElem.innerHTML = `
    <div class="character-face-con character-head">
      <div class="character-face character-head-face face-front"></div>
      <div class="character-face character-head-face face-back"></div>
    </div>
    <div class="character-face-con character-torso">
      <div class="character-face character-torso-face face-front"></div>
      <div class="character-face character-torso-face face-back"></div>
    </div>
    <div class="character-face-con character-arm character-arm-right">
      <div class="character-face character-arm-face face-front"></div>
      <div class="character-face character-arm-face face-back"></div>
    </div>
    <div class="character-face-con character-arm character-arm-left">
      <div class="character-face character-arm-face face-front"></div>
      <div class="character-face character-arm-face face-back"></div>
    </div>
    <div class="character-face-con character-leg character-leg-right">
      <div class="character-face character-leg-face face-front"></div>
      <div class="character-face character-leg-face face-back"></div>
    </div>
    <div class="character-face-con character-leg character-leg-left">
      <div class="character-face character-leg-face face-front"></div>
      <div class="character-face character-leg-face face-back"></div>
    </div>
  `;

  document.querySelector(".stage").appendChild(this.mainElem);

  this.mainElem.style.left = `${info.xPos}%`;

  this.init();

  this.scrollState = false;
  this.lastScrollPos = 0;

  this.xPos = info.xPos;
  this.spped = 0.5;
  this.direction;
  this.runningState = false;
  this.rafId;
}

Character.prototype = {
  constructor: Character,
  init: function () {
    const self = this;

    window.addEventListener("scroll", () => {
      clearTimeout(self.scrollState);

      if (!self.scrollState) {
        self.mainElem.classList.add("running");
      }

      self.scrollState = setTimeout(() => {
        self.scrollState = false;
        self.mainElem.classList.remove("running");
      }, 300);

      if (pageYOffset > self.lastScrollPos) {
        // 스크롤 내렸을 때
        self.mainElem.setAttribute("data-direction", "forward");
      } else {
        // 스크롤 올렸을 때
        self.mainElem.setAttribute("data-direction", "backward");
      }

      self.lastScrollPos = pageYOffset;
    });

    window.addEventListener("keydown", (e) => {
      if (self.runningState) {
        return;
      }
      if (e.keyCode == 37) {
        // 왼쪽
        self.direction = "left";
        self.mainElem.setAttribute("data-direction", self.direction);
        self.mainElem.classList.add("running");
        self.run(self);
        self.runningState = true;
      } else if (e.keyCode == 39) {
        // 오른쪽
        self.direction = "right";
        self.mainElem.setAttribute("data-direction", self.direction);
        self.mainElem.classList.add("running");
        self.run(self);
        self.runningState = true;
      }
    });

    window.addEventListener("keyup", () => {
      self.mainElem.classList.remove("running");
      self.runningState = false;
      cancelAnimationFrame(self.rafId);
    });
  },

  run: function (self) {
    if (self.direction == "left") {
      self.xPos -= self.spped;
    } else if (self.direction == "right") {
      self.xPos += self.spped;
    }

    self.mainElem.style.left = `${self.xPos}%`;

    self.rafId = requestAnimationFrame(function () {
      self.run(self);
    });
  },
};
