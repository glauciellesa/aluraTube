import styled from "styled-components"
import config from "../../config.json"

const StyledHeader = styled.div`
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
`

const StyledBanner = styled.div`
  background-image: url(${config.bgImage});
  background-position: 0 -240px;
  height: 230px;
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
