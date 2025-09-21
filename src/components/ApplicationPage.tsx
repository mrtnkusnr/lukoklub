import Heading from "./Heading";
import PricingInfo from "./PricingInfo";
import ApplicationForm from "./ApplicationForm";

const ApplicationPage = () => {
  return (
    <>
      <div className="py-16 bg-gradient-to-b from-transparent to-gray-50 border-b border-gray-100">
        <div className="flex flex-col text-center items-center ">
          <Heading title="Poplatky a prihláška"></Heading>
          <h2 className="text-lg text-gray-800 max-w-4xl text-center p-6">
            V tejto sekcii nájdete všetky potrebné informácie pre účasť na
            tréningoch v Lukoklube Košice – prvotný kurz, podmienky a výhody
            vstupu, výška členského, cenník tréningov a vysvetlenie, čo
            jednotlivé poplatky zahŕňajú. Táto časť slúži ako rýchly prehľad,
            aby ste sa vedeli jednoducho zorientovať a vybrať si možnosť, ktorá
            vám najviac vyhovuje.
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-24 my-12">
        <PricingInfo></PricingInfo>
      </div>

      <Heading title="Prihláška"></Heading>

      <div className="flex flex-col items-center py-10 px-4">
        <h2 className="text-lg pt-6 max-w-4xl text-center">
          Prihláste sa na 3-mesačný základný kurz cez tento formulár — po
          odoslaní Vás budeme informovať o dosutpných termínoch. Formulár môžete
          využiť aj v prípade záujmu o jednorazový tréning, spoluprácu alebo
          firemnú akciu.
        </h2>
        <ApplicationForm />
      </div>
    </>
  );
};

export default ApplicationPage;
