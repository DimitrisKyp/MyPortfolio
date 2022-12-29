const questions = document.querySelectorAll(".lesson");

questions.forEach(function (lesson) {
  const btn = lesson.querySelector(".lesson-btn");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== lesson) {
        item.classList.remove("show-text");
      }
    });

    lesson.classList.toggle("show-text");
  });
});