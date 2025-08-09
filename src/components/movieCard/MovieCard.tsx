import { img_500, noPicture } from '../../utils/apiUrl'
import { handlePrecision } from '../../utils/utils'
import * as Styled from './MovieCard.style'

const MovieCard = ({ poster, name, date, vote, mediaType }: any) => {
  return (
    <Styled.MovieCardMainLayout>
      <Styled.MovieCardImageContainer>
        <Styled.MovieCardImage
          src={poster ? `${img_500}${poster}` : `${noPicture}`}
          alt='image'
        />
      </Styled.MovieCardImageContainer>
      {console.log('date===[log]===>', date)}
      <Styled.MovieName title={name}>{name}</Styled.MovieName>
      <Styled.MovieCardFooterWrapper>
        <Styled.MovieReleaseDate>
          {mediaType === 'tv' ? 'TV Series' : 'Movie'}
        </Styled.MovieReleaseDate>
        <Styled.MovieReleaseDate>
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }).format(new Date(date))}
        </Styled.MovieReleaseDate>
      </Styled.MovieCardFooterWrapper>
      <Styled.RatingContainer vote={Number(vote) > 7}>
        {vote.toFixed(1)}
      </Styled.RatingContainer>
    </Styled.MovieCardMainLayout>
  )
}

export default MovieCard
