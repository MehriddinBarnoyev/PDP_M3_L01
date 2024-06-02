import React from "react";
import AboutWrapper from "./AboutWrapper";
import rasm1 from "../Images/mine.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <AboutWrapper className="pt-3">
      <h1>About</h1>
      <div>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
          impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
          quidem hic quas.
        </p>
      </div>

      <div>
        <div className="row">
          <div className="col-4 rasmSIde ">
            <Slide direction={"left"}>
            <img src={rasm1} alt="" className="w-100" />
            </Slide>
          </div>
          <div className="col-6">
            <div>
              <h2 style={{ color: "#122D52" }}>
                UI/UX Designer & Web Developer.
              </h2>
              <p className="ms-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Container>
                <Row>
                  <Col lg={6}>
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span> 6 Augst 2004</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span> www.example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span> +998 93 158 08 06</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span> Tashkent, UZB</span>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6} className="">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span> 20</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span> Junior</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span> barnoyevmehriddin77@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores
          </p>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
