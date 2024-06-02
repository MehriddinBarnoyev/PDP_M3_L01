import React from "react";
import ServiceWrapper from "./ServiceWrapper";
import { Box, Typography, Grid } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import ChecklistIcon from '@mui/icons-material/Checklist';
import BarChartIcon from '@mui/icons-material/BarChart';
// import BinocularsIcon from '@mui/icons-material/Binoculars';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';

const Services = () => {
  return (
    <ServiceWrapper>
      <section id="services" className="services">
        <div className="container">
          <Box className="section-title" sx={{textAlign:"left"}}>
            <Typography variant="h2">Services</Typography>
            <Typography>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
              consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
              in iste officiis commodi quidem hic quas.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4} data-aos="fade-up">
              <div className="icon-box">
                <WorkIcon className="icon" />
                <Typography variant="h4" className="title">
                  <a href="#">Lorem Ipsum</a>
                </Typography>
                <Typography className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="100">
              <div className="icon-box">
                <ChecklistIcon className="icon" />
                <Typography variant="h4" className="title">
                  <a href="#">Dolor Sitema</a>
                </Typography>
                <Typography className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box">
                <BarChartIcon className="icon" />
                <Typography variant="h4" className="title">
                  <a href="#">Sed ut perspiciatis</a>
                </Typography>
                <Typography className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="300">
              <div className="icon-box">
                {/* <BinocularsIcon className="icon" /> */}
                <Typography variant="h4" className="title">
                  <a href="#">Magni Dolores</a>
                </Typography>
                <Typography className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="400">
              <div className="icon-box">
                <BrightnessHighIcon className="icon" />
                <Typography variant="h4" className="title">
                  <a href="#">Nemo Enim</a>
                </Typography>
                <Typography className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="500">
              <div className="icon-box">
                <CalendarViewWeekIcon className="icon" />
                <Typography variant="h4" className="title">
                  <a href="#">Eiusmod Tempor</a>
                </Typography>
                <Typography className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </ServiceWrapper>
  );
};

export default Services;
