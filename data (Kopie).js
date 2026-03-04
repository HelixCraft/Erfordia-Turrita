const churchData = {
  thomaskirche: {
    name: "Thomaskirche",
    infotext: `Die Thomaskirche wurde erstmals 1282 urkundlich erwähnt und in der ersten Hälfte des 14. Jahrhunderts im gotischen Stil neu erbaut. Sie befindet sich in einer Parkanlage an der Schillerstraße. Da die Gemeinde im Laufe der Zeit stark gewachsen war, wurde Anfang des 20. Jahrhunderts ein Neubau errichtet, der am 15. Juni 1902 geweiht wurde. Am 31. März 1945 wurde die Kirche durch Bomben bis auf die Außenmauern und den Turm zerstört. Sofort nach Kriegsende begann die Gemeinde mit dem Wiederaufbau, und 1950 konnte die Thomaskirche feierlich neu eingeweiht werden. Sie ist heute eine evangelisch-unierte Kirche und bekannt für ihren spätgotischen Flügelaltar von 1445/50 als zentralen Blickpunkt im Altarraum sowie für ihre hervorragende Akustik, die sie auch als Konzertort beliebt macht. Die Thomaskirche ist eine einschiffige kreuzförmige Kirche im Stil der Neugotik mit einer Länge von 51,2 Metern und einer Breite von 28,0 Metern. Der Kirchturm im Süden erreicht eine Höhe von 72 Metern und gehört zu den höchsten unter den Erfurter Kirchen.`,
    images: {
      banner: "images/kirchen-page-banner/Thomaskirche_Erfurt_bild_2.jpg",
      side: [
        "images/kirchen-page-image-one-and-two/Thomaskirche_Erfurt_bild_1.jpg",
        "images/kirchen-page-image-one-and-two/Thomaskirche_Erfurt_bild_10.jpg",
      ],
    },
    quiz: [
      {
        question: "Wann wurde die Thomaskirche erstmals urkundlich erwähnt?",
        answers: [
          { text: "1282", isCorrect: true },
          { text: "1445", isCorrect: false },
          { text: "1902", isCorrect: false },
        ],
      },
      {
        question: "Wann wurde der Neubau der Thomaskirche geweiht?",
        answers: [
          { text: "1850", isCorrect: false },
          { text: "1902", isCorrect: true },
          { text: "1950", isCorrect: false },
        ],
      },
      {
        question: "Wie hoch ist der Kirchturm der Thomaskirche?",
        answers: [
          { text: "51 Meter", isCorrect: false },
          { text: "62 Meter", isCorrect: false },
          { text: "72 Meter", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gPQcHVjT9XE",
  },
  christuskirche: {
    name: "Christuskirche",
    infotext: `Die Christuskirche in Erfurt ist ein bedeutendes evangelisch-lutherisches Gotteshaus und ein markantes architektonisches Zeugnis der wilhelminischen Ära in Thüringen. Der Bau der Kirche erfolgte zwischen 1901 und 1903 nach den Plänen des Architekten Eduard Fritze. Stilistisch ist das Gebäude der Neugotik zuzuordnen, was sich besonders in seinem schlanken, weithin sichtbaren Turm und den dekorativen Elementen widerspiegelt. Im Inneren zeichnet sich die Kirche durch eine relativ gut erhaltene Originalausstattung aus der Bauzeit aus. Zu den Besonderheiten zählen die Buntglasfenster mit ihren Darstellungen biblischer Motive und die Orgel, die eine lange musikalische Tradition in der Gemeinde pflegt. Die Christuskirche liegt gut erreichbar in der Nähe des Stadtzentrums von Erfurt und ist heute das Zentrum einer aktiven Kirchengemeinde, die vielfältige Gottesdienste und kulturelle Angebote organisiert.`,
    images: {
      banner: "images/kirchen-page-banner/Christuskirche_Erfurt_bild_9.jpg",
      side: [
        "images/kirchen-page-image-one-and-two/Christuskirche_Erfurt_bild_1.jpg",
        "images/kirchen-page-image-one-and-two/Christuskirche_Erfurt_bild_3.jpg",
      ],
    },
    quiz: [
      {
        question: "Wann wurde die Christuskirche erbaut?",
        answers: [
          { text: "1850-1852", isCorrect: false },
          { text: "1901-1903", isCorrect: true },
          { text: "1920-1922", isCorrect: false },
        ],
      },
      {
        question: "Welchem Baustil ist die Christuskirche zuzuordnen?",
        answers: [
          { text: "Barock", isCorrect: false },
          { text: "Romanik", isCorrect: false },
          { text: "Neugotik", isCorrect: true },
        ],
      },
      {
        question: "Wer war der Architekt der Christuskirche?",
        answers: [
          { text: "Eduard Fritze", isCorrect: true },
          { text: "Max Brockert", isCorrect: false },
          { text: "Karl Friedrich Schinkel", isCorrect: false },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/sq5IJ36W4X0",
  },
  johannisturm: {
    name: "Johannisturm",
    infotext: `Der Johannisturm ist der letzte Überrest der alten Johanniskirche. Heute dient er als Aussichtsturm.`,
    images: {
      banner: "images/kirchen-page-banner/Johannisturm_Erfurt_bild_5.jpg",
      side: [
        "images/kirchen-page-image-one-and-two/Johannisturm_Erfurt_bild_2.jpg",
        "images/kirchen-page-image-one-and-two/Johannisturm_Erfurt_bild_9.jpg",
      ],
    },
    quiz: [
      {
        question: "Wozu gehörte der Johannisturm ursprünglich?",
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
          { text: "Ein Glockenspiel", isCorrect: true },
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
      banner: "images/kirchen-page-banner/Kaufmannskirche_Erfurt_bild_4.jpg",
      side: [
        "images/kirchen-page-image-one-and-two/Kaufmannskirche_Erfurt_bild_3.jpg",
        "images/kirchen-page-image-one-and-two/Kaufmannskirche_Erfurt_bild_6.jpg",
      ],
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
          { text: "Drei", isCorrect: false },
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
    infotext: `Die Ägidienkirche wurde im Jahr 1110 erwähnt. Im Jahr 1420 wurde die Brücke mitsamt der Kirche zerstört. Die Brücke und die Kirche wurden dann aus Stein 1325 wiedererrichtet und weiterlebt. Das Erdgeschoss war im Mittelalter eine offene Halle und diente als Verkaufsraum. Sie ist die älteste von Methodisten benutzte Kirche der Welt. Die Ägidienkirche ist ein gotischer Bau, dessen spätgotischer Altarraum sich in einem Erker befindet. Ein Erker ist ein Vorbau an der Fassade der Kirche, welcher über ein oder auch mehrere Geschosse reichen kann.`,
    images: {
      banner: "images/kirchen-page-banner/Ägidienkirche_Erfurt_bild_5.jpg",
      side: [
        "images/kirchen-page-image-one-and-two/Ägidienkirche_Erfurt_bild_1.jpg",
        "images/kirchen-page-image-one-and-two/Ägidienkirche_Erfurt_bild_7.jpg",
      ],
    },
    quiz: [
      {
        question: "Wann wurde die Ägidienkirche erstmals erwähnt?",
        answers: [
          { text: "1110", isCorrect: true },
          { text: "1325", isCorrect: false },
          { text: "1420", isCorrect: false },
        ],
      },
      {
        question:
          "Wann wurden die Brücke und Kirche aus Stein wiedererrichtet?",
        answers: [
          { text: "1110", isCorrect: false },
          { text: "1325", isCorrect: true },
          { text: "1420", isCorrect: false },
        ],
      },
      {
        question: "Welchem Baustil gehört die Ägidienkirche an?",
        answers: [
          { text: "Romanik", isCorrect: false },
          { text: "Barock", isCorrect: false },
          { text: "Gotik", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  reglerkirche: {
    name: "Reglerkirche",
    infotext: `Die Reglerkirche (auch Augustinuskirche genannt) ist eine Kirche in der Altstadt von Erfurt und dient einer evangelischen Gemeinde als Gottesdienststätte. Der Bau der romanischen Reglerkirche wurde 1130 von den regulierten Augustiner-Chorherren begonnen; die Fertigstellung erfolgte im Jahr 1238. Die 1813 beginnende zweckentfremdete Nutzung der Kirche führte zum Verfall und zu ihrer Schließung im Jahr 1845. Von 1857 bis 1860 wurde sie umfassend rekonstruiert. In der DDR galt sie als ein Zentrum für Kirchenmusik in Erfurt. Kunsthistorisch bedeutsam ist vor allem der spätgotische Flügelaltar, erschaffen von den namentlich nicht bekannten "Meistern des Regleraltars" um 1465 – er gilt als einer der qualitätsvollsten und besterhaltenen Altäre dieser Epoche in Mitteldeutschland. Besonders auffällig sind die zwei verschiedenartigen Türme: Der eine weist noch auf den romanischen Ursprung der Kirche zurück und wirkt mit seinen kleinen Lichtöffnungen und dem gedrungenen Spitzdach überaus wuchtig. Der andere Turm gibt sich barock – er musste im 18. Jahrhundert abgetragen und 1743 in barocker Form neu errichtet werden.`,
    images: {
      banner: "images/kirchen-page-banner/Reglerkirche_Erfurt_bild_6.jpg",
      side: [
        "images/kirchen-page-image-one-and-two/Reglerkirche_Erfurt_bild_4.jpg",
        "images/kirchen-page-image-one-and-two/Reglerkirche_Erfurt_bild_7.jpg",
      ],
    },
    quiz: [
      {
        question: "Wann wurde mit dem Bau der Reglerkirche begonnen?",
        answers: [
          { text: "1130", isCorrect: true },
          { text: "1238", isCorrect: false },
          { text: "1465", isCorrect: false },
        ],
      },
      {
        question: "Welcher Orden begann den Bau der Reglerkirche?",
        answers: [
          { text: "Dominikaner", isCorrect: false },
          { text: "Augustiner-Chorherren", isCorrect: true },
          { text: "Franziskaner", isCorrect: false },
        ],
      },
      {
        question: "Wie viele Türme hat die Reglerkirche?",
        answers: [
          { text: "Einen", isCorrect: false },
          { text: "Zwei", isCorrect: true },
          { text: "Drei", isCorrect: false },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  barfuesserkirche: {
    name: "Barfüßerkirche",
    infotext: "Platzhaltertext für die Barfüßerkirche.",
    images: {
      banner: "images/kirchen-page-banner/Barfüßerkirche_Erfurt_bild_6.jpg",
      side: [
        "images/kirchen-page-image-one-and-two/Barfüßerkirche_Erfurt_bild_4.jpg",
        "images/kirchen-page-image-one-and-two/Barfüßerkirche_Erfurt_bild_5.jpg",
      ],
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
        question: "Wann wurde die Kirche zerstört?",
        answers: [
          { text: "Im Mittelalter", isCorrect: false },
          { text: "1945", isCorrect: true },
          { text: "1989", isCorrect: false },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  wigbertikirche: {
    name: "Wigbertikirche",
    infotext: "Platzhaltertext für die Wigbertikirche.",
    images: {
      banner: "images/kirchen-page-banner/Wigbertikirche_Erfurt_bild_3.jpg",
      side: [
        "images/kirchen-page-image-one-and-two/Wigbertikirche_Erfurt_bild_1.jpg",
        "images/kirchen-page-image-one-and-two/Wigbertikirche_Erfurt_bild_10.jpg",
      ],
    },
    quiz: [
      {
        question: "Welchem Baustil gehört die Wigbertikirche an?",
        answers: [
          { text: "Gotik", isCorrect: true },
          { text: "Barock", isCorrect: false },
          { text: "Romanik", isCorrect: false },
        ],
      },
      {
        question: "In welchem Stadtteil liegt die Wigbertikirche?",
        answers: [
          { text: "Altstadt", isCorrect: true },
          { text: "Andreasvorstadt", isCorrect: false },
          { text: "Brühlervorstadt", isCorrect: false },
        ],
      },
      {
        question: "Welche Funktion hat die Kirche heute?",
        answers: [
          { text: "Museum", isCorrect: false },
          { text: "Gotteshaus", isCorrect: true },
          { text: "Konzerthalle", isCorrect: false },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  bartholomaeusturm: {
    name: "Bartholomäusturm",
    infotext: `Der Bartholomäusturm gehört zu zahlreichen mittelalterlichen Kirchen Erfurts und zu den ältesten Erfurter Pfarrkirchen. Er war auch eine Hofkirche, deren Hauskapelle sich in der benachbarten Kirche befand. Sie soll mindestens zwölf Altäre besessen haben. 1571 wurde die Kirche wegen Baufälligkeit geschlossen. 1660 vernichtete ein Brand den Bau und 1715 riss man die letzten baufälligen Mauerreste ab. Der Turm unterscheidet sich von anderen Türmen durch sein "schweres Innenleben". Am 30. Jahrestag der Gründung der DDR 1979 wurde in das Obergeschoss ein Carillon mit 60 Bronzeglocken eingebaut. Die größte Glocke wiegt 2.383 kg, die leichteste 10 kg. Das Carillon hat einen Tonumfang von 5 Oktaven. Der Turm ist im gotischen Stil erbaut.`,
    images: {
      banner: "images/kirchen-page-banner/Bartholomäusturm_Erfurt_bild_1.jpg",
      side: [
        "images/kirchen-page-image-one-and-two/Bartholomäusturm_Erfurt_bild_6.jpg",
        "images/kirchen-page-image-one-and-two/Bartholomäusturm_Erfurt_bild_7.jpg",
      ],
    },
    quiz: [
      {
        question: "Wann wurde die Kirche wegen Baufälligkeit geschlossen?",
        answers: [
          { text: "1571", isCorrect: true },
          { text: "1660", isCorrect: false },
          { text: "1715", isCorrect: false },
        ],
      },
      {
        question: "Wann wurde das Carillon im Turm eingebaut?",
        answers: [
          { text: "1945", isCorrect: false },
          { text: "1979", isCorrect: true },
          { text: "1990", isCorrect: false },
        ],
      },
      {
        question: "Wie viele Bronzeglocken hat das Carillon?",
        answers: [
          { text: "30", isCorrect: false },
          { text: "45", isCorrect: false },
          { text: "60", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/gDeIQrP2MiY",
  },
  predigerkirche: {
    name: "Predigerkirche",
    infotext: `Die Geschichte der Predigerkirche in Erfurt beginnt im Jahr 1276 mit der Gründung des Dominikanerklosters und dem Baubeginn der Kirche. Sie wurde als gotische Hallenkirche errichtet und entwickelte sich zu einem der bedeutendsten Dominikanerklöster Mitteldeutschlands. Ein historischer Höhepunkt war die Priesterweihe Martin Luthers im Jahr 1507. Im Zuge der Reformation wurde das Kloster aufgehoben und die Kirche ging in städtisches Eigentum über. Es folgte eine Phase der Profanierung, in der die Kirche unter anderem als Lager genutzt wurde. Im 19. Jahrhundert erfuhr das Bauwerk eine Wiederentdeckung seines historischen und architektonischen Werts, woraufhin umfassende Restaurierungsarbeiten folgten. Heute ist sie die Evangelische Predigerkirche und ein bedeutendes Denkmal und Veranstaltungsort. Sie ist bekannt für ihre beeindruckende gotische Architektur mit schlanken Säulen und hohen Gewölben, die wertvollen Bestände der ehemaligen Klosterbibliothek, ihre bekannten Glocken (wie die "Osanna") und die zahlreichen historischen Kunstwerke und Epitaphien in ihrem Inneren.`,
    images: {
      banner: "images/kirchen-page-banner/Predigerkirche_Erfurt_bild_1.jpg",
      side: [
        "images/kirchen-page-image-one-and-two/Predigerkirche_Erfurt_bild_2.jpg",
        "images/kirchen-page-image-one-and-two/Predigerkirche_Erfurt_bild_10.jpg",
      ],
    },
    quiz: [
      {
        question: "Wann begann der Bau der Predigerkirche?",
        answers: [
          { text: "1276", isCorrect: true },
          { text: "1507", isCorrect: false },
          { text: "1325", isCorrect: false },
        ],
      },
      {
        question:
          "Welcher bedeutende Reformator wurde hier 1507 zum Priester geweiht?",
        answers: [
          { text: "Johannes Calvin", isCorrect: false },
          { text: "Martin Luther", isCorrect: true },
          { text: "Meister Eckhart", isCorrect: false },
        ],
      },
      {
        question: "Welchem Orden gehörte die Predigerkirche ursprünglich an?",
        answers: [
          { text: "Franziskaner", isCorrect: false },
          { text: "Benediktiner", isCorrect: false },
          { text: "Dominikaner", isCorrect: true },
        ],
      },
    ],
    videoUrl: "https://www.youtube.com/embed/vV4iowg719I",
  },
};
