/* eslint-disable react/prop-types */
export default function Skill({img}) {
  
  return (
    <li className=" px-16 py-5 bg-grey rounded-lg inline-block shrink-0">
      <img src={img} alt={`logo de ${img}`} className=" h-10 w-auto"/>
    </li>
  );
}
