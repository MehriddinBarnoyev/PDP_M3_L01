import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  height: 100vh;
  aside {
    background-color: #040b14;
    color: white;
    width: 200px;
    position: fixed;
    top: 0;
    height: 100%;
    span {
      font-size: 10px;
    }
    .list-group {
      .list-group-item {
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
        border: 1px solid #eee;
        margin-bottom: 10px;
        
      }
      a {
        color: black;
        text-decoration: none;
        display: block;
      }
    }
    img {
      margin: 15px auto;
      display: block;
      width: 120px;
      border: 6px solid #2c2f3f;
      max-width: 100%;
      height: auto;
      border-radius: 50px;
    }
    .menuItems {
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
      text-align: -webkit-match-parent;
      margin-top: 30px;
      padding-left: 20px;
      
    }
    .menuItem {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      color: #687180;
      margin-top: 15px;
    }
    .menuItem p {
      margin-left: 10px;
      color: grey;
      margin-top: 15px;
    }
    .menuItem:hover {
      color: #149ddd;
    }
    .menuItem p:hover {
      color: white;
    }
   
  }
  .rightSide {
    flex: 1;
    margin-left: 200px;
    max-height: 100vh;
    overflow: auto;
    position: relative;

    header {
      position: sticky !important;
      top: 0 !important;
      background-color: white;
      z-index: 1000;
    }
    main {
      input {
        border-radius: 10px;
        border: 0.5px solid gray;
        height: 40px;
      }
    }
    .info1 {
      width: 100%;
      height: 80vh;
      color: white;
      font-size: 50px;
      background: url(https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg)
        top center;
      background-size: cover;
      text-align: center;
      padding-top: 200px;
      padding-right: 0px;
      padding-left: 0px;
      .row {
        padding-right: 0px;
        padding-left: 0px;
      }
    }
  }
`;

export default HeaderWrapper;
