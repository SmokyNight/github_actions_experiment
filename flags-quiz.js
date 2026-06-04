function initFlagsQuiz() {
  const flagsPage = document.getElementById("flags-quiz-page");
  const quizCard = document.getElementById("flags-quiz-card");
  const quizFlag = document.getElementById("quiz-flag");
  const choicePanel = document.getElementById("flags-quiz-choice-panel");
  const quizOptionsContainer = document.getElementById("flags-quiz-options");
  const quizOptions = quizOptionsContainer
    ? Array.from(quizOptionsContainer.querySelectorAll(".quiz-option"))
    : [];
  const quizStreak = document.getElementById("flags-quiz-streak");
  const quizResult = document.getElementById("flags-quiz-result");
  const quizQuestion = document.getElementById("flags-quiz-question");
  const typeModeToggle = document.getElementById("flags-quiz-type-mode");
  const typePanel = document.getElementById("flags-quiz-type-panel");
  const typeAnswerInput = document.getElementById("flags-quiz-answer");

  if (
    !flagsPage ||
    !quizCard ||
    !quizFlag ||
    !choicePanel ||
    !quizOptions.length ||
    !quizStreak ||
    !quizResult ||
    !quizQuestion ||
    !typeModeToggle ||
    !typePanel ||
    !typeAnswerInput
  ) {
    return;
  }

  let currentQuizFlag = null;
  let quizRerollTimer = null;
  let quizQuestionId = 0;
  let correctAnswersInRow = 0;
  let quizMode = "choice";

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

  function normalizeCountryName(value) {
    return String(value)
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function isTypeMode() {
    return quizMode === "type";
  }

  function setQuizOptionsEnabled(enabled) {
    quizOptions.forEach((option) => {
      option.disabled = !enabled;
    });
  }

  function setTypeAnswerEnabled(enabled) {
    typeAnswerInput.disabled = !enabled;
  }

  function setAnswerInputsEnabled(enabled) {
    if (isTypeMode()) {
      setQuizOptionsEnabled(false);
      setTypeAnswerEnabled(enabled);
    } else {
      setTypeAnswerEnabled(false);
      setQuizOptionsEnabled(enabled);
    }
  }

  function updateQuizModeUi() {
    const typeMode = isTypeMode();

    quizMode = typeMode ? "type" : "choice";
    quizCard.dataset.mode = quizMode;
    typeModeToggle.checked = typeMode;
    choicePanel.setAttribute("aria-hidden", String(typeMode));
    typePanel.setAttribute("aria-hidden", String(!typeMode));
    quizQuestion.textContent = typeMode
      ? "Type the country name and press Enter."
      : "Which country does this flag belong to?";

    quizResult.className = "quiz-result";
    quizResult.textContent = "";
    typeAnswerInput.value = "";
    quizOptions.forEach((option) => {
      option.classList.remove("selected");
      if (typeMode) {
        option.tabIndex = -1;
      } else {
        option.removeAttribute("tabindex");
      }
    });

    if (typeMode) {
      typeAnswerInput.removeAttribute("tabindex");
    } else {
      typeAnswerInput.tabIndex = -1;
    }

    if (typeMode) {
      typeAnswerInput.focus();
    }
  }

  function updateQuizStreak() {
    quizStreak.textContent = `Correct answers in a row: ${correctAnswersInRow}`;
  }

  function processAnswer(isCorrect) {
    if (isCorrect) {
      correctAnswersInRow += 1;
    } else {
      correctAnswersInRow = 0;
    }

    updateQuizStreak();

    quizResult.className = `quiz-result ${isCorrect ? "success" : "error"}`;
    quizResult.textContent = isCorrect
      ? `Correct! Streak: ${correctAnswersInRow}.`
      : isTypeMode()
        ? "Not quite. Try again."
        : "Not quite. Try another option.";

    if (isCorrect) {
      setAnswerInputsEnabled(false);
      quizRerollTimer = setTimeout(renderQuizQuestion, 1200);
    }
  }

  function loadQuizFlagImage(flag, questionId) {
    quizFlag.classList.add("is-loading");
    quizFlag.alt = "Loading flag...";
    setAnswerInputsEnabled(false);

    const loader = new Image();

    function showLoadedImage() {
      if (questionId !== quizQuestionId) return;

      quizFlag.src = loader.src;
      quizFlag.classList.remove("is-loading");
      quizFlag.alt = `Flag of ${flag.title}`;
      setAnswerInputsEnabled(true);

      if (isTypeMode()) {
        typeAnswerInput.focus();
      }
    }

    function showLoadError() {
      if (questionId !== quizQuestionId) return;

      quizFlag.removeAttribute("src");
      quizFlag.classList.remove("is-loading");
      quizFlag.alt = "Could not load flag";
      setAnswerInputsEnabled(true);

      if (isTypeMode()) {
        typeAnswerInput.focus();
      }
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

    typeAnswerInput.value = "";
    quizResult.className = "quiz-result";
    quizResult.textContent = "";

    loadQuizFlagImage(nextFlag, questionId);
  }

  quizOptions.forEach((option) => {
    option.addEventListener("click", () => {
      if (isTypeMode()) return;

      const isCorrect = option.dataset.correct === "true";

      quizOptions.forEach((quizOption) => {
        quizOption.classList.toggle("selected", quizOption === option);
      });

      processAnswer(isCorrect);
    });
  });

  typeModeToggle.addEventListener("change", () => {
    quizMode = typeModeToggle.checked ? "type" : "choice";
    updateQuizModeUi();
    setAnswerInputsEnabled(!quizFlag.classList.contains("is-loading"));
  });

  typePanel.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!isTypeMode() || !currentQuizFlag || typeAnswerInput.disabled) {
      return;
    }

    const guess = normalizeCountryName(typeAnswerInput.value);
    if (!guess) {
      return;
    }

    const isCorrect =
      guess === normalizeCountryName(currentQuizFlag.title);

    processAnswer(isCorrect);
  });

  updateQuizStreak();
  updateQuizModeUi();
  renderQuizQuestion();
}
