import Image from "next/image"
import techimg from "../img/tech.jpg"
import styled from "styled-components"

const StyledBanner = styled.div`
  margin-top: 50px;
  .banner {
    float: inline-end;
    object-fit: cover;
    width: 100vw;
    height: 30vh;
  }
`

function Banner() {
  return (
    <StyledBanner>
      <Image alt="" className="banner" src={techimg} />
    </StyledBanner>
  )
}

export default Banner
