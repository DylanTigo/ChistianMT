/* eslint-disable react/prop-types */
export default function Skill({ img, small, className }) {
  if (small) {
    return (
      <li className={`skill px-1 sm:px-2 sm:py-[2px] rounded-lg inline-block shrink-0 ${className}`}>
        <img src={img} alt={`logo de ${img}`} className="h-6 sm:h-6 w-auto" />
      </li>
    );
  }
  return (
    <li className={`skill px-10 sm:px-16 py-3 sm:py-5 bg-grey rounded-lg inline-block shrink-0 ${className}`}>
      <img src={img} alt={`logo de ${img}`} className="h-8 sm:h-10 w-auto" />
    </li>
  );
}
