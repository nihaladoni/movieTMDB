import { useCallback, useEffect, useRef, useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'

import { CategoryContainer, Summary } from './Category.style'
import { useGetGenre } from '../../hooks/useGetGenre'
import { Heading } from '../navbar/Navbar.style'
import { Flex } from '../../styles/sharedStyles'
import DiscoverFilter from '../filters/DiscoverFilter'
import { api_key } from '../../utils/apiUrl'

const Category = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
}: any) => {
  const { data: genreData } = useGetGenre(type)
  const [showHiddenMenu, setShowHiddenMenu] = useState(false)
  console.log('showHiddenMenu===[log]===>', showHiddenMenu)
  const hideRef = useRef(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    setGenres(genreData?.genres)
  }, [genreData])

  const handleCategoryClick = useCallback(
    (id: number) => {
      if (selectedGenres.includes(id)) {
        setSelectedGenres(
          selectedGenres.filter((genreId: number) => genreId !== id)
        )
      } else {
        setSelectedGenres((prevSelected: any) => [...prevSelected, id])
      }
    },
    [selectedGenres?.length]
  )
  const handleShowHiddenMenu = useCallback(() => {
    ;(hideRef.current as any) = setTimeout(() => {
      dialogRef.current?.showModal()
    }, 3000)
  }, [])

  const closeDialog = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }, [])

  const handleFilterChange = (filters: any) => {
    console.log('Filters applied:', filters)
    window.location.reload()
  }

  return (
    <>
      <details style={{ userSelect: 'none' }}>
        <Flex flexWrap gap='10px' margin='16px 0'>
          {genres?.map((genre: any) => (
            <CategoryContainer
              key={genre?.id}
              onClick={() => handleCategoryClick(genre?.id)}
              isSelected={selectedGenres.includes(genre?.id)}
            >
              {genre?.name}
            </CategoryContainer>
          ))}
        </Flex>
        <Summary>
          <Heading
            onMouseDown={handleShowHiddenMenu}
            // onTouchStart={handleShowHiddenMenu}
          >
            Tags
          </Heading>
        </Summary>
      </details>

      <dialog ref={dialogRef}>
        <DiscoverFilter
          onClose={closeDialog}
          onFilterChange={handleFilterChange}
        />
      </dialog>
    </>
  )
}

export default Category
