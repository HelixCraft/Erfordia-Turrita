# Website-Struktur & Logik – Erfordia Turrita

## Übersicht

Eine Website über Erfurter Kirchen und Türme mit dynamischer Detailseiten-Generierung.

---

## 1. Homepage (index.html)

### Aufbau

- **Header**: Titel "Erfordia Turrita" + Untertitel
- **Intro-Sektion**: Willkommenstext
- **Kirchen-Grid**: 10 Kirchen als klickbare Karten (3-4 Spalten, responsive)
- **Footer**: Copyright-Hinweis

### Funktionsweise

- Jede Karte verlinkt auf `kirche.html?id=[kirchenname]`
- Fade-in Animation beim Laden (gestaffelt mit Delay)
- Hover-Effekt: Karte hebt sich an und Schatten verstärkt sich

### Kirchen-Liste

thomaskirche, christuskirche, johannisturm, kaufmannskirche, agidienkirche, reglerkirche, barfuesserkirche, wigbertikirche, bartholomaeusturm, predigerkirche

---

## 2. Detailseite (kirche.html)

### Dynamisches System

Die Seite ist ein **Template**, das per JavaScript mit Daten aus `data.js` befüllt wird.

### Aufbau

1. **Header**: Identisch zur Homepage
2. **Kirchenname**: Dynamisch als `<h2>`
3. **Banner-Bild**: Großes Bild (300px Höhe, volle Breite)
4. **Zweispalten-Layout** (umgekehrte Reihenfolge):
   - **Rechts**: Seitliche Bildergalerie (1-2 Bilder, klickbar für Lightbox)
   - **Links**: Infotext (mehrere Absätze)
5. **Quiz-Formular**: 3 Multiple-Choice-Fragen mit Checkboxen
6. **Video-Container**: YouTube-Embed (versteckt bis Quiz gelöst)
7. **Zurück-Link**: Zur Homepage

### JavaScript-Logik (script.js)

#### Seiteninitialisierung

```
1. URL-Parameter auslesen: ?id=kirchenname
2. Daten aus churchData[id] holen
3. Seite dynamisch befüllen:
   - Titel setzen
   - Banner-Bild einfügen
   - Seitliche Bilder generieren
   - Infotext als Absätze einfügen
   - Quiz-Fragen dynamisch erstellen
   - Video-URL setzen
```

#### Lightbox-Funktion

- Klick auf Seitenbild → Lightbox öffnet sich
- Bild wird vergrößert angezeigt
- Schließen via X-Button oder Klick auf Hintergrund

#### Quiz-Validierung

```
Bei Submit:
1. Prüfe jede Frage:
   - 0 Antworten → Fehler: "nicht beantwortet"
   - >1 Antwort → Fehler: "zu viele Antworten"
   - 1 falsche Antwort → Fehler: "falsch"

2. Ergebnis anzeigen:
   - Fehler vorhanden → Rote Fehlermeldung
   - Alles korrekt → Grüne Erfolgsmeldung + Video einblenden
```

---

## 3. Datenstruktur (data.js)

### Format pro Kirche

```javascript
kirchenname: {
  name: "Anzeigename",
  infotext: "Mehrzeiliger Text mit \n",
  images: {
    banner: "pfad/zum/banner.png",
    side: ["bild1.png", "bild2.png"]
  },
  quiz: [
    {
      question: "Frage?",
      answers: [
        { text: "Antwort A", isCorrect: false },
        { text: "Antwort B", isCorrect: true },
        { text: "Antwort C", isCorrect: false }
      ]
    }
    // 2 weitere Fragen
  ],
  videoUrl: "https://youtube.com/embed/..."
}
```

---

## 4. Styling (style.css)

### Responsive Design

- **Desktop**: Grid mit 3-4 Spalten, zweispaltiges Layout
- **Mobile (<768px)**:
  - Grid wird einspaltiger
  - Detailseite: Text über Bilder
  - Seitenbilder nebeneinander (2 pro Reihe)

### Animationen

- Fade-in beim Laden
- Hover-Effekte auf Karten
- Lightbox-Einblendung

### Farbschema

- Primary: #333 (dunkelgrau)
- Accent: #007bff (blau)
- Success: grün (#28a745)
- Error: rot (#721c24)

---

## 5. Technische Details

### Dateistruktur

```
/
├── index.html          (Homepage)
├── kirche.html         (Template für alle Kirchen)
├── script.js           (Gesamte Logik)
├── data.js             (Alle Kirchendaten)
├── style.css           (Komplettes Styling)
├── images/             (Bilder)
└── kirchenseiten/      (Statische HTML-Dateien, nicht verwendet)
```

### Wichtig

Die Dateien im Ordner `kirchenseiten/` sind **statische Versionen** und werden **nicht aktiv genutzt**. Das System arbeitet mit der dynamischen `kirche.html` + URL-Parametern.

### Ladevorgang

1. HTML lädt
2. `data.js` lädt (Daten verfügbar)
3. `script.js` lädt und führt aus
4. DOMContentLoaded → Seite wird befüllt
