import Accordion from "./Accordion";

interface FAQs {
  question: string;
  answer: string;
}

const faqs: FAQs[] = [
  {
    question: "Pre koho je Lukoklub Košice určený?",
    answer:
      "Vítame všetkých nadšencov, ktorí má záujem o olympíjsku lukostreľbu, vrátane úplných začiatočníkov. Lukostreľba nie je fyzicky náročný šport, takže je vhodná pre ľudí všetkých vekových kategórií a kondičných úrovní. Zastúpenie v našom klube je preto veľmi pestré. Dôležité však je, aby ste si pestovali sebadisciplínu, trpezlivosť a koordináciu, čo sú kľúčové vlastnosti pre túto aktivitu.",
  },
  {
    question: "Môžu s lukostreľbou začať aj deti?",
    answer:
      "Áno, lukostreľba je ideálny šport pre deti, ktorý podporuje disciplínu, sústredenie a sebaovládanie. Z dôvodu potreby individuálnejšieho prístupu prijímame záujemcov od 12 rokov. Rovnako vítame aj rodičov, ktorí by sa chceli zapojiť spolu so svojimi deťmi. Lukostreľba je skvelá rodinná aktivita, ktorá môže pomôcť upevniť vzťahy a stráviť kvalitný čas spoločne.",
  },
  {
    question: "Zúčastňujete sa ako klub súťaží?",
    answer:
      "Môžeme zo skúseností povedať, že väčšina našich členov preferuje lukostreľbu ako hobby, nie ako súťažný šport. Súťaženie na vyššej úrovni vyžaduje kondičnú prípravu a časovú náročnosť, čo je pre mnohých členov komplikované. Napriek tomu, Lukoklub Košice je dlhoročným členom Slovenského lukostreleckého zväzu a ak máte záujem, radi vás dokážeme podporiť aj v účasti na slovenských súťažiach. Spolupracujeme aj s Lukostreleckým klubom Jasov, ktorý sa špecializuje na výchovu profesionálnych lukostrelcov a reprezentantov.",
  },
  {
    question: "Aké vybavenie na lukostreľbu potrebujem?",
    answer:
      "Začiatočníkom poskytujeme všetko potrebné vybavenie, vrátane lukov, šípov, chráničov a ďalších tréningových pomôcok. Ak sa rozhodnete venovať športu dlhodobo, radi vám poradíme pri výbere vlastného luku a príslušenstva. Ak máte záujem začať už s vlastným vybavením, ponúkame konzultácie pred nákupom, aby ste si vybrali to správne.",
  },
  { question: "Kde a kedy prebiehajú tréningy?", answer: "TBD" },
  {
    question: "Koľko stojí členstvo v klube a tréningy?",
    answer:
      "Záujemcovia začínajú základným trojmesačným kurzom v cene 150 €. Po jeho absolvovaní sa môžete stať členom klubu s mesačným príspevkom 15 €, ktorý pokrýva údržbu zariadenia, nákup vybavenia a organizáciu akcií pre členov. Samozrejme, členské poplatky platíte len v mesiacoch, kedy u nás streľbu praktizujete. ",
  },
  {
    question: "Naučím sa za 3 mesiace strieľať?",
    answer:
      "Progres je individuálny a závisí od mnohých faktorov - fyzických schopností, dochádzky, snahy. Vo všeobecnosti však platí, že za 3 mesiace dokážete získať základné zručnosti v narábaní s lukom, pochopiť podstaty techniky a získať predstavu o tom, čo lukostreľba zahŕňa. Zároveň si overíte, či vás tento šport baví a či by ste ho chceli praktizovať vo voľnom čase, napríklad aj u seba na záhrade alebo chate.",
  },
  {
    question: "Je lukostreľba nebezpečná?",
    answer:
      "Napriek tomu, že je luk evidovaný legislatívou Slovenskej republiky ako mechanická zbraň (Zákon č. 190/2003 Z. z. (o strelných zbraniach a strelive a o zmene a doplnení niektorých zákonov - § 7), pri dodržaní všetkých bezpečnostných pravidiel je lukostreľba bezprostredne bezpečný šport. V základných opatreniach dbáme na správne používanie luku a šípov, kontrolu trénera počas tréningu a rešpektovanie všetkých pokynov na strelnici. Pred každým kurzom sa venujeme krátkemu školeniu o bezpečnosti.",
  },
  {
    question: "Venujete sa aj iným druhom lukosteľby ako je tá olympíjska?",
    answer:
      "Bohužial nie, naša expertízia spočíva v technike olympíjskej lukostreľby, teda streľbe s reflexným lukom. V prípade, že by ste však mali záujem strieľať z tradičných lukov, vieme sa bezproblémov dohodnúť, že sa stanete členom klubu, pričom vám budeme plne poskytovať priestory a terčovnice.. a samozrejme našu spoločnosť :) ",
  },
  {
    question: "Ako sa môžem prihlásiť na tréning?",
    answer:
      "Prihlásiť sa môžete prostredníctvom online formulára na našej webstránke alebo kontaktujte našich inštruktorov telefonicky či e-mailom.",
  },
  {
    question:
      "Ponúkate aj individuálne zážitkové strieľanie alebo firemné akcie?",
    answer:
      "Áno, ponúkame jednorazovú zážitkovú streľbu z reflexných lukov ako aj organizovanie firemných akcií. Navyše máme k dispozícii aj darčekové poukážky, ktoré môžu byť originálnym darčekom pre vašich blízkych. V prípade záujmu nás prosím kontaktujte predovšetkým telefonicky, prípadne e-mailom.",
  },
];

const FAQ = () => {
  return (
    <div className="rounded-lg p-6">
      <div className="text-6xl pb-6">Často kladené otázky</div>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          question={faq.question}
          answer={faq.answer}
        ></Accordion>
      ))}
    </div>
  );
};

export default FAQ;
