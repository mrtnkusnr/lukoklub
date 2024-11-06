interface Props {
  htmlFor: string;
  label: string;
  id: string;
  type?: string;
  placeholder: string;
}

const Input = ({ htmlFor, label, id, type, placeholder }: Props) => {
  return (
    <div className="mb-4">
      <label className="block mb-2" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="border rounded-sm w-full py-2 px-3 leading-tight focus:border-orange-500 focus:ring-0 focus:outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
