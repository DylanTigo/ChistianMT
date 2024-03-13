/* eslint-disable react/prop-types */


export default function Button({children, type}) {
  if(!type || type === "primary"){
    return (
      <button className="btn bg-black text-white" type="button">{children}</button>
    )
  }
  if (type === "secondary") {
    return (
      <button className="btn bg-white text-black" type="button">{children}</button>
    )
  }
}
