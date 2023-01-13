import styled from "styled-components"

export const StyledRegisterVideo = styled.div`
  .add-video {
    width: 40px;
    height: 40px;
    font-size: 30px;
    color: inherit;
    position: fixed;
    bottom: 30px;
    right: 30px;
    border: 0;
    background-color: #ea0909;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
    :hover {
      background-color: red;
    }
  }
  .close-modal {
    font-size: 20px;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 10px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .selectPlaylist {
    height: 35px;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColor};
  }

  button[type="submit"] {
    background-color: #d93131;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
  }

  form {
    width: 100%;
    padding: 2%;
    /* backdrop-filter: blur(0.2rem); */ /* Ver como add supports */
    position: fixed;
    inset: 0; /* top, botton, left, right */
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      /* Primeira div dentro do formulário */
      flex: 1;
      border-radius: 8px;
      max-width: 400px;
      background-color: ${({ theme }) => theme.backgroundLevel2 || "red"};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 40px 8px;
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
    font-weight: 100;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  .thumbImg {
    display: flex;
    justify-content: center;
    padding: 8px;
    margin-bottom: 10px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
  @media (max-width: 400px) {
    form {
      & > div {
        max-width: 320px;
      }
      .thumbImg {
        display: flex;
        justify-content: center;
        padding: 2px;
        margin-bottom: 10px;
      }
      option {
        background-color: red;
      }
    }
  }
`
