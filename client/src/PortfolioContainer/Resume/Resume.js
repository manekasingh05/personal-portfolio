import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
 
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History(PART 1)", logoSrc: "work-history.svg" },
    { label: "Work History(PART 2)", logoSrc: "work-history.svg" },
    { label: "Programming Skills(PART 1)", logoSrc: "programming-skills.svg" },
    { label: "Programming Skills(PART 2)", logoSrc: "programming-skills.svg" },
    { label: "Projects(PART 1)", logoSrc: "projects.svg" },
    { label: "Projects(PART 2)", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 90 },
    { skill: "Node JS", ratingPercentage: 90 },
    { skill: "Mongo Db", ratingPercentage: 85 },
    { skill: "HTML5", ratingPercentage: 98 },
    { skill: "CSS3", ratingPercentage: 98 },
    { skill: "EJS", ratingPercentage: 90 },
    { skill: "Bootstrap", ratingPercentage: 98 },
    { skill: "Mongoose", ratingPercentage: 85 },
    { skill: "MYSQL", ratingPercentage: 95 },
    { skill: "PostgreSQL", ratingPercentage: 95 },
    { skill: "PHP", ratingPercentage: 75 },
    { skill: "Postman", ratingPercentage: 78 },
    { skill: "WordPress", ratingPercentage: 65 },
  ];

  const programmingSkillsDetails2 = [
    { skill: "Kotlin", ratingPercentage: 75 },
    { skill: "Android Studio", ratingPercentage: 75 },
    { skill: "C++", ratingPercentage: 90 },
    { skill: "C", ratingPercentage: 90 },
    { skill: "DSA", ratingPercentage: 65 },
    { skill: "Core Java", ratingPercentage: 90 },
    { skill: "Adobe Photoshop", ratingPercentage: 98 },
    { skill: "Adobe Illustrator", ratingPercentage: 98 },
    { skill: "Adobe XD", ratingPercentage: 98 },
    { skill: "Adobe Indesign", ratingPercentage: 98 },
    { skill: "Figma", ratingPercentage: 80 },
    { skill: "Canva", ratingPercentage: 95 },
    { skill: "Jquery", ratingPercentage: 80 },
    { skill: "English Spoken & Written", ratingPercentage: 99 },
  ];

  const projectsDetails = [
    {
      title: "ZERO HUNGER WEBSITE (BITBOX HACKATHON)",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Best Freshers Winning Hackathon Project",
      subHeading: "CONTRIBUTION: UI Design, Front end development",
    },
    {
      title: "UNIFORMITY WEBSITE (MAIT HACKATHON)",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "TOP 12 and one out of 90+ projects to reach the final round.",
      subHeading:
        "CONTRIBUTION: UI Design, Front end development",
    },
    {
      title: "ECOMMERCE WEBSITE (AMAZON CLONE) ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Online e-commerce website for showcasing and selling products online with payment system integration using Stripe",
      subHeading:
        "Personal Full Stack Web Development Project.",
    },
    {
      title: "LooPHole SEARCH ENGINE",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Search engine similar to Yahoo, Google etc. to search and display the informational data worldwide. ",
      subHeading:
        "Personal Full Stack Web Development Project.",
    },
  ];

  const projectsDetails2 = [
    {
      title: "FILE SEARCH ENGINE",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "College Semester 3 Project to search any letter, word or sentence in the entire text file. Project includes Data Structures and Algorithm Concepts.",
      subHeading: "LANGUAGE: C++",
    },
    {
      title: "SNAKE, WATER, GUN",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "College Semester 1 Project to play the game between human and computer just like virtual scissors, paper and rock. ",
      subHeading:
        "LANGUAGE: C",
    },
    {
      title: "YELPCAMP",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "For making different campgrounds for diffrent users, adding pictures and locating the campgrounds on geographical map using mapbox.",
      subHeading:
        "Personal Full Stack Web Development Project",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Jaypee Institute Of Information Technology, Noida"}
        subHeading={"BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE"}
        fromDate={"2020"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"G.D. Goenka Public School, Patna"}
        subHeading={"GRADE 12"}
        description={"PERCENTAGE: 84.8%"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"G.D. Goenka Public School, Patna"}
        subHeading={"GRADE 10"}
        description={"CGPA: 10"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"MomentTrack.com, USA"}
          subHeading={"UI/UX Designer (FREELANCER)"}
          fromDate={"February, 2021 "}
          toDate={"September, 2021"}
        />
        <br />
         <ResumeHeading
          heading={"WeSettle"}
          subHeading={"FRONT END DEVELOPER (FREELANCER)"}
          fromDate={"November, 2021 "}
          toDate={"November, 2021"}
        />
        <br />
         <ResumeHeading
          heading={"Internation MUN"}
          subHeading={"CAMPUS AMBASSADOR"}
          fromDate={"August, 2021 "}
          toDate={"September, 2021"}
        />
         <br />
         <ResumeHeading
          heading={"sarkarischool.in and Wecitizen's Foundation"}
          subHeading={"GRAPHIC DESIGNER - CREATIVE HEAD - COMMUNICATION CO-HEAD"}
          fromDate={"May, 2021 "}
          toDate={"August, 2021"}
        />
        </div>
      </div>,

       <div className="resume-screen-container" key="work-experience">
       <div className="experience-container">
          <ResumeHeading
          heading={"challengemii"}
          subHeading={"UI/UX Designer (FREELANCER)"}
          fromDate={"July, 2021 "}
          toDate={"July, 2021"}
        />

         <br />
         <ResumeHeading
          heading={"codeflow"}
          subHeading={"MENTEE"}
          fromDate={"March, 2022 "}
          toDate={"March, 2022"}
        />
         <br />
         <ResumeHeading
          heading={"Google Developer Student's Club(GDSC)"}
          subHeading={"DESIGN COORDINATOR"}
          fromDate={"September, 2021"}
          toDate={"Present"}
        />
             <br />
         <ResumeHeading
          heading={"Prismatic Graphic Design Hub Of College "}
          subHeading={"GRAPHIC DESIGNER"}
          fromDate={"February, 2021"}
          toDate={"Present"}
        />
  
  
         </div>
          </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

<div
className="resume-screen-container programming-skills-container"
key="programming-skills"
>
{programmingSkillsDetails2.map((skill, index) => (
  <div className="skill-parent" key={index}>
    <div className="heading-bullet"></div>
    <span>{skill.skill}</span>
    <div className="skill-percentage">
      <div
        style={{ width: skill.ratingPercentage + "%" }}
        className="active-percentage-bar"
      ></div>
    </div>
  </div>
))}
</div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,


<div className="resume-screen-container" key="projects">
{projectsDetails2.map((projectsDetails2, index) => (
  <ResumeHeading
    key={index}
    heading={projectsDetails2.title}
    subHeading={projectsDetails2.subHeading}
    description={projectsDetails2.description}
    fromDate={projectsDetails2.duration.fromDate}
    toDate={projectsDetails2.duration.toDate}
  />
))}
</div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Content Writing"
        description="Apart from being a tech enthusiast and a code writer, i also love to write diffrent poems and different contents. I love writing or answering people on quora and elated to have 12k content views."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's Slow songs is at times the best stress reliever that i can get my hands on."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
