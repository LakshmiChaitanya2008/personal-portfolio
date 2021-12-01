import { FunctionComponent } from "react";

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <div className="hero">
      <img
        src="https://i.pinimg.com/originals/8d/0a/67/8d0a678c64ba4718e01d9704126a44e5.jpg"
        alt=""
      />
      <h1 className="main-title">Hi, I am Lakshmi Chaitanya</h1>
      <h3 id="sub-title">A passionate frontend developer from India</h3>
    </div>
  );
};

export default Hero;
