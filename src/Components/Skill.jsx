/* eslint-disable react/prop-types */
export default function Skill({ img, small }) {
  if (small) {
    return (
      <li className="px-6 sm:px-10 py-1 sm:py-2 bg-grey rounded-lg inline-block shrink-0">
        <img src={img} alt={`logo de ${img}`} className="h-5 sm:h-6 w-auto" />
      </li>
    );
  }
  return (
    <li className="px-10 sm:px-16 py-3 sm:py-5 bg-grey rounded-lg inline-block shrink-0">
      <img src={img} alt={`logo de ${img}`} className="h-8 sm:h-10 w-auto" />
    </li>
  );
}
