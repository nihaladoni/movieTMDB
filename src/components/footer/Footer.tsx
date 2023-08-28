import { AiOutlineSearch } from 'react-icons/ai'
import { BiCameraMovie } from 'react-icons/bi'
import { FiTrendingUp } from 'react-icons/fi'
import { MdMonitor } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

import { Container, StyledLink } from '../../styles/sharedStyles'
import * as Styled from './Footer.style'

const NAV_TAB = [
  {
    logo: <FiTrendingUp />,
    label: 'Trending',
    link: '/',
  },
  {
    logo: <BiCameraMovie />,
    label: 'Movies',
    link: '/movies',
  },
  {
    logo: <MdMonitor />,
    label: 'TV Series',
    link: '/tvseries',
  },
  {
    logo: <AiOutlineSearch />,
    label: 'Search',
    link: '/search',
  },
]

const Footer = () => {
  const { pathname } = useLocation()

  return (
    <Styled.FooterMainContainer>
      <Container width='90%'>
        <Styled.FooterContainer>
          {NAV_TAB.map(tab => (
            <StyledLink key={tab?.label} to={tab?.link}>
              <Styled.FooterNavTabs>
                <Styled.FooterIcon pathname={pathname === tab?.link}>
                  {tab?.logo}
                </Styled.FooterIcon>
                <Styled.FooterNavTab pathname={pathname === tab?.link}>
                  {tab?.label}
                </Styled.FooterNavTab>
              </Styled.FooterNavTabs>
            </StyledLink>
          ))}
        </Styled.FooterContainer>
      </Container>
    </Styled.FooterMainContainer>
  )
}

export default Footer
