// src/App.js
import React from "react";
import ResumeWrapper from "./ResumeWrapper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Resume = () => {
  return (
    <ResumeWrapper>
      <Box id="resume" sx={{ py: 4 }}>
        <Container>
          <Box className="section-title pt-5" sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h2"
              sx={{
                color: "#122D52",
                lineHeight: "38px",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Resume
            </Typography>
            <Typography variant="body1">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 2 , textAlign:"left"}}>
                Summary
              </Typography>
              <Box sx={{textAlign:"left", mb:"4"}}>
                <Typography variant="h4">Alex Smith</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic", mb: 2 }}>
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Portland par 127, Orlando, FL" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="(123) 456-7891" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="alice.barkley@example.com" />
                  </ListItem>
                </List>
              </Box>
              <Typography variant="h3" sx={{ mb: 2 , textAlign:"left"}}>
                Education
              </Typography>
              <Box sx={{textAlign:"left", mb:"4"}}>
                <Typography variant="h4">
                  Master of Fine Arts & Graphic Design
                </Typography>
                <Typography variant="subtitle1">2015 - 2016</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  Rochester Institute of Technology, Rochester, NY
                </Typography>
                <Typography variant="body1">
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend.
                </Typography>
              </Box>
              <Box sx={{textAlign:"left", mb:"4"}}>
                <Typography variant="h4">
                  Bachelor of Fine Arts & Graphic Design
                </Typography>
                <Typography variant="subtitle1">2010 - 2014</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  Rochester Institute of Technology, Rochester, NY
                </Typography>
                <Typography variant="body1">
                  Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                  reiciendis et quis Eius vel ratione eius unde vitae rerum
                  voluptates asperiores voluptatem Earum molestiae consequatur
                  neque etlon sader mart dila.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                Professional Experience
              </Typography>
              <Box sx={{textAlign:"left", mb:"4"}}>

                <Typography variant="h4">
                  Senior graphic design specialist
                </Typography>
                <Typography variant="subtitle1">2019 - Present</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  Experion, New York, NY
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Lead in the design, development, and implementation of the graphic, layout, and production communication materials." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Oversee the efficient use of production project budgets ranging from $2,000 - $25,000." />
                  </ListItem>
                </List>
              </Box>
              <Box sx={{textAlign:"left"}}>
                <Typography variant="h4">Graphic design specialist</Typography>
                <Typography variant="subtitle1">2017 - 2018</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  Stepping Stone Advertising, New York, NY
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements)." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Managed up to 5 projects or tasks at a given time while under pressure." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Recommended and consulted with clients on the most appropriate graphic design." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Created 4+ design presentations and proposals a month for clients and account managers." />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ResumeWrapper>
  );
};

export default Resume;
