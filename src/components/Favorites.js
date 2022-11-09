import styled from "styled-components"

const StyledFavorites = styled.div``

function Favorites(props) {
  const favoritesNames = props.favorites
  return (
    <StyledFavorites>
      <h2>AluraTubes Favorites</h2>
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
    </StyledFavorites>
  )
}

export default Favorites
