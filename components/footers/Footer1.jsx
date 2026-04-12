import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer1({
  parentClass = "tmp-footer-area footer-style-4 tmp-section-gapTop pb--50",
}) {
  return (
    <div className={parentClass}>
      <div className="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
        <div className="row">
          <div className="col-lg-12">
            <div className="for-animation-inner">
              <div className="cta__line-wrap-1">
                <img
                  src="https://cdn.prod.website-files.com/672799259500d2477d1eafa5/6732fb6df497a3fa7a857752_Vector%207.svg"
                  loading="lazy"
                  alt=""
                  height={118}
                  className="cta__line-1"
                />
              </div>

              <div className="cta__line-wrap-2">
                <img
                  className="cta__line-2"
                  src="https://cdn.prod.website-files.com/672799259500d2477d1eafa5/6732fb6df497a3fa7a857752_Vector%207.svg"
                  loading="lazy"
                  alt=""
                  height={118}
                />
              </div>

              <div className="footer-area text-center">
                {/* LOGO */}
                <div className="logo">
                  <h1>Yakov-Eliya Tamam</h1>
                </div>

                {/* CTA קטן אבל חזק */}
                <p className="description mt--30">
                  Building scalable systems, real-world applications, and
                  impactful digital solutions.
                </p>

                {/* SOCIAL / CONTACT */}
                <div className="social-links mt--20">
                  <a href="mailto:Yaakovt100@gmail.com">Email</a> |{" "}
                  <a
                    href="https://www.linkedin.com/in/yakov-tamam/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>{" "}
                  |{" "}
                  <a href="https://github.com/YakovTamam" target="_blank">
                    GitHub
                  </a>
                </div>

                {/* COPYRIGHT */}
                <p className="description mt--20">
                  © {new Date().getFullYear()} Yakov-Eliya Tamam. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
