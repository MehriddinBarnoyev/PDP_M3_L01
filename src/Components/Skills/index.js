import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import SkillsWrapper from "./SkillsWrapper";
import { Slide } from "react-awesome-reveal";

const skills = [
  { name: "Java Core", value: 100 },
  { name: "HTML", value: 90 },
  { name: "JavaScript", value: 75 },
  { name: "CSS", value: 80 },
  { name: "React Js", value: 90 },
  { name: "Spring", value: 55 },
];

const SkillWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  ".skill": {},
  ".progress-bar-wrap": {
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
  },
  ".progress-bar": {
    height: theme.spacing(1.5),
  },
}));

export default function Skills() {
  return (
    <SkillsWrapper>
      <section id="skills" className="skills section-bg pt-5">
        <Container>
          <Box className="section-title" sx={{ textAlign: "left", mb: 4 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ color: "#122D52", lineHeight: "38px", fontWeight: "700" }}
            >
              Skills
            </Typography>
            <Typography variant="body1">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Typography>
          </Box>
          <Grid container spacing={4} className="skills-content">
            <Grid item xs={12} sm={6} data-aos="fade-up">
              {skills.slice(0, 3).map((skill, index) => (
                <Slide direction={"left"} triggerOnce>
                  <SkillWrapper key={index}>
                    <div className="skill">
                      <span>{skill.name}</span>
                      <i className="val">{skill.value}%</i>
                    </div>
                    <div className="progress-bar-wrap">
                      <LinearProgress
                        className="progress-bar"
                        variant="determinate"
                        value={skill.value}
                      />
                    </div>
                  </SkillWrapper>
                </Slide>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-delay="100">
              {skills.slice(3).map((skill, index) => (
                <Slide direction={"right"} triggerOnce>
                  <SkillWrapper key={index}>
                    <div className="skill">
                      <span>{skill.name}</span>
                      <i className="val">{skill.value}%</i>
                    </div>
                    <div className="progress-bar-wrap">
                      <LinearProgress
                        className="progress-bar"
                        variant="determinate"
                        value={skill.value}
                      />
                    </div>
                  </SkillWrapper>
                </Slide>
              ))}
            </Grid>
          </Grid>
        </Container>
      </section>
    </SkillsWrapper>
  );
}
