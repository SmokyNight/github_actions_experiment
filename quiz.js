function initPaintingQuiz() {
  const quizPainting = document.getElementById("quiz-painting");
  const quizOptions = Array.from(document.querySelectorAll(".quiz-option"));
  const quizStreak = document.getElementById("quiz-streak");
  const quizResult = document.getElementById("quiz-result");

  if (!quizPainting || !quizOptions.length || !quizStreak || !quizResult) {
    return;
  }

  let currentQuizPainting = null;
  let quizRerollTimer = null;
  let quizQuestionId = 0;
  let correctAnswersInRow = 0;

  function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function shuffleItems(items) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[index],
      ];
    }

    return shuffled;
  }

  function getNextQuizPainting() {
    if (QUIZ_PAINTINGS.length === 1) return QUIZ_PAINTINGS[0];

    let nextPainting = getRandomItem(QUIZ_PAINTINGS);

    while (nextPainting === currentQuizPainting) {
      nextPainting = getRandomItem(QUIZ_PAINTINGS);
    }

    return nextPainting;
  }

  function setQuizOptionsEnabled(enabled) {
    quizOptions.forEach((option) => {
      option.disabled = !enabled;
    });
  }

  function updateQuizStreak() {
    quizStreak.textContent = `Correct answers in a row: ${correctAnswersInRow}`;
  }

  function loadQuizPaintingImage(painting, questionId) {
    quizPainting.classList.add("is-loading");
    quizPainting.alt = "Loading painting...";
    setQuizOptionsEnabled(false);

    const loader = new Image();

    function showLoadedImage() {
      if (questionId !== quizQuestionId) return;

      quizPainting.src = loader.src;
      quizPainting.classList.remove("is-loading");
      quizPainting.alt = `Painting: ${painting.title}`;
      setQuizOptionsEnabled(true);
    }

    function showLoadError() {
      if (questionId !== quizQuestionId) return;

      quizPainting.removeAttribute("src");
      quizPainting.classList.remove("is-loading");
      quizPainting.alt = "Could not load painting";
      setQuizOptionsEnabled(true);
    }

    loader.onload = showLoadedImage;
    loader.onerror = showLoadError;
    loader.src = painting.image;

    if (loader.complete) {
      if (loader.naturalWidth > 0) {
        showLoadedImage();
      } else {
        showLoadError();
      }
    }
  }

  function renderQuizQuestion() {
    clearTimeout(quizRerollTimer);
    quizQuestionId += 1;
    const questionId = quizQuestionId;

    const nextPainting = getNextQuizPainting();
    const distractors = shuffleItems(
      QUIZ_PAINTINGS.filter((painting) => painting !== nextPainting),
    ).slice(0, quizOptions.length - 1);
    const answers = shuffleItems([nextPainting, ...distractors]);

    currentQuizPainting = nextPainting;

    quizOptions.forEach((option, index) => {
      const answer = answers[index];

      option.textContent = answer.title;
      option.dataset.correct = String(answer === nextPainting);
      option.classList.remove("selected");
    });

    quizResult.className = "quiz-result";
    quizResult.textContent = "";

    loadQuizPaintingImage(nextPainting, questionId);
  }

  quizOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const isCorrect = option.dataset.correct === "true";

      quizOptions.forEach((quizOption) => {
        quizOption.classList.toggle("selected", quizOption === option);
      });

      if (isCorrect) {
        correctAnswersInRow += 1;
      } else {
        correctAnswersInRow = 0;
      }

      updateQuizStreak();

      quizResult.className = `quiz-result ${isCorrect ? "success" : "error"}`;
      quizResult.textContent = isCorrect
        ? `Congratulations, customer! Correct answers in a row: ${correctAnswersInRow}.`
        : "Not quite. Try another option.";

      if (isCorrect) {
        quizOptions.forEach((quizOption) => {
          quizOption.disabled = true;
        });

        quizRerollTimer = setTimeout(renderQuizQuestion, 1200);
      }
    });
  });

  updateQuizStreak();
  renderQuizQuestion();
}
