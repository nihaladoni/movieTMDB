import { useEffect, useState } from 'react'

import { useGetTrending } from '../../hooks/useTrending'
import { img_1280, img_300 } from '../../utils/apiUrl'
import * as Styled from './MainCard.style'

const MainCard = () => {
  const { data } = useGetTrending()
  const [currentMovie, setCurrentMovie] = useState({
    backdrop_path: '',
    original_title: '',
    overview: '',
    poster_path: '',
    original_name: '',
  })

  useEffect(() => {
    const itemIndex = Math.floor(Math.random() * 20)
    if (data) {
      setCurrentMovie(data?.pages?.[0].results?.[itemIndex])
    }
  }, [data])

  return (
    <Styled.MainCardContainer bgUrl={img_1280 + currentMovie?.backdrop_path}>
      <Styled.MovieInfoContainer>
        <Styled.InfoDiv>
          <h1>{currentMovie?.original_title || currentMovie?.original_name}</h1>
          <p>{currentMovie?.overview}</p>
        </Styled.InfoDiv>

        <Styled.ImageContainer>
          <img src={img_300 + currentMovie?.poster_path} alt='poster image' />
        </Styled.ImageContainer>
      </Styled.MovieInfoContainer>
    </Styled.MainCardContainer>
  )
}

export default MainCard
