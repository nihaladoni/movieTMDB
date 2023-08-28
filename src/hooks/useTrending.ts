import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { apiUrl, api_key } from '../utils/apiUrl'

const getTrending = async ({ pageParam = 1 }: any) => {
  const result = await axios.get(
    `${apiUrl}/trending/all/day?&page=${pageParam}`,
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    }
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
