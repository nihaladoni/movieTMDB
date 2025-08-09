import styled from 'styled-components'
export const NavbarMainContainer = styled.nav<{ hasScrolled?: boolean }>`
  transition: background-color 0.5s ease-out;
  background-color: ${props => (props.hasScrolled ? '#13131d' : 'transparent')};

  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  display: none;

  @media (min-width: 480px) {
    display: flex;
    height: 70px;
  }
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
  gap: 16px;
  justify-content: flex-end;
  display: none;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;

    padding: 8px 18px;
    border-radius: 12px;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    :hover {
      background: rgba(178, 105, 246, 0.12);
      color: #b269f6;
      box-shadow: 0 2px 8px 0 rgba(178, 105, 246, 0.1);
    }
  }

  .active {
    color: #fff;
    background: linear-gradient(90deg, #b269f6 0%, #6e8efb 100%);
    box-shadow: 0 2px 12px 0 rgba(178, 105, 246, 0.18);
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
  font-size: 24px;
  color: #fff;
  transition: all 0.3s linear;
  :hover {
    color: #b269f6;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`
