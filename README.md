# DW Instagram-Post-Generator

Karussell-Posts im DW-Stil (1080×1350, Instagram 4:5) – komplett im Browser, kein Server.

**Live:** https://denniswillkomm-del.github.io/dw-instagram-post-generator/

## Nutzung
- `index.html` öffnen (lokal per Doppelklick **oder** über die GitHub-Pages-URL überall).
- Über **Tabs** Slides wählen/hinzufügen/löschen.
- Text: Zeilenumbruch = neue Zeile, Leerzeile = Absatz, `*Wort*` = Verlauf-Highlight.
- **Vorlagen & Projekte**: neues Projekt aus einer Vorlage starten, oder eigene
  Projekte im Browser speichern/laden („Meine Projekte“).
- **Caption**: Instagram-Text wird mit dem Projekt gespeichert (nicht aufs Bild gerendert),
  Button kopiert ihn in die Zwischenablage.
- **Export**: einzelne Slide oder alle als ZIP (PNG, 1080×1350).

## Speichern – wie & wo
| Weg | Sync über Geräte? | Hinweis |
|---|---|---|
| **Autospeichern** (localStorage) | nein, pro Browser | letzte Sitzung wird automatisch wiederhergestellt |
| **Meine Projekte** (localStorage) | nein, pro Browser | benannt speichern/laden/löschen |
| **Projekt speichern** (JSON-Datei) | ja, via Git/Download | zentraler Stand, ins Repo committen |

> GitHub Pages ist read-only: die Seite kann nicht auf den Server zurückschreiben.
> Geräteübergreifender, dauerhafter Stand = JSON-Dateien im Repo.

## Vorlagen pflegen
Vorlagen stehen in [`templates.js`](templates.js) als `window.DW_TEMPLATES`-Array
(`{ id, name, description, project }`). Neue Vorlage = weiterer Eintrag, `project`
hat dasselbe Format wie eine gespeicherte Projekt-JSON.

## Dateien
- `index.html` – der Generator (Single-File-App)
- `templates.js` – Vorlagen
- `DW-Design-System.md` – Design-Regeln (Farben, Typo, Elemente)
- `post-*.json` – Beispiel-Projekte
- PNGs sind via `.gitignore` ausgeschlossen (jederzeit neu exportierbar)
