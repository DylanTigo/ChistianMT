/* eslint-disable react/prop-types */

export default function Button({ children, type }) {
  const btn = document.querySelector(".btn");
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   document.addEventListener("mousemove", handleMouseMove);
  // }, []);
  // function handleMouseMove(e) {
  //   const { clientX, clientY } = e;
  //   setMousePos({ x: clientX, y: clientY });
  // }
  // console.log(mousePos);
  // useGSAP(() => {
  //   btn.addEventListener("mouseenter", )

  // })

  if (!type || type === "primary") {
    return (
      <button
        // onMouseMove={handleMouseMove}
        className="btn bg-black text-white relative"
        type="button"
      >
        <span className="hoverElt absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-auto aspect-square rounded-full bg-red-500  flex justify-center items-center opacity-0 transition-transform">
          {children}
        </span>
        {children}
      </button>
    );
  }
  if (type === "secondary") {
    return (
      <button
        // onMouseMove={handleMouseMove}
        className="btn bg-white text-black relative"
        type="button"
      >
        <span className="hoverElt absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-auto aspect-square rounded-full bg-black text-white flex justify-center items-center opacity-0 transition-transform">
          {children}
        </span>
        {children}
      </button>
    );
  }
}
