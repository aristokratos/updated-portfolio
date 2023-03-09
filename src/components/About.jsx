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

        <p className="text-xl mt-20">
        I am a highly skilled and dedicated full stack software engineer with a strong foundation in programming languages such as C# and extensive experience working on both front-end and back-end development projects. In my current role, I have had the opportunity to work on a variety of projects, including building and maintaining web applications, creating and implementing database systems, and developing APIs.

        With a passion for staying up-to-date on the latest technology trends, I continuously learn and improve my skills, expanding my knowledge base to include other languages such as ReactJS, JavaScript, Python for machine learning, and C language. As a result, I possess the technical expertise required to tackle challenging projects and deliver outstanding results.

        In addition to my technical prowess, I am a highly effective communicator and collaborator, consistently working well with cross-functional teams to achieve project success. I strongly believe in the importance of effective communication, as it serves as a foundation for a productive and efficient work environment.

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
