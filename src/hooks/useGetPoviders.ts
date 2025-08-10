// useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/watch/providers/movie?&language=en-US`,
//       {
//         headers: {
//           Authorization: `Bearer ${apiKey}`,
//         },
//       }
//     )
//       .then(res => res.json())
//       .then(data => {
//         setWatchProviders(data.results || [])
//       })
//       .catch(e => console.error('Failed to fetch watch providers', e))
//   }, [apiKey])

import axios from 'axios'
import { api_key, apiUrl } from '../utils/apiUrl'
import { useQuery } from 'react-query'
import { useGetCastData } from './useGetCastData'

// refer "./useGetCastData.ts"

const getProviders = async () => {
  const { data } = await axios.get(
    `${apiUrl}/watch/providers/movie?&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    }
  )
  return data
}

export const useGetProviders = () => {
  const {
    data: providerData,
    isError,
    isFetching,
    isLoading,
  } = useQuery(['cast', 'providers'], () => getProviders())

  const data = providerData?.results?.sort((a: any, b: any) =>
    a.provider_name.localeCompare(b.provider_name)
  )

  return { data, isError, isFetching, isLoading }
}
