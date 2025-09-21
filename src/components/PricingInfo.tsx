import InfoCard from "./InfoCard";

export default function PricingInfo() {
  return (
    <div className="w-full mx-auto px-10 py-10">
      <div className="flex flex-col gap-8 items-center">
        <InfoCard
          title="3-mesačný začiatočnícky kurz pre nových záujemcov"
          description={
            <>
              Jednorazový príspevok:{" "}
              <span className="text-orange-500 font-semibold">150 EUR</span>, v
              ktorom sú zahrnuté:
            </>
          }
        >
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>členský príspevok na 3 mesiace</li>
            <li>odborná teoretická a praktická inštruktáž s trénerom</li>
            <li>požičanie športového náradia počas tréningu</li>
            <li>požičanie ochranných pomôcok počas tréningu</li>
            <li>požičanie šípov počas tréningu</li>
            <li>po 3 mesiacoch je možné stať sa stálym členom</li>
          </ul>
        </InfoCard>

        <InfoCard
          title="Pre stálych členov Lukoklub Košice"
          description="Pravidelné členské príspevky zahŕňajú:"
        >
          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-5">
            <li>poplatky na prenájom strelnice</li>
            <li>údržba spoločného klubového náradia</li>
          </ul>
          <p className="text-gray-800 font-medium mb-3">Prispievať je možné:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Mesačne", price: "15 EUR" },
              { label: "Polročne", price: "80 EUR" },
              { label: "Ročne", price: "150 EUR" },
            ].map(({ label, price }) => (
              <div
                key={label}
                className="p-4 border border-gray-200 rounded-md text-center bg-orange-50"
              >
                <p className="font-semibold text-gray-800">{label}</p>
                <p className="text-orange-500 font-bold text-lg">{price}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="Pre nečlenov">
          <ul className="space-y-3 text-gray-700">
            {[
              {
                price: "10 EUR / 1 tréning",
                note: "strelec má vlastné náradie",
              },
              {
                price: "30 EUR / 1 tréning",
                note: "zapožičanie náradia + inštruktáž",
              },
              {
                price: "100 EUR / 1 tréning",
                note: "kolektív, zapožičanie náradia + inštruktáž",
              },
              {
                price: "Po dohode",
                note: "firemná akcia, team-building",
              },
            ].map(({ price, note }) => (
              <li
                key={price}
                className="flex justify-between border-b border-gray-200 pb-2 last:border-b-0"
              >
                <span className="font-medium">{price}</span>
                <span className="text-gray-500 text-sm">{note}</span>
              </li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </div>
  );
}
