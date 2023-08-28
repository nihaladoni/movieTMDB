import axios from 'axios'
import { useQuery } from 'react-query'
import { apiUrl, api_key } from '../utils/apiUrl'

const getMovieDetails = async (options: any) => {
  const result = await axios.get(
    `${apiUrl}/${options?.media_type}/${options?.id}?&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    }
  )
  return result?.data
}

export const useGetMovieDetails = (options: any) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ['details', options],
    () => getMovieDetails(options),
    {
      refetchOnWindowFocus: false,
    }
  )
  return { data, isError, isFetching, isLoading }
}
