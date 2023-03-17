import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        I am a skilled full-stack software engineer proficient in a range of programming languages, including C#, JavaScript, ReactJS, Python, and C. 
          I have extensive experience working on both front-end and back-end development projects, including web application building and maintenance, database system creation and implementation, and API development. 
          I am passionate about staying up-to-date with the latest technology trends, constantly expanding my knowledge base to include new languages and frameworks. With my technical expertise, 
          
        </p>

        <br />

        <p className="text-xl">
        Outside of work, I enjoy participating in hackathons, where I have won awards for my innovative projects. I also enjoy mentoring and sharing my knowledge with others, helping them to learn about programming and software development.

        I am excited to continue my growth and career as a software engineer, and I am seeking new opportunities to work on challenging projects and make a positive impact in the industry.
        </p>
      </div>
    </div>
  );
};

export default About;
