import InfoIcon from "./InfoIcon";

const ContactPage = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col text-center items-center">
        <h1 className="text-5xl font-semibold">Kontaktuje nás</h1>
        <h2 className="text-lg p-6 max-w-4xl ">
          Máte na nás nejaké otázky? Radi Vám ich zodpovieme!
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <InfoIcon
            icon="tag"
            header="Facebooková stránka"
            desc={
              <a
                href="https://www.facebook.com/lukoklub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                /lukoklub
              </a>
            }
          />
          <InfoIcon
            icon="tag"
            header="Facebookova skupina"
            desc={
              <a
                href="https://www.facebook.com/groups/lukoklub.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                /groups/lukoklub.sk
              </a>
            }
          />
          <InfoIcon
            icon="alternate_email"
            header="Email"
            desc="lukoklub@gmail.com"
          />
          <InfoIcon icon="call" header="Telefón" desc="+421948626998" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
