import axios from 'axios'
import { useQuery } from 'react-query'
import { apiUrl, api_key } from '../utils/apiUrl'

const getVideo = async (options: any) => {
  const { data } = await axios.get(
    `${apiUrl}/${options?.media_type}/${options?.id}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    }
  )
  return data
}

export const useGetVideo = (options: any) => {
  const { data, isError, isLoading, isFetching } = useQuery(
    ['video', options],
    () => getVideo(options)
  )
  return { data, isError, isLoading, isFetching }
}
