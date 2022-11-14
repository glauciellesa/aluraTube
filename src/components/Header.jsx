import styled from "styled-components"
import config from "../../config.json"

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  display: flex;

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
      color: ${({ theme }) => theme.textColorBase};
      font-weight: bold;
      font-size: 16px;
    }
  }
  .repositories {
    border: 2px solid ${({ theme }) => theme.borderBase || "red"};
    color: ${({ theme }) => theme.textColor};
    font-size: 14px;
    width: 300px;
    margin-top: 10px;
    border-radius: 7px;
    overflow: hidden;
    padding: 14px;

    .status {
      display: inline-flex;
      justify-content: center;
      border: 1px solid ${({ theme }) => theme.borderBase};
      border-radius: 30px;
      font-weight: 600;
      font-size: 12px;
      width: 56px;
      padding: 3px;
      margin: 0 10px;
    }

    .ProjectName {
      color: ${({ theme }) => theme.textColor};
      font-weight: 400;
      font-size: 12px;
      margin: 10px 0;
    }

    .tech-img {
      display: inline-block;
      background-color: #d74949;
      border: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .tech {
      margin: 0 5px;
      font-weight: 400;
    }

    .star {
      margin: 0 5px;
      font-size: 16px;
      font-weight: 600;
    }
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
      <div className="gitHub-info">
        <h2>GitHub Projects</h2>
        <div className="repositories">
          <span> 🔖 </span>
          <a className="link">glauciellesa.github.io</a>
          <span className="status">Public</span>
          <p className="ProjectName">Portfolio</p>
          <div className="tech-img"></div>
          <span className="tech">HTML</span> <span className="star">☆</span>
          <span className="starNumber">1</span>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
