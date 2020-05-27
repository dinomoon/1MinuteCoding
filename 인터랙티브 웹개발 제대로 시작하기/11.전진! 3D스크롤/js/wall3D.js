(() => {
  const houseElem = document.querySelector(".house");
  const progressBar = document.querySelector(".progress-bar");
  let maxScrollValue;
  const mousePos = { x: 0, y: 0 };
  const stageElem = document.querySelector(".stage");

  const resizeHandler = () => {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  };

  window.addEventListener("scroll", () => {
    const progressPer = window.pageYOffset / maxScrollValue;
    const moveZ = progressPer * 950 - 460;

    houseElem.style.transform = `translateZ(${moveZ}vw)`;
    progressBar.style.width = `${progressPer * 100}%`;
  });

  window.addEventListener("resize", resizeHandler);

  window.addEventListener("mousemove", (e) => {
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = -1 + (e.clientY / window.innerHeight) * 2;

    stageElem.style.transform = `rotateX(${-mousePos.y * 6}deg) rotateY(${
      mousePos.x * 6
    }deg)`;
  });

  resizeHandler();
})();
