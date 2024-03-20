/* eslint-disable react/prop-types */

export default function Button({ children, type }) {
  if (!type || type === "primary") {
    return (
      <button className="btn bg-black text-white relative elt" type="button">
        <span className="hoverElt bg-red-500">{children}</span>
        {children}
      </button>
    );
  }
  if (type === "secondary") {
    return (
      <button className="btn bg-white text-black relative elt" type="button">
        <span className="hoverElt bg-violet-400">{children}</span>
        {children}
      </button>
    );
  }
}
