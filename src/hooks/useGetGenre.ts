import axios from 'axios'
import { useQuery } from 'react-query'
import { apiUrl, api_key } from '../utils/apiUrl'

const getGenre = async (type: string) => {
  const { data } = await axios.get(
    `${apiUrl}/genre/${type}/list?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    }
  )
  return data
}

export const useGetGenre = (type: string) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ['genre', type],
    () => getGenre(type)
  )
  return { data, isError, isFetching, isLoading }
}
