import React from "react";
import { Box, Typography } from "@mui/material";
import RecipeReviewCard from "./RecipeReviewCard";
import PortfolioWrapper from "../PortfolioWrapper";
import { Slide } from "react-awesome-reveal";

const cardsData = [
  {
    id: 1,
    image: "https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png",
    description: <h4>Java backend cursida qilingan project</h4>,
    githubLink: "https://github.com/MehriddinBarnoyev/Market_Backend"
  },
  {
    id: 2,
    image: "https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png",
    description: <h4>PDP Academy React.js cursida qilingan project</h4>,
    githubLink: "https://github.com/MehriddinBarnoyev/PDP_M3_L01"
  },
  {
    id: 3,
    image: "https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png",
    description: <h4>PDP Academy React.js cursida qilingan project</h4>,
    githubLink: "https://github.com/MehriddinBarnoyev/PDP_M2_L11"
  },
  {
    id: 4,
    image: "https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png",
    description: <h4>PDP Academy React.js cursida qilingan project</h4>,
    githubLink: "https://github.com/MehriddinBarnoyev/PDP_M2_L10"
  },
  {
    id: 5,
    image: "https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png",
    description: <h4>A different dish that is also perfect for gatherings</h4>,
    githubLink: "https://github.com/different-repo"
  },
  {
    id: 6,
    image: "https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png",
    description: <h4>A different dish that is also perfect for gatherings</h4>,
    githubLink: "https://github.com/different-repo"
  },
  
];

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "#122D52",
            lineHeight: "38px",
            fontWeight: 700,
            pb: 2,
          }}
        >
          Portfolio
        </Typography>
        <Box>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </Box>
        <Box display="flex" flexWrap="wrap" gap={5}>
          {cardsData.map((card) => (
              <Slide triggerOnce>
                  <RecipeReviewCard
                    key={card.id}
                    image={card.image}
                    description={card.description}
                    githubLink={card.githubLink}
                  />
              </Slide>
          ))}
        </Box>
      </Box>
    </PortfolioWrapper>
  );
};

export default Portfolio;
