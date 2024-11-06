interface Props {
  title: string;
}

const Heading = ({ title }: Props) => {
  return (
    <h1 className="text-5xl font-semibold mt-6 mb-14 text-center">{title}</h1>
  );
};

export default Heading;
