import styled from "styled-components";

const AboutWrapper = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */

  h1 {
    font-size: 2em;
    margin-bottom: 10px;
    text-align: left;
  }

  p {
    line-height: 1.6;
    font-size: 1em;
  }

  .rasmSide img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  ul li i {
    margin-right: 10px;
  }
`;

export default AboutWrapper;
