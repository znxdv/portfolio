import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import xLight from '../../assets/twitter-light.svg'
import xDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from "../../common/ThemeContext";

function Hero() {

  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const xIcon = theme === 'light' ? xLight : xDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="FD Profile Picture" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>Mhd. <br /> Fauzan Devinto</h1>
        <h2>FullStack Developer</h2>
          <span>
            <a href="https://twitter.com" target="_blank">
              <img src={xIcon} alt="X Icon" />
            </a>
            <a href="https://github.com/znxdv" target="_blank">
              <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/fauzan-devinto-5a42931a7/" target="_blank">
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web for commercial business.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
