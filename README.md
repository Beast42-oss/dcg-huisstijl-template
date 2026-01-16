# DCG & Vijfhart Huisstijl Template

Dit is de centrale repository voor de huisstijl-configuratie van De Complementair Groep (DCG) en haar merken. Gebruik deze template als startpunt voor nieuwe websites.

## Merken

| Merk | Tagline | Hoofdkleur |
|:---|:---|:---|
| **DCG** | House of Ambition | Paars `#4A2572` |
| **Vijfhart** | De grootste onafhankelijke IT-opleider van Nederland | Rood `#E30613` |
| **AT Computing** | De open source gurus | - |
| **Cibit** | Autoriteit in Data en Architectuur | - |
| **Coach+Result** | Expert in persoonlijke ontwikkeling | - |
| **Vijfhart ARBO** | Bedrijfsveiligheid en certificeringen | - |
| **Sonnevelt** | Opleiders voor vitaal leven | - |
| **Winc Academy** | De online tech opleider van Nederland | - |

## Installatie

```bash
# Clone deze repository
git clone https://github.com/Beast42-oss/dcg-huisstijl-template.git

# Installeer dependencies
pnpm install

# Start development server
pnpm dev
```

## Structuur

```
/dcg-huisstijl-template
├── /src
│   ├── /components      # Herbruikbare UI-componenten
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── /styles          # Globale stijlen
│   └── /assets          # Logo's en afbeeldingen
├── tailwind.config.js   # Huisstijl-configuratie
├── HUISSTIJL.md         # Volledige specificatie
└── LESSONS_LEARNED.md   # Standaarden en best practices
```

## Gebruik in Manus

In een nieuwe Manus-chat kun je zeggen:

> "Maak een website voor [merknaam]. Gebruik de huisstijl uit de GitHub repository dcg-huisstijl-template."

## Standaarden

Alle websites volgen deze standaarden:
- ✅ Mobiel-responsief vanaf de start
- ✅ Geen dark mode
- ✅ Versienummer en update-historie
- ✅ Congruentie-check bij wijzigingen
- ✅ Toegangscontrole via unieke links (geen login)

---

*Laatst bijgewerkt: 16 januari 2026*
