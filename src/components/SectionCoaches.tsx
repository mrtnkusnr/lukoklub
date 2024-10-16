import Coach from "./Coach";
import CoachMartinKusnir from "../assets/coach-mk.jpg";
import CoachMarekPancisin from "../assets/coach-mp.jpg";
import CoachMarekReisinger from "../assets/coach-mr.jpg";

const SectionCoaches = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col text-center items-center">
        <h1 className="mt-24 text-5xl font-semibold">
          Spoznajte našich trénerov
        </h1>
        <h2 className="text-lg p-6 max-w-4xl ">
          Lukoklub Košice zabezpečuje výučbu svojich členov prostredníctvom
          kvalifikovaných trénerov a rozhodcov s dlhoročnými skúsenosťami -
          okrem nich sa však na tréningoch stretnete aj s mnohými nadšencami pre
          lukostreľbu všetkých vekových kategórií
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-24 mt-24">
        <Coach name="Marek Reisinger" imageUrl={CoachMarekReisinger} />
        <Coach name="Marek Pančišin" imageUrl={CoachMarekPancisin} />
        <Coach name="Martin Kušnír" imageUrl={CoachMartinKusnir} />
      </div>
    </div>
  );
};

export default SectionCoaches;
