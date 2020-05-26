(() => {
  const houseElem = document.querySelector(".house");
  const progressBar = document.querySelector(".progress-bar");
  let maxScrollValue;

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

  resizeHandler();
})();
