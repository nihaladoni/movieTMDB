import styled from 'styled-components'

interface BlurredBackgroundProps {
  bg: string
}

export const BlurredBackground = styled.div<BlurredBackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: ${({ bg }) => `url(${bg}) center/cover no-repeat`};
  filter: blur(24px) brightness(0.5);
  opacity: 0.7;
`

export const MovieDetailsMainLayout = styled.div`
  min-height: 100vh;
  color: #fff;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 1;
`

export const MovieDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(33, 35, 50, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  border-radius: 24px;
  overflow: hidden;
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  margin: 40px 0;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    margin: 20px 0;
  }
`

export const MovieDetailsLeftContainer = styled.div`
  width: 100%;
  padding: 32px 24px 32px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(24, 26, 38, 0.7);
  @media screen and (max-width: 900px) {
    padding: 24px 10px 10px 10px;
  }
`
export const MovieDetailsRightContainer = styled.div`
  padding: 32px 32px 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 900px) {
    padding: 10px;
  }
`

export const MovieDetailsImageContainer = styled.div`
  width: 100%;
  max-width: 340px;
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 18px;
  overflow: hidden;
`

export const MovieDetailsImage = styled.img`
  aspect-ratio: 1/1.5;
  width: 100%;
  object-fit: cover;
  border-radius: 18px;
  transition: transform 0.3s;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.25);
  &:hover {
    transform: scale(1.03);
  }
`

export const MovieDetailsTitle = styled.div`
  color: #fff;
  font-size: 44px;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`

export const MovieDetailsSubTitle = styled.div`
  color: #b269f6;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 18px;
  font-style: italic;
  opacity: 0.85;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`
export const MovieDetailsDescription = styled.div`
  min-height: 120px;
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  border-radius: 12px;
  padding: 18px 16px;
  margin-bottom: 18px;
  box-shadow: 0 2px 12px 0 rgba(31, 38, 135, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  @media screen and (max-width: 1024px) {
    min-height: 100px;
    font-size: 15px;
  }
`
export const MovieCastMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonWrapper = styled.div`
  margin-top: 14px;
  a {
    text-decoration: none;
    color: #fff;
  }
`

export const WatchTrailerButton = styled.button<any>`
  height: 48px;
  width: 100%;
  background: ${({ bg }) => bg};
  color: #fff;
  outline: none;
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  padding: 0 10px;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.1);
  transition: background 0.2s, transform 0.2s;
  margin-bottom: 8px;
  &:hover {
    background: #03c988;
    color: #fff;
    transform: translateY(-2px) scale(1.03);
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    height: 40px;
  }
`

export const RatingContainer = styled.div<any>`
  min-height: 28px;
  min-width: 48px;
  padding: 6px 14px;
  border-radius: 16px;
  background: #03c988;
  color: #fff;
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.1);
  border: 2px solid #fff2;
  @media screen and (max-width: 480px) {
    font-size: 14px;
    min-height: 22px;
    min-width: 36px;
    padding: 4px 8px;
  }
`

export const MovieDetailsGenre = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  div {
    background: #fff;
    color: #222;
    height: 30px;
    width: max-content;
    padding: 0 14px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    box-shadow: 0 1px 4px 0 rgba(31, 38, 135, 0.1);
    transition: background 0.2s, color 0.2s;

    @media screen and (max-width: 1024px) {
      font-size: 14px;
      height: 25px;
      padding: 0 10px;
    }
  }
`

export const ButtonCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  @media (min-width: 480px) {
    justify-content: flex-start;
  }
`
