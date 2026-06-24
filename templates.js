// ============================================================
// DW Post-Generator – Vorlagen (Templates)
// Wird per <script src="templates.js"> geladen und stellt
// window.DW_TEMPLATES bereit. Funktioniert lokal (file://)
// UND auf GitHub Pages (http) – kein fetch nötig.
//
// Neue Vorlage hinzufügen: einfach einen weiteren Eintrag mit
// { id, name, description, project } ergänzen. "project" hat
// dasselbe Format wie eine gespeicherte Projekt-JSON
// (font, fontSize, lineH, showBar/Swipe/Q, caption, slides).
// ============================================================
window.DW_TEMPLATES = [
  {
    id: "standard-sicher",
    name: "Standard · „Ich war mir sicher“",
    description: "Die Ausgangs-Vorlage: 5 Inhalts-Slides, Profil, Abschluss.",
    project: {
      font: "'Cormorant Garamond', serif",
      fontSize: 56,
      lineH: 1.34,
      showBar: true, showSwipe: true, showQ: true,
      caption: "Wir sehen eine Situation nie ungefiltert – immer nur unsere Version davon.\n\nEntwicklung fängt da an, wo ich bemerke, womit ich gerade schaue.\n\nBei welchem Thema bist du dir so sicher, dass du deine eigene Sicht kaum noch bemerkst?\n\n#vertikaleEntwicklung #Selbstreflexion #Perspektive #Entwicklung",
      slides: [
        { type: "content", text: "Ich war mir *sicher*\nwie das Gespräch gelaufen war.\n\nMein Gegenüber auch.\nNur völlig anders." },
        { type: "content", text: "Lange hielt ich das\nfür ein Missverständnis.\nHeute weiß ich:\nEs ist der *Normalfall*.\n\nIch erlebe eine Situation\nnie ungefiltert.\nIch sehe immer nur\nmeine Version davon." },
        { type: "content", text: "Die eigene Sicht\nfühlt sich\nnicht wie eine Sicht an.\n\nSie fühlt sich wie\ndie *Wirklichkeit* an." },
        { type: "content", text: "Das meiste bearbeiten wir\ninnerhalb dieser Sicht:\nbessere Lösung, neuer Plan,\nmehr Disziplin.\nBis nicht mehr das\nProblem das Problem ist…\n\nsondern die *Perspektive*,\naus der wir draufschauen." },
        { type: "content", text: "Da fängt für mich\n*Entwicklung* an.\n\nNicht mehr wissen.\nSondern erkennen,\nwomit man sieht.\n\n… und dass es\nauch anders ginge." },
        { type: "intro", heading: "Ich bin *Dennis*", text: "Ich arbeite mit Menschen an\nden Stellen, an denen ein\nProblem keine bessere\nLösung mehr verlangt…\n\n… sondern eine andere\nSicht auf sich selbst." },
        { type: "cta", text: "Bei welchem Thema bist du\ndir gerade so *sicher*,\ndass du deine\neigene Sicht\nkaum noch bemerkst?", footer: "Folge mir für mehr Gedanken über Muster,\nEntwicklung und neue Sichtweisen." }
      ]
    }
  },
  {
    id: "einordnen-vokabeln",
    name: "Vertikale Entwicklung · „Einordnen“",
    description: "Mehr Wissen ist horizontal, anders sehen ist vertikal.",
    project: {
      font: "'Cormorant Garamond', serif",
      fontSize: 56,
      lineH: 1.34,
      showBar: true, showSwipe: true, showQ: true,
      caption: "Mehr wissen ist horizontal. Anders sehen ist vertikal.\n\nIch dachte lange, ein neues Modell sei schon Entwicklung – bis mich jemand fragte, aus welcher Stufe ich eigentlich urteile.\n\nWo ertappst du dich, wie du andere souverän einordnest – und dich selbst dabei vergisst?\n\n#vertikaleEntwicklung #Selbstreflexion #Entwicklung #Coaching",
      slides: [
        { type: "content", text: "Ich war mir *sicher*:\nIch hatte gerade\nein Level-up gemacht.\n\nImmerhin hatte ich\ndrei Bücher über\nEntwicklungsstufen gelesen." },
        { type: "content", text: "Ab da konnte ich\njeden im Raum\nsofort *einordnen*.\n\nSehr praktisch:\nDie Probleme lagen\nplötzlich immer\nbei den anderen." },
        { type: "content", text: "Bis jemand fragte,\naus welcher Stufe\nich das eigentlich\n*beurteile*.\n\nStille.\nMein schönes Modell\nhatte für diese Frage\nkeinen Platz." },
        { type: "content", text: "Ich war nicht\nhöher gestiegen.\nIch hatte nur mehr\n*Vokabeln*.\n\nMehr wissen\nist horizontal.\nAnders sehen\nist vertikal." },
        { type: "content", text: "*Entwicklung* beginnt\nnicht da, wo ich\nandere einordnen kann.\n\nSondern da, wo ich\nbemerke, womit\nich selbst gerade\nschaue." },
        { type: "intro", heading: "Ich bin *Dennis*", text: "Ich arbeite mit Menschen\nan den Stellen, an denen\ndas nächste Modell\nnicht weiterhilft…\n\n… sondern eine andere\nSicht auf sich selbst." },
        { type: "cta", text: "Wo ertappst du dich,\nwie du andere\nso souverän *einordnest* —\nund dich selbst\ndabei vergisst?", footer: "Folge mir für mehr Gedanken über Muster,\nEntwicklung und neue Sichtweisen." }
      ]
    }
  },
  {
    id: "einfuehrung-reflex",
    name: "Vertikale Entwicklung · „Einführung“",
    description: "Vom Reflex zum Standpunkt daneben – was dich gestern hatte, kannst du heute halten.",
    project: {
      font: "'Cormorant Garamond', serif",
      fontSize: 56,
      lineH: 1.34,
      showBar: true, showSwipe: true, showQ: true,
      caption: "Manchmal sitzt ein Satz – und in dir will nur eins: dich rechtfertigen.\n\nVertikale Entwicklung heißt nicht, weniger zu reagieren. Sondern ein Du zu entwickeln, das daneben stehen kann.\n\nWas dich gestern hatte, kannst du heute halten.\n\n#vertikaleEntwicklung #Selbstführung #Entwicklung #Achtsamkeit",
      slides: [
        { type: "content", text: "Jemand sagt dir\neinen Satz,\nder sitzt.\n\nDein Puls steigt,\nund in dir ist nur\nein Impuls:\n*rechtfertigen*." },
        { type: "content", text: "Du nimmst dir vor,\nruhiger zu werden.\nDurchatmen,\nnichts persönlich nehmen.\n\nUnd trotzdem:\nim *Kern*\npassiert dasselbe." },
        { type: "content", text: "Bis du eines Tages\nmitten im Reflex\netwas bemerkst:\n\n„Da *reagiert*\ngerade etwas\nin mir.“" },
        { type: "content", text: "Das ist der Sprung:\nnicht weniger Reflex —\nsondern ein Du,\ndas *daneben* steht.\n\nWas dich gestern hatte,\nkannst du heute halten." },
        { type: "content", text: "Genau das ist\n*vertikale* Entwicklung.\n\nKein neues Wissen.\nEin größerer Standpunkt,\nvon dem aus du\ndich selbst siehst." },
        { type: "cta", text: "Achte diese Woche\nauf den Moment,\nin dem etwas\nin dir *reagiert*.\n\nUnd frag dich:\nWer schaut da\neigentlich zu?", footer: "Mehr zur vertikalen Entwicklung\nin den nächsten Wochen. Folge mir." }
      ]
    }
  },
  {
    id: "perspektiven-stimmen",
    name: "Vertikale Entwicklung · „Perspektiven“",
    description: "Derselbe Satz, drei Menschen, drei Welten.",
    project: {
      font: "'Cormorant Garamond', serif",
      fontSize: 54,
      lineH: 1.34,
      showBar: true, showSwipe: true, showQ: true,
      caption: "Derselbe Satz, drei Menschen, drei Welten.\n\n„Du hörst mir nie zu.“ – für den einen ein Angriff, für den anderen eine Aufgabe, für den dritten eine Beziehungsfrage.\n\nNicht das Wissen ändert sich, sondern der Blick darauf.\n\nWelche der drei Stimmen war gerade deine?\n\n#vertikaleEntwicklung #Perspektive #Wahrnehmung #Entwicklung",
      slides: [
        { type: "content", text: "Derselbe Satz:\n„Du hörst mir\nnie richtig zu.“\n\nDrei Menschen.\nDrei verschiedene\n*Welten*." },
        { type: "content", text: "„Das stimmt\ndoch gar nicht.“\n\nDer Satz ist\ndas *Problem*.\nNicht ich." },
        { type: "content", text: "„Sag mir,\nwas ich ändern soll.“\n\nIch *löse* das.\nWie eine Aufgabe." },
        { type: "content", text: "„Was macht das\nmit mir —\nund mit uns?“\n\nIch werde *Teil*\ndessen, was\nich anschaue." },
        { type: "content", text: "Gleicher Satz —\nund doch steht jeder\nin einer anderen\n*Wirklichkeit*.\n\nNicht das Wissen\nändert sich,\nsondern der Blick\ndarauf." },
        { type: "cta", text: "Welche der drei\nStimmen\nwar gerade *deine*?\n\nUnd welche\nmöchtest du\nöfter hören?", footer: "Es gibt eine Art zu wachsen,\nüber die kaum jemand spricht. Folge mir." }
      ]
    }
  },
  {
    id: "stil2-orientierung",
    name: "Stil 2 · „Orientierung / VUCA“ (Scribble)",
    description: "Style-2-Variante mit Scribble-Hintergrund. Illustrationen pro Slide selbst hochladen.",
    project: {
      font: "'Cormorant Garamond', serif",
      fontSize: 56,
      lineH: 1.34,
      showBar: true, showSwipe: true, showQ: false,
      style: "style2", showScribbles: true,
      caption: "Manchmal trägt die gewohnte Orientierung nicht mehr – zu vieles gleichzeitig wahr, zu vieles in Bewegung.\n\nMehr Information hilft dann nicht. Was fehlt, ist Orientierung.\n\nIch mache Muster sichtbar, wo erst mal nur Durcheinander ist – und halte den Übergang aus zwischen dem, was nicht mehr gilt, und dem, was noch keine Form hat.\n\n#VUCA #Orientierung #vertikaleEntwicklung #Muster",
      slides: [
        { type: "content", text: "Manchmal trägt die\n*gewohnte* Orientierung\nnicht mehr." },
        { type: "content", text: "Zu vieles\n*gleichzeitig* wahr.\nZu vieles\nin Bewegung." },
        { type: "content", text: "Mehr Information\nhilft dann nicht.\nWas fehlt,\nist *Orientierung*." },
        { type: "intro", heading: "", text: "Genau *da*\narbeite ich." },
        { type: "content", text: "Ich mache\n*Muster* sichtbar,\nwo erst mal nur\nDurcheinander ist." },
        { type: "content", text: "Ich halte den\n*Übergang* aus…\n\n… zwischen dem, was\nnicht mehr gilt und dem,\nwas noch keine Form hat." },
        { type: "intro", heading: "Ich bin *Dennis*", text: "Ich arbeite mit Menschen an\nden Stellen, an denen ein\nProblem keine bessere\nLösung mehr verlangt…\n\n… sondern eine andere\nSicht auf sich selbst." },
        { type: "content", text: "2021 habe ich eine\nKarte gezeichnet:\n*„Roadmap durch die VUCA-Welt“*\nSie trägt bis heute…\n\n… hier gehe ich den Schritt\nweiter, als sie reicht." },
        { type: "cta", text: "Hier denke ich weiter.\nNicht fertig\nsondern *unterwegs*.", footer: "Folge mir für mehr Gedanken über Muster,\nEntwicklung und neue Sichtweisen." }
      ]
    }
  }
];
