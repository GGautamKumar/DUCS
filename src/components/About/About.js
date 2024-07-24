import React from "react";
import "./About.css";
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img}  alt="" className="about-img"/>
        <img src={play_icon}  alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>

      </div>
      <div className="about-right">
        <h3>
            ABOUT UNIVERSITY
        </h3>
        <h2>
            Nurtuning Tomorrow's Leaders Today
        </h2>
        <p>
            Embark on a transformative educationaljourney with our university's comprehensive educational program. Our cutting-edge 
            curriculum is designed to empower students with the knowledge,skills, and experience needed to excel in the dynamic field
            of education.
        </p>
        <p>
            With a focus on innovation,hand-on learning, and personalized mentorship, our program prepare aspiring educators to make a maeningfullimpact
            in a classrooms, schools and communities.
        </p>
        <p>
            Weather you aspire to become a teacher,administration,counselor, or educational leader, our diverse range of programs offer the perfect
            pathway to achieve your goals and unlock full potential in shaping the future of education. 
        </p>
      </div>
    </div>
  );
};

export default About;
