import styled from 'styled-components'

export const MainCardContainer = styled.section<{ bgUrl?: string }>`
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgb(0, 0, 0));
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 0;

  @media (min-width: 680px) {
    padding: 0;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgb(0, 0, 0)),
      ${({ bgUrl }) => (bgUrl ? `url(${bgUrl})` : 'none')};
  }
`

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 680px) {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    max-width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    bottom: 75px;
    text-align: left;
  }
`

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  color: #fff;
  font-weight: 400;
  flex: 1;

  h1 {
    margin-top: 8px;
  }

  button {
    width: max-content;
    padding: 0.75rem 1rem;
    color: violet;
  }

  p {
    padding-right: 0;
    font-size: 0.9rem;
    color: red;
  }

  @media (min-width: 680px) {
    p {
      padding-right: 2.5rem;
      font-size: 1.25rem;
    }
  }
`

export const ImageContainer = styled.div`
  img {
    width: 200px;
    height: auto;
    max-width: 100%;
    border-radius: 12px;
  }

  @media (min-width: 680px) {
    img {
      width: 256px;
      height: 384px;
    }
  }
`
