import * as SharedStyled from '../../styles/sharedStyles'
import * as Styled from './NotFound.style'

const NotFound = () => {
  return (
    <SharedStyled.Container width='90%'>
      <SharedStyled.OpacityAnimation>
        <SharedStyled.Wrapper>
          <Styled.NotFoundPageContainer>
            <div>
              <Styled.NotFoundPageHeading>404</Styled.NotFoundPageHeading>
              <Styled.NotFoundPageSubHeading>
                OOPS! PAGE NOT FOUND
              </Styled.NotFoundPageSubHeading>
              <Styled.NotFoundPageDescription>
                Sorry, the page you're looking for doesn't exist. If you think
                something is broken, report a problem.
              </Styled.NotFoundPageDescription>
              <Styled.ButtonWrapper>
                <SharedStyled.StyledLink to='/'>
                  <Styled.HomeButton>Back to HomePage</Styled.HomeButton>
                </SharedStyled.StyledLink>
              </Styled.ButtonWrapper>
            </div>
          </Styled.NotFoundPageContainer>
        </SharedStyled.Wrapper>
      </SharedStyled.OpacityAnimation>
    </SharedStyled.Container>
  )
}

export default NotFound
