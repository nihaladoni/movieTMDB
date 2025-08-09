import styled from 'styled-components'

export const MainCardContainer = styled.section<{ bgUrl?: string }>`
  position: relative;
  background: red;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgb(0, 0, 0)),
    url(${props => props.bgUrl});
  background-size: cover;
`

export const MovieInfoContainer = styled.div`
  margin-top: auto;
  position: absolute;
  bottom: 100px;
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  left: 40%;
  transform: translate(-40%);

  @media (min-width: 480px) {
    left: 50%;
    bottom: 75px;
    transform: translate(-50%);
  }
`

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  color: #fff;
  font-weight: 400;
  flex: 1;

  button {
    width: max-content;
    padding: 12px 16px;
    color: violet;
  }
  p {
    padding-right: 0;
    font-size: 16px;
  }

  @media (min-width: 480px) {
    p {
      padding-right: 40px;
      font-size: 20px;
    }
  }
`

export const ImageContainer = styled.div`
  img {
    display: none;
    width: 256px;
    height: 384px;
    max-width: 100%;
    border-radius: 12px;
  }
  @media (min-width: 1024px) {
    img {
      display: block;
    }
  }
`
