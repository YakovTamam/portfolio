"use client";
import React from "react";
import Image from "next/image";
import { blogCardList } from "@/data/blogs";
import { useContent } from "@/contexts/ContentContext";

export default function Blogs4() {
  const { setCurrentBlog } = useContent();

  return (
    <div className="tmp-blog-area" id="blog">
      <div className="inner">
        <div className="section-head text-align-left mb--50">
          <h5 className="pre-title mb--20">Insights</h5>

          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Engineering Insights & Development Learnings
          </h2>

          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
            Thoughts, lessons, and technical insights from building real-world
            systems, working with modern technologies, and solving complex
            problems in production environments.
          </p>
        </div>

        <div className="row g-5 animation-action-1">
          {blogCardList.map((item, index) => (
            <div
              key={index}
              className="col-xl-6 col-lg-6 col-md-6 col-12 paralax-image"
            >
              <div
                className={`blog-card-style-two tmp-scroll-trigger tmponhover single-animation tmp-fade-in animation-order-${
                  index + 1
                }`}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenters"
                onClick={() => setCurrentBlog(item)}
              >
                <div className="blog-card-img">
                  <div className="img-box">
                    <a href="#">
                      <Image
                        alt={item.title}
                        src={item.image}
                        width={410}
                        height={291}
                      />
                    </a>
                  </div>
                </div>

                <div className="blog-content-wrap">
                  <div className="blog-tags">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-user" />
                          {item.author}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-comments" />
                          {item.comments} Insights
                        </a>
                      </li>
                    </ul>
                  </div>

                  <h3 className="blog-title">
                    <a href="#">{item.title}</a>
                  </h3>

                  <div className="tmp-button-here">
                    <a
                      className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon"
                      href="#"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Read Insight</span>
                        <div className="btn-hack" />
                        <Image
                          alt=""
                          className="btn-bg"
                          src="/assets/images/button/btg-bg.svg"
                          width={195}
                          height={56}
                        />
                        <Image
                          alt=""
                          className="btn-bg-hover"
                          src="/assets/images/button/btg-bg-2.svg"
                          width={193}
                          height={62}
                        />
                        <span className="btn-icon">
                          <i className="ffa-sharp fa-regular fa-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="ffa-sharp fa-regular fa-arrow-right" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className={`tmp-light light-${item.lightPosition}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
