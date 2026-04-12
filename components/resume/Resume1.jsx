import React from "react";

export default function Resume1() {
  const educationExperience = [
    {
      subtitle: "2023",
      title: "Full Stack Development Course - HackerU",
      description:
        "Completed an intensive Full Stack development program covering modern web technologies, backend systems, and real-world application development.",
      animationOrder: 1,
      extraClasses: "",
    },
    {
      subtitle: "Military Service",
      title: "Simulation Developer",
      description:
        "Developed advanced simulation systems using Unity, worked in Agile (Scrum) environments, and led technical projects involving real-time systems.",
      animationOrder: 2,
      extraClasses: "",
    },
  ];

  const workExperience = [
    {
      subtitle: "Freelance / Projects",
      title: "Full Stack Developer & Entrepreneur",
      description:
        "Built and delivered production-ready systems including landing page platforms, automation tools, and AI-based solutions for real clients.",
      animationOrder: 1,
      extraClasses: "",
    },
    {
      subtitle: "CommBox",
      title: "Automation Developer",
      description:
        "Developed automation solutions for enterprise clients including Clalit and Factory, improving workflows and operational efficiency.",
      animationOrder: 2,
      extraClasses: "",
    },
    {
      subtitle: "Otter Space",
      title: "AI Developer",
      description:
        "Worked on AI-powered camera systems using Raspberry Pi, focusing on real-time processing and intelligent data handling.",
      animationOrder: 3,
      extraClasses: "",
    },
    {
      subtitle: "Personal Projects",
      title: "Founder & Product Builder",
      description:
        "Created and managed projects like Mealy and Here-I-Am, combining full stack development with product thinking and business execution.",
      animationOrder: 4,
      extraClasses: "",
    },
  ];

  const developmentSkills = [
    { title: "JavaScript / TypeScript", width: "90%", percentLabel: "90%" },
    { title: "React / Next.js", width: "90%", percentLabel: "90%" },
    { title: "Node.js / Express", width: "85%", percentLabel: "85%" },
    { title: "MongoDB / Firebase", width: "85%", percentLabel: "85%" },
    {
      title: "System Design & Architecture",
      width: "80%",
      percentLabel: "80%",
    },
    { title: "AI & Automation", width: "80%", percentLabel: "80%" },
  ];

  return (
    <div className="tmp-resume-area" id="resume">
      {/* EDUCATION */}
      <div className="inner">
        <div className="section-head text-align-left mb--50">
          <h5 className="pre-title mb--20">Education</h5>
          <h2 className="title">
            Strong Technical Foundation & Hands-on Experience
          </h2>
          <p className="description">
            My background combines formal training with real-world development
            experience, allowing me to build scalable and production-ready
            systems.
          </p>
        </div>

        <div className="row g-5">
          {educationExperience.map((item, index) => (
            <div key={index} className="col-lg-6 col-sm-6">
              <div className="education-experience-card">
                <h4 className="edu-sub-title">{item.subtitle}</h4>
                <h2 className="edu-title">{item.title}</h2>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="inner pt--60">
        <div className="section-head text-align-left mb--50">
          <h5 className="pre-title mb--20">Experience</h5>
          <h3 className="title">Real-World Development Experience</h3>
        </div>

        <div className="row g-5">
          {workExperience.map((item, index) => (
            <div key={index} className="col-lg-6 col-sm-6">
              <div className="education-experience-card">
                <h4 className="edu-sub-title">{item.subtitle}</h4>
                <h2 className="edu-title">{item.title}</h2>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div className="inner pt--60">
        <div className="row">
          <div className="col-lg-12">
            <div className="progress-wrapper">
              <div className="content">
                <div className="section-head text-align-left mb--50">
                  <h5 className="pre-title mb--20">Skills</h5>
                  <h3 className="title">Technical Skills & Expertise</h3>
                </div>

                {developmentSkills.map((skill, index) => (
                  <div key={index} className="progress-charts">
                    <h6 className="heading heading-h6">{skill.title}</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: skill.width }}
                      >
                        <span className="percent-label">
                          {skill.percentLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
