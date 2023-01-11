import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const StyledSocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;

  a {
    padding-right: 16px;
    font-size: 20px;
    color: ${({ theme }) => theme.textColor};
  }
  :hover {
    color: ${({ theme }) => theme.textColorAlt};
  }
`

function SocialMedia() {
  return (
    <StyledSocialMedia>
      <div className="home_social">
        <a href="https://www.linkedin.com/in/glauciellec/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/eidizai_portugues/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/glauciellesa">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </StyledSocialMedia>
  )
}

export default SocialMedia
