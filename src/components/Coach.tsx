interface Props {
  name: string;
  imageUrl: string;
}

const Coach = ({ name, imageUrl }: Props) => {
  return (
    <div className="w-96">
      <div className="flex flex-col items-center">
        <div
          className="relative h-60 w-60 rounded-full overflow-hidden bg-cover bg-center mb-6"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <span className="text-lg font-semibold">{name}</span>
      </div>
    </div>
  );
};

export default Coach;
