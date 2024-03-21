/* eslint-disable react/prop-types */
export default function Skill({ img }) {
  return (
    <li className=" px-10 sm:px-16 py-3 sm:py-5 bg-grey rounded-lg inline-block shrink-0">
      <img src={img} alt={`logo de ${img}`} className="h-8 sm:h-10 w-auto" />
    </li>
  );
}
