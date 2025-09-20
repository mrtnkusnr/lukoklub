interface Props {
  title: string;
}

const Heading = ({ title }: Props) => {
  return (
    <h1 className="text-5xl font-semibold text-gray-800 mb-16 text-center">
      {title}
    </h1>
  );
};

export default Heading;
