import styled from "styled-components";

const ServiceWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 60px 0;

  .container {
    max-width: 960px;
    margin: 0 auto;
    text-align: start;
  }

  .section-title {
    text-align: left;
    padding-bottom: 30px;
  }

  .section-title h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .section-title p {
    font-size: 1rem;
    color: #666;
  }

  .icon-box {
    margin-bottom: 20px;
    text-align: center;
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }

  .icon-box:hover {
    transform: translateY(-10px);
  }

  .icon-box .icon {
    font-size: 4rem;
    margin-bottom: 20px;
    color: #3498db;
  }

  .icon-box .title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .icon-box .description {
    font-size: 1rem;
    color: #666;
  }
`;

export default ServiceWrapper;
