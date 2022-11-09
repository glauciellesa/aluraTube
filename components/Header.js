import styled from "styled-components";
import config from "../config.json"

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.user-info {
    margin-top: 60px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 36px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name} </h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

export default Header