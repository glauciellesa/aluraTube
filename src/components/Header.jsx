import styled from "styled-components"
import config from "../../config.json"

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  width: 100%;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }

  .gitHub-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 32px;
    margin-top: 40px;

    p {
      color: ${({ theme }) => theme.textColor};
      font-weight: bold;
      font-size: 16px;
    }
  }
`

const StyledBanner = styled.div`
  background-image: url(${config.bgImage});
  background-position: -110px -127px;
  height: 170px;
  @media (max-width: 400px) {
    background-position: -240px;
  }
`

function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name} </h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

export default Header
