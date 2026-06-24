# DW Instagram – Design-System

Standardisierte Karussell-Posts im DW-Stil. Dieses Dokument hält die Design-Regeln fest; gebaut wird mit **`index.html`** (im selben Ordner per Doppelklick im Browser öffnen).

## Format
Alle Slides: **1080 × 1350 px** (Instagram-Karussell, 4:5). PNG-Export direkt aus dem Generator.

## Farben
| Rolle | Hex |
|---|---|
| Hintergrund | `#1B0739` (tiefer Indigo) |
| Text | `#F1ECF8` (gebrochenes Weiß) |
| Verlauf Start | `#4CB7F5` (Cyan) |
| Verlauf Mitte | `#6D68F0` (Blau-Violett) |
| Verlauf Ende | `#C65ACB` (Magenta) |
| Teal / Swipe-Pfeil | `#3AA9B5` |

Der **Cyan→Violett→Magenta-Verlauf** ist das Marken-Element: vertikal im Balken links, horizontal in den hervorgehobenen Wörtern.

## Typografie
Elegante Serife. Im Generator wählbar: **Cormorant Garamond** (Standard), EB Garamond, Playfair Display. Text ist mittig gesetzt, mit **bewussten Zeilenumbrüchen** für Rhythmus (nicht automatisch umbrechen lassen).

- Schriftgröße Standard ≈ 56 px, einstellbar 34–78 px
- Zeilenabstand ≈ 1.34
- Leerzeile im Text = Absatz-Abstand

## Wiederkehrende Elemente
- **Verlauf-Balken** links: x ≈ 88 px, Breite 16 px, vertikaler Marken-Verlauf, abgerundete Enden.
- **Highlight-Wort**: genau *ein* Schlüsselbegriff pro Slide im horizontalen Verlauf (im Editor mit `*Sternchen*` markiert).
- **Swipe-Pill** unten rechts: Teal-Outline-Pill mit vier `>`-Chevrons. Auf allen Slides außer der Abschluss-Slide.
- **Profil-Slide**: Überschrift „Ich bin *Dennis*", Fließtext, Hexagon-Foto unten links.
- **Abschluss-Slide**: Frage als Haupttext, DW-Hexagon-Logo + Footer-Zeile unten, optional Fragezeichen-Deko oben.

## Aufbau eines Karussells (Standard)
1.–5. **Inhalt** – kurze, pointierte Gedanken, je ein Highlight-Wort
6. **Profil** – „Ich bin Dennis", was du tust
7. **Abschluss** – Reflexionsfrage + „Folge mir …"

## So nutzt du den Generator
1. `index.html` im Browser öffnen (startet mit den 7 Vorlage-Slides).
2. Über die Tabs Slides wählen, hinzufügen (`+ Inhalt / + Profil / + Abschluss`) oder löschen.
3. Text eintippen — Zeilenumbruch = neue Zeile, Leerzeile = Absatz, `*Wort*` = Verlauf-Highlight.
4. Bei Profil-/Abschluss-Slides Foto bzw. Logo hochladen (sonst wird ein DW-Hexagon gezeichnet).
5. **PNG: diese Slide** oder **PNG: alle** exportieren (1080×1350).
6. **Projekt speichern** legt eine `.json` ab, **Projekt laden** holt sie zurück — so kannst du Karussells weiterbearbeiten.

> Tipp: Für maximale Markentreue ein eigenes Logo-PNG und ein freigestelltes Profilfoto hochladen.
