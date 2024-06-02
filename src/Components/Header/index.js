import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import About from "../About";
import rasm1 from "../Images/mine.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import EmailIcon from "@mui/icons-material/Email";
import { Button, Link, Tooltip } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { Slide } from "react-awesome-reveal";
import { Animated } from "react-animated-css";
import Facts from "../Facts";
import Skills from "../Skills";
import Resume from "../Resume";
// import Service from "../Services";
import Contact from "../Contact";

const Header = () => {
  const menu = ["Home", "About", "Resume", "Portfolio", "Services", "Contact"];
  const icons = [
    <HomeIcon key="home" />,
    <PersonIcon key="person" />,
    <SummarizeIcon key="summarize" />,
    <AssignmentTurnedInIcon key="assignment" />,
    <MiscellaneousServicesIcon key="services" />,
    <EmailIcon key="email" />,
  ];

  return (
    <HeaderWrapper>
      <aside className="p-3 ">
        <div>
          <img src={rasm1} alt="Profile" />
          <div className="d-flex">
            <Link
              href="https://www.linkedin.com/in/mehriddin-barnoyev-78a016294/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Tooltip title="LinkedIn">
                  <LinkedInIcon />
                </Tooltip>
              </Button>
            </Link>
            <Link
              href="https://t.me/Barn04ev08_06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Tooltip title="Telegram">
                  <TelegramIcon />
                </Tooltip>
              </Button>
            </Link>
            <Link
              href="https://www.instagram.com/barnoyev_0806?igsh=MW1xa2FqY3gzZ3Bxdg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Tooltip title="Instagram">
                  <InstagramIcon />
                </Tooltip>
              </Button>
            </Link>
          </div>
          <div className="menuItems">
            {menu.map((item, index) => (
              <div key={index} className="menuItem ">
                {icons[index]}

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <div className="rightSide ">
        <div className="info1">
          <div className="row">{/* <h1>Barnoyev Mehriddin</h1> */}</div>
          {/* <div className="row">
            </div> */}
          <Slide></Slide>
          <Animated
            animationIn="rubberBand"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div>
              {" "}
              <p>Barnoyev Mehriddin</p>
            </div>
          </Animated>
          <div className="mt-5">
            <TypeAnimation
              sequence={[
                "I'm Java developer",
                1000,
                "I'm React js developer",
                1000,
                "I'm frontend developer",
                1000,
                "I'm backend developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "30px", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
        <About />
        <Facts />
        <Skills />
        <Resume />
        {/* <Service/> */}
        <Contact />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
