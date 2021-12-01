import { FunctionComponent } from "react";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <div className="who-am-i">
      <h1>Who Am I?</h1>
      <p>
        Hey There 👋, This is Lakshmi Chaitanya. A typical{" "}
        {new Date().getFullYear() - 2008} year old developer from India{" "}
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/118/flag-for-india_1f1ee-1f1f3.png"
          alt=""
          height="25px"
        />
        . I am a self taught developer who started learning to code in Lockdown
        when I was bored. Started with Java which is not the best language to
        start with, and ended up learning some HTML. which got me into web
        development. I started my own blog with Next.js which is a react
        framework. I write articles whenever I feel bored. My goal is to learn
        new technologies and become a better programmer. I also do open-source
        projects, My contributions and work are on my GitHub 😊
      </p>
    </div>
  );
};

export default About;
