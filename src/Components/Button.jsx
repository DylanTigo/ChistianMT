/* eslint-disable react/prop-types */

export default function Button({ children, type, submit}) {
  if (!type || type === "primary") {
    return (
      <button type={submit ? "submit" : "button"} className="btn flex gap-2 items-center bg-black text-white relative elt">
        <span className="hoverElt bg-orange-600 flex gap-1 mix-blend-lighten"></span>
        {children}
      </button>
    );
  }
  if (type === "secondary") {
    return (
      <button type={submit ? "submit" : "button"} className="btn flex gap-1 bg-white text-black relative elt">
        <span className="hoverElt bg-blue-200 flex gap-1 mix-blend-darken"></span>
        {children}
      </button>
    );
  }
}
