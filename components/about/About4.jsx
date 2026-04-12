import React from "react";
import OdometerComponent from "../common/OdometerComponent";

export default function About4() {
  const aboutCards = [
    {
      title: "Full Stack Development",
      description:
        "Building scalable and production-ready web applications using modern technologies like React, Next.js, and Node.js.",
      iconClass: "fa-solid fa-code",
      animationOrder: 1,
      lightClass: "light-1",
    },
    {
      title: "System Architecture",
      description:
        "Designing efficient, maintainable, and scalable systems with a strong focus on performance and clean architecture.",
      iconClass: "fa-solid fa-diagram-project",
      animationOrder: 2,
      lightClass: "light-2",
    },
    {
      title: "AI & Automation",
      description:
        "Developing intelligent tools and automation systems that optimize workflows and solve real-world problems.",
      iconClass: "fa-solid fa-robot",
      animationOrder: 3,
      lightClass: "light-3",
    },
    {
      title: "Product & Business Thinking",
      description:
        "Combining technical expertise with product thinking and real business experience to build impactful solutions.",
      iconClass: "fa-solid fa-lightbulb",
      animationOrder: 4,
      lightClass: "light-4",
    },
  ];

  const counterData = [
    {
      count: 20,
      unit: "+",
      text: "Projects Delivered",
      animationOrder: 1,
    },
    {
      count: 10,
      unit: "+",
      text: "Real Clients & Products",
      animationOrder: 2,
    },
    {
      count: 3,
      unit: "+",
      text: "Years of Experience",
      animationOrder: 3,
    },
    {
      count: 100,
      unit: "%",
      text: "Commitment to Results",
      animationOrder: 4,
    },
  ];

  return (
    <div id="about" className="tmp-about-area">
      <div className="about-us-right-content-wrap">
        <div className="section-head text-align-left mb--50">
          <h5 className="pre-title mb--20">About Me</h5>

          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Full Stack Developer <br />
            Building Real-World Systems
          </h2>

          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
            I'm a Full Stack Developer and tech-oriented entrepreneur with
            hands-on experience building real-world applications and systems. I
            specialize in modern web technologies such as React, Next.js, and
            Node.js, with a strong focus on performance, scalability, and clean
            architecture.
            <br />
            <br />
            Beyond coding, I bring product and business understanding into every
            project, allowing me to build solutions that are not only
            technically solid but also impactful and aligned with real user
            needs.
          </p>
        </div>

        <div className="about-us-section-card row g-5 animation-action-1">
          <h3>How I Create Impact</h3>

          {aboutCards.map((card, index) => (
            <div
              className="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image"
              key={index}
            >
              <div
                className={`about-us-card tmp-scroll-trigger tmp-fade-in tmponhover single-animation tmp-control animation-order-${card.animationOrder}`}
              >
                <div className="card-head">
                  <div className="logo-img">
                    <i className={card.iconClass} />
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                </div>
                <p className="card-para">{card.description}</p>
                <div className={`tmp-light ${card.lightClass}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="pt--40">
          <div className="row g-5">
            {counterData.map((item, index) => (
              <div className="col-lg-3 col-sm-6 col-12" key={index}>
                <div
                  className={`counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-${item.animationOrder}`}
                >
                  <h3 className="counter counter-title">
                    <OdometerComponent max={item.count} />
                    {item.unit}
                  </h3>
                  <p className="counter-para">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
