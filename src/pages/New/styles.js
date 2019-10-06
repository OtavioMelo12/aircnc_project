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
  border-radius: 6px;
  padding: 30px;

  form {
    display: flex;
    flex-direction: column;

    label#thumbnail {
      margin-bottom: 20px;
      border: 1px dashed #999;
      background-size: cover;
      cursor: pointer;
      height: 160px;

      display: flex;
      justify-content: center;
      align-items: center;

      input {
        display: none;
      }
    }

    label#thumbnail.has-thumbnail {
      border: 0;
      img {
        display: none;
      }
    }

    label {
      font-size: 14px;
      color: #444;
      font-weight: bold;
      margin-bottom: 8px;

      span {
        font-weight: normal;
        color: #999;
        font-size: 12px;
      }
    }

    input {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 3px;
      height: 45px;
      padding: 0 15px;
      font-size: 16px;
    }
  }
`;
