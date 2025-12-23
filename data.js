const churchData = {
  thomaskirche: {
    name: "Thomaskirche",
    infotext: `Dies ist der Infotext für die Thomaskirche. Hier stehen spezifische Details zur Geschichte und Architektur. Der neugotische Bau wurde Ende des 19. Jahrhunderts errichtet.`,
    images: {
      banner: "images/test1.png",
      side: ["images/test1.png", "images/test1.png"],
    },
    quiz: [
      {
        question: "In welchem Stil wurde die Thomaskirche erbaut?",
        answers: [
          { text: "Gotik", isCorrect: false },
          { text: "Neugotik", isCorrect: true },
          { text: "Barock", isCorrect: false },
        ],
      },
      {
        question: "Wann fand die Grundsteinlegung des heutigen Baus statt?",
        answers: [
          { text: "1482", isCorrect: false },
          { text: "1650", isCorrect: false },
          { text: "1890", isCorrect: true },
        ],
      },
      {
        question: "Welches Instrument ist in der Kirche besonders bekannt?",
        answers: [
          { text: "Die Orgel", isCorrect: true },
          { text: "Das Glockenspiel", isCorrect: false },
          { text: "Die Harfe", isCorrect: false },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  christuskirche: {
    name: "Christuskirche",
    infotext: `Platzhaltertext für die Christuskirche. Sie ist bekannt für ihre beeindruckende Kuppel und die monumentale Bauweise.`,
    images: {
      banner: "images/test1.png",
      side: ["images/test1.png", "images/test1.png"],
    },
    quiz: [
      {
        question: "Was ist ein markantes Merkmal der Christuskirche?",
        answers: [
          { text: "Ein Holzturm", isCorrect: false },
          { text: "Eine große Kuppel", isCorrect: true },
          { text: "Bunte Mosaike", isCorrect: false },
        ],
      },
      {
        question: "In welchem Stadtteil von Erfurt steht die Christuskirche?",
        answers: [
          { text: "Altstadt", isCorrect: false },
          { text: "Brühlervorstadt", isCorrect: true },
          { text: "Andreasvorstadt", isCorrect: false },
        ],
      },
      {
        question: "Welcher Baustoff dominiert die Fassade?",
        answers: [
          { text: "Backstein", isCorrect: false },
          { text: "Holz", isCorrect: false },
          { text: "Sandstein", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY", // Beispiel-URL
  },
  johannisturm: {
    name: "Johannisturm",
    infotext: `Der Johannisturm ist der letzte Überrest der alten Johanniskirche. Heute dient er als Aussichtsturm.`,
    images: {
      banner: "images/test1.png",
      side: ["images/test1.png"],
    },
    quiz: [
      {
        question: "Wozu gehört der Johannisturm ursprünglich?",
        answers: [
          { text: "Zur Johanniskirche", isCorrect: true },
          { text: "Zur Stadtmauer", isCorrect: false },
          { text: "Zu einem Kloster", isCorrect: false },
        ],
      },
      {
        question: "Wie hoch ist der Turm ungefähr?",
        answers: [
          { text: "25 Meter", isCorrect: false },
          { text: "45 Meter", isCorrect: true },
          { text: "65 Meter", isCorrect: false },
        ],
      },
      {
        question: "Was befindet sich heute im Turm?",
        answers: [
          { text: "Ein Café", isCorrect: false },
          { text: "Ein Glockenspiel (Carillon)", isCorrect: true },
          { text: "Ein Museum", isCorrect: false },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  // ... (Die restlichen Kirchen folgen demselben Muster)
  kaufmannskirche: {
    name: "Kaufmannskirche",
    infotext: "Platzhaltertext für die Kaufmannskirche.",
    images: {
      banner: "images/test1.png",
      side: ["images/test1.png", "images/test1.png"],
    },
    quiz: [
      {
        question: "Wessen Eltern heirateten in der Kaufmannskirche?",
        answers: [
          { text: "Johann Wolfgang von Goethe", isCorrect: false },
          { text: "Friedrich Schiller", isCorrect: false },
          { text: "Johann Sebastian Bach", isCorrect: true },
        ],
      },
      {
        question: "Wie viele Türme hat die Kaufmannskirche?",
        answers: [
          { text: "Einen", isCorrect: false },
          { text: "Zwei", isCorrect: true },
          { text: "Keinen", isCorrect: false },
        ],
      },
      {
        question: "An welchem zentralen Platz liegt die Kirche?",
        answers: [
          { text: "Domplatz", isCorrect: false },
          { text: "Fischmarkt", isCorrect: false },
          { text: "Anger", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  agidienkirche: {
    name: "Ägidienkirche",
    infotext: "Platzhaltertext für die Ägidienkirche.",
    images: {
      banner: "images/test1.png",
      side: ["images/test1.png", "images/test1.png"],
    },
    quiz: [
      {
        question: "Was ist das Besondere an der Lage der Ägidienkirche?",
        answers: [
          {
            text: "Sie ist die einzige Kirche auf der Krämerbrücke",
            isCorrect: true,
          },
          { text: "Sie steht auf dem Petersberg", isCorrect: false },
          { text: "Sie ist eine unterirdische Kirche", isCorrect: false },
        ],
      },
      {
        question: "Welche Funktion hat der Turm heute?",
        answers: [
          { text: "Wohnung des Pfarrers", isCorrect: false },
          { text: "Aussichtsturm", isCorrect: true },
          { text: "Lagerraum", isCorrect: false },
        ],
      },
      {
        question: "Welche Farbe hat der Turm?",
        answers: [
          { text: "Weiß", isCorrect: false },
          { text: "Grau", isCorrect: false },
          { text: "Rot", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  reglerkirche: {
    name: "Reglerkirche",
    infotext: "Platzhaltertext für die Reglerkirche.",
    images: {
      banner: "images/test1.png",
      side: ["images/test1.png", "images/test1.png"],
    },
    quiz: [
      {
        question: "Welcher Baustil ist bei der Reglerkirche vorherrschend?",
        answers: [
          { text: "Romanik und Gotik", isCorrect: true },
          { text: "Nur Barock", isCorrect: false },
          { text: "Klassizismus", isCorrect: false },
        ],
      },
      {
        question: "Was befindet sich im Inneren der Kirche?",
        answers: [
          { text: "Ein berühmter Flügelaltar", isCorrect: true },
          { text: "Eine Königsgruft", isCorrect: false },
          { text: "Ein Schwimmbecken", isCorrect: false },
        ],
      },
      {
        question: "Wie viele Türme besitzt die Kirche?",
        answers: [
          { text: "Zwei", isCorrect: false },
          { text: "Keinen", isCorrect: false },
          { text: "Einen", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  barfuesserkirche: {
    name: "Barfüßerkirche",
    infotext: "Platzhaltertext für die Barfüßerkirche.",
    images: {
      banner: "images/test1.png",
      side: ["images/test1.png", "images/test1.png"],
    },
    quiz: [
      {
        question: "In welchem Zustand befindet sich die Barfüßerkirche heute?",
        answers: [
          { text: "Vollständig restauriert", isCorrect: false },
          { text: "Als Ruine erhalten", isCorrect: true },
          { text: "Abgerissen", isCorrect: false },
        ],
      },
      {
        question: "Was war die Kirche ursprünglich?",
        answers: [
          { text: "Eine Klosterkirche der Franziskaner", isCorrect: true },
          { text: "Eine private Kapelle", isCorrect: false },
          { text: "Ein Getreidespeicher", isCorrect: false },
        ],
      },
      {
        question: "Wodurch wurde die Kirche zerstört?",
        answers: [
          { text: "Ein Erdbeben", isCorrect: false },
          { text: "Einen Luftangriff 1945", isCorrect: true },
          { text: "Einen Brand im Mittelalter", isCorrect: false },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  wigbertikirche: {
    name: "Wigbertikirche",
    infotext: "Platzhaltertext für die Wigbertikirche.",
    images: {
      banner: "images/test1.png",
      side: ["images/test1.png", "images/test1.png"],
    },
    quiz: [
      {
        question: "Frage 1 für Wigbertikirche?",
        answers: [
          { text: "Antwort A", isCorrect: true },
          { text: "Antwort B", isCorrect: false },
          { text: "Antwort C", isCorrect: false },
        ],
      },
      {
        question: "Frage 2 für Wigbertikirche?",
        answers: [
          { text: "Antwort D", isCorrect: false },
          { text: "Antwort E", isCorrect: true },
          { text: "Antwort F", isCorrect: false },
        ],
      },
      {
        question: "Frage 3 für Wigbertikirche?",
        answers: [
          { text: "Antwort G", isCorrect: false },
          { text: "Antwort H", isCorrect: false },
          { text: "Antwort I", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  bartholomaeusturm: {
    name: "Bartholomäusturm",
    infotext: "Platzhaltertext für den Bartholomäusturm.",
    images: {
      banner: "images/test1.png",
      side: ["images/test1.png", "images/test1.png"],
    },
    quiz: [
      {
        question: "Frage 1 für Bartholomäusturm?",
        answers: [
          { text: "Antwort A", isCorrect: true },
          { text: "Antwort B", isCorrect: false },
          { text: "Antwort C", isCorrect: false },
        ],
      },
      {
        question: "Frage 2 für Bartholomäusturm?",
        answers: [
          { text: "Antwort D", isCorrect: false },
          { text: "Antwort E", isCorrect: true },
          { text: "Antwort F", isCorrect: false },
        ],
      },
      {
        question: "Frage 3 für Bartholomäusturm?",
        answers: [
          { text: "Antwort G", isCorrect: false },
          { text: "Antwort H", isCorrect: false },
          { text: "Antwort I", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  predigerkirche: {
    name: "Predigerkirche",
    infotext: "Platzhaltertext für die Predigerkirche.",
    images: {
      banner: "images/test1.png",
      side: ["images/test1.png", "images/test1.png"],
    },
    quiz: [
      {
        question: "Frage 1 für Predigerkirche?",
        answers: [
          { text: "Antwort A", isCorrect: true },
          { text: "Antwort B", isCorrect: false },
          { text: "Antwort C", isCorrect: false },
        ],
      },
      {
        question: "Frage 2 für Predigerkirche?",
        answers: [
          { text: "Antwort D", isCorrect: false },
          { text: "Antwort E", isCorrect: true },
          { text: "Antwort F", isCorrect: false },
        ],
      },
      {
        question: "Frage 3 für Predigerkirche?",
        answers: [
          { text: "Antwort G", isCorrect: false },
          { text: "Antwort H", isCorrect: false },
          { text: "Antwort I", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
};
