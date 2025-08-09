import { Fragment, useEffect, useState } from 'react'
import { ImSearch } from 'react-icons/im'

import MovieCard from '../../components/movieCard/MovieCard'
import NoItemFound from '../../components/noItemFound/NoItemFound'
import { useGetAllSearchMovies } from '../../hooks/useSearchMovies'
import * as SharedStyled from '../../styles/sharedStyles'
import { debounce } from '../../utils/utils'
import * as Styled from './Search.style'

const Search = () => {
  const [searchTab, setSearchTab] = useState('movies')
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e: any) => {
    setSearchValue(e.target.value)
  }
  const handleDebounce = debounce((e: any) => handleChange(e), 1000)

  const option = {
    searchValue: searchValue && encodeURIComponent(searchValue),
    searchTab: searchTab,
  }

  const {
    data,
    isLoading,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetAllSearchMovies(option)

  useEffect(() => {
    let fetching = false
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 2) {
        fetching = true
        if (hasNextPage) await fetchNextPage()
        fetching = false
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [fetchNextPage, hasNextPage])

  return (
    <SharedStyled.Container width='90%'>
      <SharedStyled.Wrapper>
        <Styled.InputFieldWrapper>
          <Styled.InputField
            type='text'
            placeholder='Search Movies or TV Series. Example tom and jerry'
            onChange={handleDebounce}
          />
          <Styled.IconWrapper>
            <ImSearch />
          </Styled.IconWrapper>
        </Styled.InputFieldWrapper>

        <Styled.NavTabWrapper>
          <Styled.NavTab
            onClick={() => setSearchTab('movies')}
            tab={searchTab === 'movies'}
          >
            Search Movies
          </Styled.NavTab>
          <Styled.NavTab
            onClick={() => setSearchTab('tvseries')}
            tab={searchTab === 'tvseries'}
          >
            Search TV Series
          </Styled.NavTab>
        </Styled.NavTabWrapper>
        {searchTab === 'movies' && (
          <div>
            <SharedStyled.OpacityAnimation>
              <SharedStyled.HeadingTitle>MOVIES</SharedStyled.HeadingTitle>
              <SharedStyled.CardGridLayout>
                {!isError &&
                  data?.pages?.map((x: any, id: number) => (
                    <Fragment key={id}>
                      {Array.isArray(x?.results) &&
                        x?.results?.map((results: any, index: number) => (
                          <Fragment key={results?.id}>
                            <SharedStyled.StyledLink
                              to={`/movie_details/${results?.id}?media_type=movie`}
                            >
                              <MovieCard
                                poster={results?.poster_path}
                                name={results?.title || results?.name}
                                date={
                                  results?.first_air_date ||
                                  results?.release_date
                                }
                                vote={results?.vote_average}
                                mediaType='movie'
                              />
                            </SharedStyled.StyledLink>
                          </Fragment>
                        ))}
                    </Fragment>
                  ))}

                {(isLoading || (isFetching && isFetchingNextPage)) &&
                  Array.from({ length: 10 }, (x, v) => (
                    <SharedStyled.LoadingSpinnerContainer key={v} />
                  ))}
              </SharedStyled.CardGridLayout>
              {data?.pages[0]?.total_pages === 0 && (
                <NoItemFound message='No Movie Found' />
              )}
            </SharedStyled.OpacityAnimation>
          </div>
        )}
        {searchTab === 'tvseries' && (
          <div>
            <SharedStyled.OpacityAnimation>
              <SharedStyled.HeadingTitle>TV SERIES</SharedStyled.HeadingTitle>
              <SharedStyled.CardGridLayout>
                {!isError &&
                  data?.pages?.map((x: any, id: number) => (
                    <Fragment key={id}>
                      {Array.isArray(x?.results) &&
                        x?.results?.map((results: any, index: number) => (
                          <Fragment key={results?.id}>
                            <SharedStyled.StyledLink
                              to={`/movie_details/${results?.id}?media_type=tv`}
                            >
                              <MovieCard
                                poster={results?.poster_path}
                                name={results?.title || results?.name}
                                date={
                                  results?.first_air_date ||
                                  results?.release_date
                                }
                                vote={results?.vote_average}
                                mediaType='tv'
                              />
                            </SharedStyled.StyledLink>
                          </Fragment>
                        ))}
                    </Fragment>
                  ))}

                {(isLoading || (isFetching && isFetchingNextPage)) &&
                  Array.from({ length: 10 }, (x, v) => (
                    <SharedStyled.LoadingSpinnerContainer key={v} />
                  ))}
              </SharedStyled.CardGridLayout>
              {data?.pages[0]?.total_pages === 0 && (
                <NoItemFound message='No Series Found' />
              )}
            </SharedStyled.OpacityAnimation>
          </div>
        )}
      </SharedStyled.Wrapper>
    </SharedStyled.Container>
  )
}

export default Search
