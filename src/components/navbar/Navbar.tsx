import { NavLink } from 'react-router-dom'

import { Container, StyledLink } from '../../styles/sharedStyles'
import * as Styled from './Navbar.style'
import logo from '../../assets/logo.svg'
import useScrollValue from '../../hooks/useScrollValue'

const LINKS = [
  {
    path: '/',
    name: 'Trending',
  },
  {
    path: '/movies',
    name: 'Movies',
  },
  {
    path: '/tvseries',
    name: 'TV Series',
  },
  {
    path: '/search',
    name: 'Search',
  },
]

const Navbar = () => {
  const { value } = useScrollValue()

  return (
    <Styled.NavbarMainContainer hasScrolled={value > 30}>
      <Container width='90%'>
        <Styled.NavbarContainer>
          <StyledLink to='/'>
            <Styled.LogoWrapper>
              <Styled.Logo src={logo} alt='logo' />
            </Styled.LogoWrapper>
          </StyledLink>
          <StyledLink to='/'>
            <Styled.Heading>MovieTMDB</Styled.Heading>
          </StyledLink>

          <Styled.RightSection>
            {LINKS?.map(link => (
              <NavLink to={link.path} key={link.path}>
                {link.name}
              </NavLink>
            ))}
          </Styled.RightSection>
        </Styled.NavbarContainer>
      </Container>
    </Styled.NavbarMainContainer>
  )
}

export default Navbar
