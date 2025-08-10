import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { apiUrl, api_key } from '../utils/apiUrl'
const getMovies = async ({ pageParam = 1, queryKey }: any) => {
  const selectedData = queryKey[1]

  const filters = JSON.parse(localStorage.getItem('discoverFilters') || '')

  const result = await axios.get(
    `${apiUrl}/discover/movie?language=en-US&sort_by=${filters?.sort_by}&include_adult=${filters?.include_adult}&include_video=false&page=${pageParam}&with_genres=${selectedData}&with_original_language=${filters?.with_original_language}`,
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    }
  )
  return result?.data
}

export const useGetMovies = (selectedData: string) => {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['movies', selectedData], getMovies, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages?.length < lastPage?.total_pages) {
        const nextPage = allPages.length + 1
        return nextPage
      }
    },
  })
  return {
    data,
    isLoading,
    isFetching,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  }
}

const getTrending = async ({ pageParam = 1 }: any) => {
  const result = await axios.get(
    `${apiUrl}/trending/all/day?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=${pageParam}`
  )
  return result?.data
}

export const useGetTrending = () => {
  const {
    data,
    isFetching,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['trending'], getTrending, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages?.length < lastPage?.total_pages) {
        const nextPage = allPages.length + 1
        return nextPage
      }
    },
  })
}
