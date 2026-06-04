function initFlagsQuiz() {
  const flagsPage = document.getElementById("flags-quiz-page");
  const quizFlag = document.getElementById("quiz-flag");
  const quizOptions = flagsPage
    ? Array.from(flagsPage.querySelectorAll(".quiz-option"))
    : [];
  const quizStreak = document.getElementById("flags-quiz-streak");
  const quizResult = document.getElementById("flags-quiz-result");

  if (!flagsPage || !quizFlag || !quizOptions.length || !quizStreak || !quizResult) {
    return;
  }

  let currentQuizFlag = null;
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

  function getNextQuizFlag() {
    if (QUIZ_FLAGS.length === 1) return QUIZ_FLAGS[0];

    let nextFlag = getRandomItem(QUIZ_FLAGS);

    while (nextFlag === currentQuizFlag) {
      nextFlag = getRandomItem(QUIZ_FLAGS);
    }

    return nextFlag;
  }

  function setQuizOptionsEnabled(enabled) {
    quizOptions.forEach((option) => {
      option.disabled = !enabled;
    });
  }

  function updateQuizStreak() {
    quizStreak.textContent = `Correct answers in a row: ${correctAnswersInRow}`;
  }

  function loadQuizFlagImage(flag, questionId) {
    quizFlag.classList.add("is-loading");
    quizFlag.alt = "Loading flag...";
    setQuizOptionsEnabled(false);

    const loader = new Image();

    function showLoadedImage() {
      if (questionId !== quizQuestionId) return;

      quizFlag.src = loader.src;
      quizFlag.classList.remove("is-loading");
      quizFlag.alt = `Flag of ${flag.title}`;
      setQuizOptionsEnabled(true);
    }

    function showLoadError() {
      if (questionId !== quizQuestionId) return;

      quizFlag.removeAttribute("src");
      quizFlag.classList.remove("is-loading");
      quizFlag.alt = "Could not load flag";
      setQuizOptionsEnabled(true);
    }

    loader.onload = showLoadedImage;
    loader.onerror = showLoadError;
    loader.src = flag.image;

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

    const nextFlag = getNextQuizFlag();
    const distractors = shuffleItems(
      QUIZ_FLAGS.filter((country) => country !== nextFlag),
    ).slice(0, quizOptions.length - 1);
    const answers = shuffleItems([nextFlag, ...distractors]);

    currentQuizFlag = nextFlag;

    quizOptions.forEach((option, index) => {
      const answer = answers[index];

      option.textContent = answer.title;
      option.dataset.correct = String(answer === nextFlag);
      option.classList.remove("selected");
    });

    quizResult.className = "quiz-result";
    quizResult.textContent = "";

    loadQuizFlagImage(nextFlag, questionId);
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
        ? `Correct! Streak: ${correctAnswersInRow}.`
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
