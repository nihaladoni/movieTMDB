import axios from 'axios'
import { api_key, apiUrl } from '../utils/apiUrl'
import { useQuery } from 'react-query'

const getLanguages = async () => {
  const { data } = await axios.get(`${apiUrl}/configuration/languages`, {
    headers: {
      Authorization: `Bearer ${api_key}`,
    },
  })
  return data
}

export const useGetLanguages = () => {
  const {
    data: langData,
    isError,
    isFetching,
    isLoading,
  } = useQuery(['cast', 'languages'], () => getLanguages())

  const data = langData?.sort((a: any, b: any) =>
    a.english_name.localeCompare(b.english_name)
  )

  return { data, isError, isFetching, isLoading }
}
