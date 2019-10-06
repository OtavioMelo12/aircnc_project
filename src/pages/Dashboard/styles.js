import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  height: 100%;
  width: 100%;

  max-width: 450px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 50px;
  border-radius: 2%;
  padding: 30px;

  ul.spot-list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 30px;

    li {
      display: flex;
      flex-direction: column;

      img.thumbnail {
        width: 100%;
        height: 120px;
        border-radius: 10%;
      }

      strong {
        margin-top: 10px;
        font-size: 24px;
        color: #444;
      }

      span {
        font-size: 15px;
        color: #999;
      }
    }
  }
`;
