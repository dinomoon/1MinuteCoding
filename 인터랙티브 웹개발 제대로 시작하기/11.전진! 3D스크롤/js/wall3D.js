(() => {
  const houseElem = document.querySelector(".house");
  let maxScrollValue;

  const resizeHandler = () => {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  };

  window.addEventListener("scroll", () => {
    const moveZ = (window.pageYOffset / maxScrollValue) * 950 - 460;
    houseElem.style.transform = `translateZ(${moveZ}vw)`;
  });

  window.addEventListener("resize", resizeHandler);

  resizeHandler();
})();
