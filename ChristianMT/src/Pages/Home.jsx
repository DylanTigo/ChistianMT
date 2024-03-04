import Button from "../Components/Button";
import SocialMedial from "../Components/SocialMedial";

import arrow from "../assets/icons/downIcon.svg";
// import bgImg from "../assets/background.jpg";
import scrollround from "../assets/scrollround.png";
import imagePrincipale from "../assets/fristMTphoto.png";

export default function Home() {
  return (
    <main>
      <section id="home" className="flex flex-col sm:flex-row gap-4">
        <div className=" flex flex-col justify-between md:w-3/5 md:min-w-[540px] bg-[url('../assets/background.jpg')] bg-no-repeat bg-cover p-12 rounded-xl relative">
          <div className="">
            <h1 className=" font-oxygen text-4xl font-bold">
              Hello I’m Mael Toukap <br /> FullStack and Mobile <br /> Develloper
            </h1>
            <p className=" w-5/6 mt-8">
              Lorem ipsum dolor sit amet consectetur. Purus tellus pretium
              pulvinar in ullamcorper ornare enim. Mauris rutrum dolor ut.
            </p>
          </div>
          <div className="mt-24 flex gap-2">
            <Button type="primary">Contact me</Button>
            <Button type="secondary">Download CV</Button>
          </div>
          <div className="w-fit absolute  bottom-5 right-5 bg-white rounded-full">
            <img src={scrollround} alt="scrolldown circulaire" className=" w-24"/>
            <img src={arrow} alt="icone de fleche vers le bas" className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
          </div>
        </div>
        <div className="w-full sm:w-2/5 h-auto rounded-xl overflow-hidden relative">
          <img
            src={imagePrincipale}
            alt="photo de mael toukap"
            className=" object-cover object-center h-full"
          />
          <div className=" absolute top-6 right-6">
            <SocialMedial className=" flex-col"/>
          </div>
        </div>
      </section>
    </main>
  );
}
