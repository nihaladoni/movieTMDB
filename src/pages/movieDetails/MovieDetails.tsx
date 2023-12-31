import { BsYoutube } from 'react-icons/bs'
import { useLocation, useParams } from 'react-router-dom'

import LoadingSpinner from '../../components/uploadSpinner/LoadingSpinner'
import { useGetVideo } from '../../hooks/useGetVideo'
import { useGetMovieDetails } from '../../hooks/useMovieDetails'
import * as SharedStyled from '../../styles/sharedStyles'
import { img_500, noPicture } from '../../utils/apiUrl'
import * as Styled from './MovieDetails.style'

const MovieDetails = () => {
  const { id } = useParams()
  const query = new URLSearchParams(useLocation().search)
  const media_type = query.get('media_type')

  const options = {
    id: id,
    media_type: media_type,
  }

  const {
    data: moviesData,
    isError: movieError,
    isFetching: movieFetching,
    isLoading: movieLoading,
  } = useGetMovieDetails(options)
  const {
    data: videoData,
    isError: videoError,
    isFetching: videoFetching,
    isLoading: videoLoading,
  } = useGetVideo(options)

  return (
    <SharedStyled.Container width='90%'>
      <SharedStyled.OpacityAnimation>
        <Styled.MovieDetailsMainLayout>
          <SharedStyled.Wrapper>
            {movieLoading || movieFetching ? (
              <LoadingSpinner innerSize='20' outerSize='50' />
            ) : (
              <Styled.MovieDetailsContainer>
                <Styled.MovieDetailsLeftContainer>
                  <Styled.MovieDetailsImageContainer>
                    <Styled.MovieDetailsImage
                      src={
                        moviesData?.poster_path
                          ? `${img_500}${moviesData?.poster_path}`
                          : `${noPicture}`
                      }
                      alt='img'
                    />
                    <Styled.RatingContainer
                      vote={Number(moviesData?.vote_average)}
                    >
                      {Number(moviesData?.vote_average).toFixed(1)}
                    </Styled.RatingContainer>
                  </Styled.MovieDetailsImageContainer>
                </Styled.MovieDetailsLeftContainer>
                <Styled.MovieDetailsRightContainer>
                  <Styled.MovieDetailsTitle>
                    {moviesData?.title || moviesData?.name}
                  </Styled.MovieDetailsTitle>
                  <Styled.MovieDetailsSubTitle>
                    {moviesData?.tagline}
                  </Styled.MovieDetailsSubTitle>
                  <Styled.MovieDetailsDescription>
                    {moviesData?.overview}
                  </Styled.MovieDetailsDescription>
                  <Styled.MovieDetailsGenre>
                    Genre:
                    {moviesData?.genres?.map((value: any) => (
                      <div key={value?.id}>{value?.name}</div>
                    ))}
                  </Styled.MovieDetailsGenre>
                  <Styled.MovieDetailsGenre>
                    Release Date:{' '}
                    <div>
                      {moviesData?.release_date || moviesData?.last_air_date}
                    </div>
                  </Styled.MovieDetailsGenre>
                  <Styled.MovieDetailsGenre>
                    Language:
                    {moviesData?.spoken_languages?.map(
                      (value: any, index: number) => (
                        <div key={index}>{value?.english_name}</div>
                      )
                    )}
                  </Styled.MovieDetailsGenre>
                  <Styled.MovieDetailsGenre>
                    Runtime:{' '}
                    <div>
                      {moviesData?.runtime || moviesData?.episode_run_time[0]}{' '}
                      minutes
                    </div>
                  </Styled.MovieDetailsGenre>
                  <Styled.ButtonWrapper>
                    <SharedStyled.StyledLink
                      to={`/cast/${id}?media_type=${media_type}`}
                    >
                      <Styled.WatchTrailerButton bg='#4AB8A1'>
                        Cast and Crew
                      </Styled.WatchTrailerButton>
                    </SharedStyled.StyledLink>
                  </Styled.ButtonWrapper>
                  <Styled.ButtonWrapper>
                    <a
                      target='_blank'
                      href={`https://www.youtube.com/watch?v=${videoData?.results[0]?.key}`}
                    >
                      <Styled.WatchTrailerButton bg='#b269f6'>
                        <BsYoutube style={{ marginRight: '8px' }} />
                        Watch Trailer
                      </Styled.WatchTrailerButton>
                    </a>
                  </Styled.ButtonWrapper>
                </Styled.MovieDetailsRightContainer>
              </Styled.MovieDetailsContainer>
            )}
          </SharedStyled.Wrapper>
        </Styled.MovieDetailsMainLayout>
      </SharedStyled.OpacityAnimation>
    </SharedStyled.Container>
  )
}

export default MovieDetails
