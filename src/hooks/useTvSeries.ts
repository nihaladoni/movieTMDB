import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { apiUrl, api_key } from '../utils/apiUrl'
const getTvSeries = async ({ pageParam = 1, queryKey }: any) => {
  const selectedData = queryKey[1]
  const result = await axios.get(
    `${apiUrl}/discover/tv?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageParam}&with_genres=${selectedData}&with_watch_monetization_types=flatrate`,
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    }
  )
  return result?.data
}

export const useTvSeries = (selectedData: string) => {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['tvSeries', selectedData], getTvSeries, {
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
