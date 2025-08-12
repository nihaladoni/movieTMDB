import { useCallback, useEffect, useRef, useState } from 'react'

import { CategoryContainer, Summary } from './Category.style'
import { useGetGenre } from '../../hooks/useGetGenre'
import { Heading } from '../navbar/Navbar.style'
import { Flex } from '../../styles/sharedStyles'

const Category = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
}: any) => {
  const { data: genreData } = useGetGenre(type)

  useEffect(() => {
    setGenres(genreData?.genres)
  }, [genreData])

  const handleCategoryClick = useCallback(
    (id: string) => {
      if (selectedGenres.includes(id)) {
        setSelectedGenres(
          selectedGenres.filter((genreId: string) => genreId !== id)
        )
      } else {
        setSelectedGenres((prevSelected: any) => [...prevSelected, id])
      }
    },
    [selectedGenres?.length]
  )

  return (
    <>
      <details style={{ userSelect: 'none' }}>
        <Flex flexWrap gap='10px' margin='16px 0'>
          {genres?.map((genre: any) => (
            <CategoryContainer
              key={genre?.id}
              onClick={() => handleCategoryClick(String(genre?.id))}
              isSelected={selectedGenres.includes(String(genre?.id))}
            >
              {genre?.name}
            </CategoryContainer>
          ))}
        </Flex>
        <Summary>
          <Heading>Tags</Heading>
        </Summary>
      </details>
    </>
  )
}

export default Category
