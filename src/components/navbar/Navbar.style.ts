import styled from 'styled-components'
export const NavbarMainContainer = styled.nav<{ hasScrolled?: boolean }>`
  transition: background-color 0.5s ease-out;
  background-color: ${props => (props.hasScrolled ? '#13131d' : 'transparent')};
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
`

export const NavbarContainer = styled.div`
  height: 70px;

  display: flex;
  align-items: center;
  cursor: pointer;
`

export const RightSection = styled.div`
  width: max-content;
  margin-left: auto;
  gap: 40px;
  justify-content: flex-end;
  display: none;

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    :hover {
      filter: brightness(75%);
    }
  }

  .active {
    color: #b269f6;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`

export const LogoWrapper = styled.div`
  margin-right: 10px;
  height: 50px;
  width: 50px;
  @media screen and (max-width: 480px) {
    height: 40px;
    width: 40px;
    margin-right: 8px;
  }
`
export const Logo = styled.img`
  height: 100%;
  width: 100%;
`

export const Heading = styled.div`
  font-size: 35px;
  color: #fff;
  transition: all 0.3s linear;
  :hover {
    color: #b269f6;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`
