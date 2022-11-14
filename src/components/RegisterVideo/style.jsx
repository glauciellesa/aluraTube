import styled from "styled-components"

export const StyledRegisterVideo = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: inherit;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .selectPlaylist {
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    background-color: ${({ theme }) => theme.backgroundBase};
  }

  option {
    font-size: 100px;
    color: red;
    background-color: #ffffff;
  }

  button[type="submit"] {
    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    color: inherit;
    cursor: pointer;
  }
  form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.6);
    /* backdrop-filter: blur(0.2rem); */ /* Ver como add supports */
    position: fixed;
    inset: 0; /* top, botton, left, right */
    z-index: 100;
    display: flex;
    justify-content: center;
    & > div {
      /* Primeira div dentro do formulário */
      flex: 1;
      border-radius: 8px;
      max-width: 320px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 16px;
      padding-top: 40px;
    }
  }
  @supports (backdrop-filter: blur(1rem)) {
    form {
      background-color: hsl(20, 6%, 93%, 0.2);
      backdrop-filter: blur(1rem);
    }
  }
  input {
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  .thumbImg {
    display: flex;
    justify-content: center;
    padding: 8px;
    margin-bottom: 10px;

    img {
      width: 40vw;
      height: 30vh;
      background-color: red;
      object-fit: cover;
    }
  }
`
