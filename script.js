document.addEventListener("DOMContentLoaded", function () {
  let swiper;

  function initSwiper() {
    if (window.innerWidth < 1024) {
      if (!swiper) {
        swiper = new Swiper(".swiper", {
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          grabCursor: true,
          touchEventsTarget: "wrapper",
        });
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
        document.querySelector(".swiper-wrapper").style.display = "flex";
      }
    }
  }

  function startTimer(duration) {
    const timerElements = document.querySelector(
      ".content__discount-timer"
    ).children;
    let timeLeft = duration;

    function updateTimer() {
      const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
      const seconds = String(timeLeft % 60).padStart(2, "0");

      timerElements[0].textContent = "00";
      timerElements[2].textContent = minutes;
      timerElements[4].textContent = seconds;

      if (timeLeft === 0) {
        timeLeft = duration;
      } else {
        timeLeft--;
      }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  initSwiper();
  startTimer(10 * 60);

  window.addEventListener("resize", initSwiper);
});
