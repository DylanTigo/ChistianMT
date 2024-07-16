/* eslint-disable react/prop-types */

export default function Button({ children, type, submit}) {
  if (!type || type === "primary") {
    return (
      <button type={submit ? "submit" : "button"} className="btn bg-black text-white relative elt">
        <span className="hoverElt bg-orange-600">{children}</span>
        {children}
      </button>
    );
  }
  if (type === "secondary") {
    return (
      <button type={submit ? "submit" : "button"} className="btn bg-white text-black relative elt">
        <span className="hoverElt bg-gray-300">{children}</span>
        {children}
      </button>
    );
  }
}
