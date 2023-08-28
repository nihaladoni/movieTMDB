import axios from 'axios'
import { useQuery } from 'react-query'
import { apiUrl, api_key } from '../utils/apiUrl'

const getCastData = async (options: any) => {
  const { data } = await axios.get(
    `${apiUrl}/${options?.media_type}/${options?.id}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    }
  )
  return data
}

export const useGetCastData = (options: any) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ['cast', options],
    () => getCastData(options),
    {
      refetchOnWindowFocus: false,
    }
  )
  return { data, isError, isFetching, isLoading }
}
