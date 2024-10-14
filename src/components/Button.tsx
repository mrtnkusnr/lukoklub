function Button() {
  return (
    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-sm font-medium py-2 px-4 flex justify-center items-center group">
      <span className="pr-1">Vstúpiť</span>
      <span className="material-icons transition-transform duration-300 transform group-hover:translate-x-1">
        arrow_forward
      </span>
    </button>
  );
}

export default Button;
