import styled from "styled-components"

const StyledFavorites = styled.div`
  h2 {
    margin-bottom: 16px;
  }
  .profile {
    display: flex;
    padding: 0 20px;
    gap: 20px;
    a {
      display: flex;
      gap: 5px;
      align-items: center;
      flex-direction: column;
      justify-content: baseline;
    }

    img {
      display: block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
`

function Favorites(props) {
  const favoritesNames = props.favorites
  return (
    <StyledFavorites>
      <h2>AluraTubes Favorites</h2>
      <div className="profile">
        {favoritesNames.map((favorite) => {
          return (
            <a key={favorite.url} href={favorite.url}>
              <img
                alt="Perfil image "
                src={`https://github.com/${favorite.imgPerfil}.png`}
              />
              <span>{favorite.chanel}</span>
            </a>
          )
        })}
      </div>
    </StyledFavorites>
  )
}

export default Favorites
