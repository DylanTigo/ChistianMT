/* eslint-disable react/prop-types */
import linkdin from "../assets/icons/linkdin.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import insta from "../assets/icons/insta.svg";
import twitter from "../assets/icons/twitter.svg";
import github from "../assets/icons/github.svg";

export default function SocialMedial({className}) {
  return (
    <div className={`flex w-fit ${className} justify-center items-center gap-2` }>
      <div className="icon">
        <img src={whatsapp} alt="logo whatsapp" />
      </div>
      <div className="icon">
        <img src={twitter} alt="logo twitter" />
      </div>
      <div className="icon">
        <img src={insta} alt="logo insta" />
      </div>
      <div className="icon">
        <img src={linkdin} alt="logo linkdin" />
      </div>
      <div className="icon">
        <img src={github} alt="logo github" />
      </div>
    </div>
  );
}
