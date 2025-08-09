import styled from 'styled-components'
export const MovieCardMainLayout = styled.div`
  background: rgba(33, 35, 50, 0.85);
  border-radius: 18px;
  padding: 14px 12px 18px 12px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 4px 24px 0 rgba(178, 105, 246, 0.1);
  border: 1.5px solid rgba(178, 105, 246, 0.18);
  transition: transform 0.3s, box-shadow 0.3s, border 0.3s;
  overflow: hidden;
  :hover {
    transform: scale(1.04) translateY(-4px);
    box-shadow: 0 8px 32px 0 rgba(178, 105, 246, 0.18);
    border: 1.5px solid #b269f6;
  }
`

export const MovieCardImageContainer = styled.div`
  width: 100%;
`

export const MovieCardImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 rgba(178, 105, 246, 0.1);
`
export const MovieName = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #fff;
  margin: 15px 0;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 370px) {
    font-size: 12px;
  }
`

export const MovieCardFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MovieReleaseDate = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-transform: capitalize;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 370px) {
    font-size: 12px;
  }
`

export const RatingContainer = styled.div<any>`
  position: absolute;
  top: 12px;
  right: 12px;
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background: ${({ vote }) =>
    vote
      ? 'linear-gradient(90deg, #b269f6 0%, #6e8efb 100%)'
      : 'rgba(81,111,119,0.7)'};
  box-shadow: 0 2px 8px 0 rgba(178, 105, 246, 0.1);
  border-radius: 50%;
  border: 2px solid #fff2;
  z-index: 2;
  padding: 0;
`
