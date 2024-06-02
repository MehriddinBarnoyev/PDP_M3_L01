import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <Container>
        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="h2"
            sx={{
              color: "#122D52",
              lineHeight: "38px",
              fontWeight: 700,
              mb: 2,
              pt: 3,
            }}
          >
            Contact
          </Typography>
          <Typography variant="body1">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>
        </Box>
        <Grid container spacing={4} className="mt-3">
          <Grid item xs={12} lg={5} className="d-flex align-items-stretch">
            <Box className="info" sx={{ textAlign: "left" }}>
              <div className="address d-flex pt-3">
                <LocationOnIcon sx={{ color: "blue" }} />
                <Typography variant="h5"  sx={{marginLeft:"8px"}}>Location:</Typography>
                <Typography variant="body1" sx={{marginTop:"4px", fontSize:"20px"}} className="ms-3">
                  Toshkent shahar Yangi sergeli
                </Typography>
              </div>
              <div className="email d-flex pt-3">
                <EmailIcon sx={{ color: "blue" }} />
                <Typography variant="h5"  sx={{marginLeft:"8px"}}>Email:</Typography>
                <Typography variant="body1"  sx={{marginTop:"4px", fontSize:"20px"}} className="ms-3">
                  barnoyevmehriddin77@gmail.com
                </Typography>
              </div>
              <div className="phone d-flex pt-3">
                <PhoneIcon sx={{ color: "blue" }} />
                <Typography variant="h5" sx={{marginLeft:"8px"}} >Call:</Typography>
                <Typography variant="body1"  sx={{marginTop:"4px", fontSize:"20px"}} className="ms-3">+998 93 158 08 06</Typography>
              </div>
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Toshkent%20shahar%20Yangi%20sergeli&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "290px" }}
                allowFullScreen
              ></iframe>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={7}
            className="mt-5 mt-lg-0 d-flex align-items-stretch"
          >
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <input
                    type="text"
                    name="name"
                    className="form-control mt-4"
                    id="name"
                    placeholder="Your name"
                    required
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6} className="pb-5">
                  <input
                    type="email"
                    className="form-control mt-4"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </Grid>
              </Grid>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  placeholder="Text area"
                  required
                ></textarea>
              </div>
             
              <div className="text-center mt-5">
                <button type="submit" className="btn btn-outline-primary">
                  Send Message
                </button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
