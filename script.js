document.addEventListener("DOMContentLoaded", () => {
  // Funktion zum Befüllen der Kirchen-Detailseite
  function populateChurchPage() {
    const params = new URLSearchParams(window.location.search);
    const churchId = params.get("id");
    const data = churchData[churchId];

    if (data) {
      // Seitentitel, Überschrift und Texte setzen
      document.title = `${data.name} – Erfordia Turrita`;
      document.getElementById("church-name").textContent = data.name;

      // Banner-Bild einfügen
      const bannerContainer = document.getElementById("church-banner");
      bannerContainer.innerHTML = `<img src="${data.images.banner}" alt="Banner von ${data.name}">`;

      // Seitliche Bilder einfügen
      const sideImagesContainer = document.getElementById("side-images");
      sideImagesContainer.innerHTML = ""; // Leeren
      data.images.side.forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `Bild von ${data.name}`;
        sideImagesContainer.appendChild(img);
      });

      // Textabsätze einfügen
      const textContainer = document.getElementById("church-text");
      textContainer.innerHTML = `<p>${data.infotext.replace(
        /\n/g,
        "</p><p>"
      )}</p>`;

      // Quiz dynamisch erstellen
      const quizContainer = document.getElementById("quiz-container");
      quizContainer.innerHTML = ""; // Leeren
      if (data.quiz && data.quiz.length > 0) {
        data.quiz.forEach((q, index) => {
          const questionBlock = document.createElement("div");
          questionBlock.className = "quiz-question";

          const questionTitle = document.createElement("h4");
          questionTitle.textContent = q.question;
          questionBlock.appendChild(questionTitle);

          const answersBlock = document.createElement("div");
          answersBlock.className = "quiz-answers";
          q.answers.forEach((answer) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="checkbox" name="q${index}" value="${answer.text}" /> ${answer.text}`;
            answersBlock.appendChild(label);
          });
          questionBlock.appendChild(answersBlock);
          quizContainer.appendChild(questionBlock);
        });

        // NEU: Nachrichten-Container und Button dynamisch erstellen und anhängen
        // Dies verhindert, dass der Nachrichten-Container gelöscht wird.
        const resultDiv = document.createElement("div");
        resultDiv.id = "quiz-result";
        resultDiv.className = "quiz-result-message";
        quizContainer.appendChild(resultDiv);

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.className = "submit-btn";
        submitButton.textContent = "Submit";
        quizContainer.appendChild(submitButton);
      }

      // Video-URL setzen
      const videoFrame = document.getElementById("youtube-video");
      if (videoFrame) {
        videoFrame.src = data.videoUrl;
      }
    } else {
      // Fallback, falls keine ID gefunden wird
      document.getElementById("church-name").textContent =
        "Kirche nicht gefunden";
      // Verstecke die leeren Container
      document.querySelector(".content-wrapper").style.display = "none";
      document.getElementById("church-banner").style.display = "none";
    }
  }

  // Prüfen, auf welcher Seite wir sind
  if (document.querySelector(".church-grid")) {
    // Wir sind auf der Startseite (index.html)
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  } else if (document.getElementById("church-name")) {
    // Wir sind auf einer Detailseite (kirche.html)
    populateChurchPage();

    const quizContainer = document.getElementById("quiz-container");
    // Die Referenz wird jetzt innerhalb des Event-Listeners geholt, um sicherzustellen, dass das Element existiert.
    const videoContainer = document.getElementById("video-container");

    // Lightbox-Logik
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const sideImages = document.querySelectorAll("#side-images img");

    sideImages.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.classList.remove("hidden");
        lightboxImg.src = img.src;
      });
    });

    function closeLightbox() {
      lightbox.classList.add("hidden");
    }

    // Schließen beim Klick auf das X oder den Hintergrund
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      // Schließe nur, wenn direkt auf den Hintergrund geklickt wird, nicht auf das Bild selbst
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    quizContainer.addEventListener("submit", (event) => {
      event.preventDefault(); // Verhindert das Neuladen der Seite

      const params = new URLSearchParams(window.location.search);
      const churchId = params.get("id");
      const churchQuizData = churchData[churchId].quiz;

      // Holen des Result-Containers hier, NACHDEM er erstellt wurde.
      const resultContainer = document.getElementById("quiz-result");

      let unansweredCount = 0;
      let tooManyAnswersCount = 0;
      let incorrectCount = 0;

      // Setze alte Nachrichten zurück und verstecke das Video
      resultContainer.innerHTML = "";
      resultContainer.className = "quiz-result-message"; // Setzt auf Standard (versteckt)
      videoContainer.classList.add("hidden");

      const questionBlocks = quizContainer.querySelectorAll(".quiz-question");

      questionBlocks.forEach((questionBlock, index) => {
        const selectedCheckboxes = questionBlock.querySelectorAll(
          'input[type="checkbox"]:checked'
        );

        // Prüfe auf Validierungsfehler (0 oder >1 Antworten)
        if (selectedCheckboxes.length === 0) {
          unansweredCount++;
        } else if (selectedCheckboxes.length > 1) {
          tooManyAnswersCount++;
        } else {
          // Wenn genau eine Antwort gegeben wurde, prüfe auf Korrektheit
          const selectedValue = selectedCheckboxes[0].value;
          const correctAnswer = churchQuizData[index].answers.find(
            (ans) => ans.isCorrect
          ).text;

          if (selectedValue !== correctAnswer) {
            incorrectCount++;
          }
        }
      });

      // Baue die Fehlermeldungen zusammen
      const errorMessages = [];
      if (unansweredCount > 0) {
        errorMessages.push(
          `Du hast ${unansweredCount} Frage(n) nicht beantwortet.`
        );
      }
      if (tooManyAnswersCount > 0) {
        errorMessages.push(
          `Du hast bei ${tooManyAnswersCount} Frage(n) zu viele Antworten ausgewählt.`
        );
      }
      if (incorrectCount > 0) {
        errorMessages.push(
          `Leider war(en) ${incorrectCount} Antwort(en) falsch.`
        );
      }

      // Entscheide, ob Erfolg oder Fehler angezeigt wird
      if (errorMessages.length > 0) {
        resultContainer.innerHTML = errorMessages.join("<br>");
        resultContainer.className = "quiz-result-message error";
      } else {
        // Nur wenn es absolut keine Fehler gibt
        resultContainer.textContent =
          "Glückwunsch! Alle Antworten sind richtig.";
        resultContainer.className = "quiz-result-message success";
        videoContainer.classList.remove("hidden"); // Zeige das Video
      }
    });
  }
});
