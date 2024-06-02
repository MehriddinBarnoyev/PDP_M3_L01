import styled from "styled-components";

const ResumeWrapper = styled.div`
  background-color: #f5f5f5;
  .container {
    max-width: 960px;
    margin: 0 auto;
  }

  .section-title {
    text-align: left;
    padding-left: 10px;
  }

  .resume-title {
    margin-top: 20px;
    font-size: 1.5rem;
  }

  .resume-item {
    margin-bottom: 20px;
  }

  .resume-item h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .resume-item h5 {
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
  }

  .resume-item ul {
    list-style: none;
    padding-left: 0;
  }

  .resume-item ul li {
    margin-bottom: 5px;
  }
`;

export default ResumeWrapper;
