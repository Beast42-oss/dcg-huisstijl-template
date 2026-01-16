# Lessons Learned & Standaarden

**Versie:** 1.0  
**Datum:** 16 januari 2026

---

## Inleiding

Dit document beschrijft de standaarden en best practices die we toepassen op alle nieuwe websites. Deze zijn gebaseerd op eerdere projecten en feedback, en zorgen voor een consistente, hoge kwaliteit.

Dit is een levend document. Na elk project wordt het geëvalueerd en eventueel bijgewerkt met nieuwe inzichten.

---

## Huidige Standaarden

De volgende punten zijn vastgesteld als standaard voor alle websites die ik ontwikkel:

| Standaard | Omschrijving | Reden (Lesson Learned) |
|:---|:---|:---|
| **✅ Volledig Mobiel-Responsief** | Elke website wordt vanaf de start ontworpen en gebouwd om perfect te functioneren op alle schermgroottes, van mobiel tot desktop. | Een goede mobiele ervaring is geen extra, maar een basisvereiste voor moderne websites. |
| **✅ Geen 'Dark Mode'** | Websites worden standaard met een lichte, strakke en minimalistische interface ontworpen. | Dit sluit aan bij de vastgestelde esthetische voorkeur en zorgt voor een consistente merkuitstraling. |
| **✅ Versiebeheer en Update-historie** | Elke website krijgt een versienummer en een pagina of sectie met een overzicht van de wijzigingen per update. | Dit zorgt voor transparantie en maakt het makkelijker om de evolutie van een site te volgen. |
| **✅ Congruentie-Check bij Wijzigingen** | Bij het aanpassen van content op één deel van de site, controleer ik of dit geen tegenstrijdigheden veroorzaakt met andere content. | Dit voorkomt dat de website verouderde of inconsistente informatie bevat na een update. |
| **✅ Toegangscontrole via Unieke Links** | In plaats van een traditioneel inlogsysteem, wordt toegang verleend via unieke, niet-openbare URL's. | Dit elimineert de noodzaak voor gebruikers om accounts aan te maken en voorkomt problemen met vergeten wachtwoorden en geblokkeerde accounts. |
| **✅ Standaard HTTPS** | Alle communicatie tussen de browser en de webserver wordt versleuteld. | Dit is een basisvereiste voor webbeveiliging en wordt standaard ingeschakeld. |
| **✅ Veilige API Key Opslag** | API-sleutels worden nooit zichtbaar in de front-end code, maar veilig opgeslagen in server-side environment variables. | Dit voorkomt misbruik van externe diensten en beschermt tegen datalekken. |

---

## Review Proces

Na de afronding van een project, of een significante update, wordt een gestructureerd reviewproces gevolgd:

1.  **Analyse:** Ik analyseer het afgeronde project en identificeer de belangrijkste successen en verbeterpunten.
2.  **Voorstel:** Ik stel een concrete lijst op met mogelijke verbeteringen die als nieuwe standaard kunnen worden aangenomen.
3.  **Besluit:** Jij beslist welke van deze verbeteringen worden gepromoveerd tot een standaard feature.
4.  **Integratie:** Ik integreer de geselecteerde features in de basis-template en dit document.

> Door dit proces wordt de standaard niet een statisch document, maar een levend systeem dat zichzelf verbetert op basis van praktische ervaring.
