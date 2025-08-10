import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { apiUrl, api_key } from '../utils/apiUrl'
const getTvSeries = async ({ pageParam = 1, queryKey }: any) => {
  const selectedData = queryKey[1]

  const filters = JSON.parse(localStorage.getItem('discoverFilters') || '')
  const provider = filters?.with_watch_providers

  const result = await axios.get(
    `${apiUrl}/discover/tv?&language=en-US&sort_by=${
      filters?.sort_by
    }&include_adult=${
      filters?.include_adult
    }&include_video=false&page=${pageParam}&with_genres=${selectedData}&with_original_language=${
      filters?.with_original_language
    }${provider ? `&with_watch_providers=${provider}` : ''}`,
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
