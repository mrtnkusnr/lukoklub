interface Props {
  htmlFor: string;
  label: string;
  id: string;
  placeholder: string;
}

const TextArea = ({ htmlFor, label, id, placeholder }: Props) => {
  return (
    <div className="mb-4">
      <label className="block mb-2" htmlFor={htmlFor}>
        {label}
      </label>
      <textarea
        className="border rounded-sm w-full py-2 px-3 leading-tight focus:border-orange-500 focus:ring-0 focus:outline-none"
        id={id}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
