# DCG & Vijfhart Huisstijl Specificatie

**Versie:** 1.2  
**Datum:** 16 januari 2026

---

## 1. Kleurenpalet

### Vijfhart

| Kleur | HEX | RGB | Toepassing |
|:---|:---|:---|:---|
| Vijfhart Rood | `#E30613` | 227/6/19 | Hoofdkleur, achtergronden, knoppen |
| Vijfhart Wit | `#FFFFFF` | 255/255/255 | Tekst op rood, achtergronden |
| Vijfhart Antraciet | `#636467` | 99/100/103 | Lopende tekst |
| Vijfhart Middengrijs | `#CCCDCD` | 204/205/205 | Ondersteunende achtergrond |

### DCG

| Kleur | HEX | RGB | Toepassing |
|:---|:---|:---|:---|
| DCG Paars | `#4A2572` | 74/37/114 | Hoofdkleur, achtergronden |
| DCG Geel | `#FBBB00` | 251/187/0 | Accenten, handgeschreven tekst |
| DCG Lichtpaars | `#9889B3` | 152/137/179 | Ondersteunende vlakken |

---

## 2. Typografie

### Vijfhart
- **Koppen:** Open Sans Bold (700)
- **Body:** Open Sans Regular (400)
- **"Klopt!":** Altijd in bold, met uitroepteken, 2-4pt groter dan volgende tekst

### DCG
- **Koppen:** Playfair Display Bold (700)
- **Body:** Lato Regular (400)
- **Handgeschreven:** Nothing You Could Do (voor "House of Ambition")

### Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Lato:wght@400;700&family=Nothing+You+Could+Do&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

---

## 3. Componenten

### Button

```tsx
// Vijfhart Primary
<Button brand="vijfhart" variant="primary">Inschrijven</Button>

// DCG Secondary
<Button brand="dcg" variant="secondary">Meer info</Button>
```

**Varianten:**
- `primary`: Gevulde knop in hoofdkleur
- `secondary`: Gevulde knop in secundaire kleur
- `outline`: Transparante knop met rand

**Groottes:** `sm`, `md`, `lg`

### Card

```tsx
// Vijfhart Featured Card
<Card brand="vijfhart" variant="featured" title="IT-opleiding">
  Inhoud hier...
</Card>

// DCG Default Card
<Card brand="dcg" title="Training">
  Inhoud hier...
</Card>
```

**Varianten:**
- `default`: Witte achtergrond met subtiele rand
- `featured`: Gekleurde achtergrond (hoofdkleur)
- `outline`: Witte achtergrond met gekleurde rand

### Header

```tsx
<Header 
  brand="vijfhart"
  navItems={[
    { label: "Home", href: "/", active: true },
    { label: "Opleidingen", href: "/opleidingen" },
    { label: "Contact", href: "/contact" },
  ]}
/>
```

### Footer

```tsx
<Footer 
  brand="dcg"
  showVersion={true}
  version="1.0.0"
  links={[
    { label: "Privacy", href: "/privacy" },
    { label: "Voorwaarden", href: "/voorwaarden" },
  ]}
/>
```

---

## 4. Merkpositionering

| Merk | Tagline | Specialisaties |
|:---|:---|:---|
| **Vijfhart** | De grootste onafhankelijke IT-opleider van Nederland | Business & IT, Cloud, Data, Security |
| **AT Computing** | De open source gurus | Linux, Ansible, Docker, Kubernetes |
| **Cibit** | Autoriteit in Data en Architectuur | Agile, Architectuur, Data management |
| **Coach+Result** | Expert in persoonlijke ontwikkeling | Coaching, Teamontwikkeling |
| **Vijfhart ARBO** | Bedrijfsveiligheid en certificeringen | VCA, BHV, EHBO |
| **Sonnevelt** | Opleiders voor vitaal leven | Vitaliteit, Coaching |
| **Winc Academy** | De online tech opleider van Nederland | Programmeren, Data |

---

## 5. Do's en Don'ts

### Do's ✅
- Gebruik altijd de correcte kleuren uit dit document
- Zorg voor voldoende contrast tussen tekst en achtergrond
- Houd knoppen en kaders afgerond (border-radius)
- Maak websites mobiel-responsief vanaf de start
- Voeg versienummer en update-historie toe

### Don'ts ❌
- Gebruik geen dark mode
- Verander geen lettertype-spatiëring
- Plaats logo's niet op andere kleuren dan rood/wit (Vijfhart) of paars/wit (DCG)
- Gebruik geen andere kleuren dan gedefinieerd in de huisstijl
