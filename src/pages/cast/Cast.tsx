import { useLocation, useParams } from 'react-router-dom'

import { useGetCastData } from '../../hooks/useGetCastData'
import * as SharedStyled from '../../styles/sharedStyles'
import { img_500, noPicture } from '../../utils/apiUrl'
import { handlePrecision } from '../../utils/utils'
import * as Styled from './Cast.style'

const Cast = () => {
  const { id } = useParams()
  const query = new URLSearchParams(useLocation().search)
  const media_type = query.get('media_type')

  const options = {
    id: id,
    media_type: media_type,
  }

  const {
    data: castData,
    isError: castError,
    isFetching: castFetching,
    isLoading: castLoading,
  } = useGetCastData(options)

  return (
    <SharedStyled.Container width='90%'>
      <SharedStyled.OpacityAnimation>
        <SharedStyled.Wrapper>
          <SharedStyled.HeadingTitle>CAST AND CREW</SharedStyled.HeadingTitle>
          <Styled.CastMainLayout>
            {!castError &&
              !castLoading &&
              castData?.cast?.map((cast: any, index: number) => (
                <Styled.CastContainer key={index}>
                  <Styled.CastImageContainer>
                    <Styled.CastImage
                      src={
                        cast?.profile_path
                          ? `${img_500}/${cast?.profile_path}`
                          : noPicture
                      }
                      alt={cast?.name}
                    />
                  </Styled.CastImageContainer>
                  <Styled.CastName title={cast?.name}>
                    {cast?.name}
                  </Styled.CastName>
                </Styled.CastContainer>
              ))}

            {(castLoading || castFetching) &&
              Array.from({ length: 30 }, (x, v) => (
                <SharedStyled.LoadingSpinnerContainer key={v} />
              ))}
          </Styled.CastMainLayout>
        </SharedStyled.Wrapper>
      </SharedStyled.OpacityAnimation>
    </SharedStyled.Container>
  )
}

export default Cast
