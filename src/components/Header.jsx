import styled from "styled-components"
import config from "../../config.json"
import SocialMedia from "./SocialMedia"

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  width: 100%;
  line-height: 1.6;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }

  p {
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
    font-size: 16px;
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
          <SocialMedia />
        </div>
      </section>
    </StyledHeader>
  )
}

export default Header
