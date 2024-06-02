import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import DescriptionIcon from '@mui/icons-material/Description';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PeopleIcon from '@mui/icons-material/People';
import CountUp from 'react-countup';
import Box from '@mui/material/Box';
import FactsWrapper from './FactsWrapper';

const facts = [
    {
      icon: <InsertEmoticonIcon fontSize="large" sx={{ color: 'blue' }} />,
      end: 232,
      title: 'Happy Clients',
      description: 'consequuntur quae',
      color: 'blue'
    },
    {
      icon: <DescriptionIcon fontSize="large" sx={{ color: 'green' }} />,
      end: 521,
      title: 'Projects',
      description: 'adipisci atque cum quia aut',
      color: 'green'
    },
    {
      icon: <HeadsetMicIcon fontSize="large" sx={{ color: 'blue' }} />,
      end: 1453 ,
      title: 'Hours Of Support',
      description: 'aut commodi quaerat',
      color: 'red'
    },
    {
      icon: <PeopleIcon fontSize="large" sx={{ color: 'blue' }} />,
      end: 32,
      title: 'Hard Workers',
      description: 'rerum asperiores dolor',
      color: 'purple'
    }
  ];
  

export default function Facts() {
  return (
    <FactsWrapper>
      <section id="facts" className="facts pt-5 pb-5">
        <Container>
          <Box className="section-title" sx={{ textAlign: 'left', mb: 4 }}>
            <Typography variant="h2" gutterBottom  sx={{color:"#122D52", lineHeight:"38px", fontWeight:"700"}}>
              Facts
            </Typography>
            <Typography variant="body1">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Typography>
          </Box>
          <Grid container spacing={4} className="row no-gutters">
            {facts.map((fact, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={3}
                className="col d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Box className="count-box" sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                  <Box sx={{ fontSize: 50, mr: 2 }}>{fact.icon}</Box>
                  <Box>
                    <CountUp start={0} end={fact.end} duration={1} className="purecounter" />
                    <Typography variant="body1">
                      <strong>{fact.title}</strong> {fact.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </FactsWrapper>
  );
}
