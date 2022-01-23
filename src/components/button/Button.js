function Button(props) {
  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className="focus:ring w-full py-3 mt-5 rounded-md bg-orange text-white font-bold text-center"
    >
      {props.children}
    </button>
  );
}

export default Button;
