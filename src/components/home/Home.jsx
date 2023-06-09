import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import CV from "../../assets/Zoe-Cv.pdf";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Salut, <span>Je suis</span>
          </p>

          <h1 className="home__title text-cs">
            <span>WERNER</span> MONA
          </h1>

          <p className="home__job">
            <span className="text-cs">Je suis</span> <b>Développeur Web</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                12 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">330</span>

              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            From France, Paris. I have rich experience in web design, also I am
            good at wordpress. I love to talk with you about our unique
          </p>

          <div className="home__socials">
            <a
              href="https://www.twitter.com/"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.dribbble.com/"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <FaDribbble />
            </a>

            <a
              href="https://www.behance.com/"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <FaBehance />
            </a>
          </div>

          <div className="home__btns">
            <a download="" href={CV} className="btn text-cs">
              Download CV
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Web Developer</span>
      </div>
    </section>
  );
};

export default Home;
