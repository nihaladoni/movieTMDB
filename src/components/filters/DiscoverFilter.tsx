import { useState, useEffect } from 'react'

import {
  FilterContainer,
  Label,
  Select,
  CheckboxLabel,
  Checkbox,
  Button,
} from './style'
import { Flex } from '../../styles/sharedStyles'
import { useGetProviders } from '../../hooks/useGetPoviders'
import { useGetLanguages } from '../../hooks/useGetLanguages'

const sortOptions = [
  { value: 'popularity.desc', label: 'Popularity Descending' },
  { value: 'popularity.asc', label: 'Popularity Ascending' },
  { value: 'vote_average.desc', label: 'Vote Average Descending' },
  { value: 'vote_average.asc', label: 'Vote Average Ascending' },
  { value: 'release_date.desc', label: 'Release Date Descending' },
  { value: 'release_date.asc', label: 'Release Date Ascending' },
]

export default function DiscoverFilter({
  onFilterChange,
  onClose,
}: {
  onFilterChange: (filters: any) => void
  onClose: () => void
}) {
  const loadFilters = () => {
    try {
      const saved = localStorage.getItem('discoverFilters')
      if (saved) {
        return JSON.parse(saved)
      }
    } catch (e) {
      console.warn('Failed to parse saved filters', e)
    }
    return {}
  }

  // Load saved filters once on mount
  const savedFilters = loadFilters()

  const [sortBy, setSortBy] = useState(
    savedFilters.sort_by || 'popularity.desc'
  )

  const { data: watchProviders } = useGetProviders()
  const { data: languages } = useGetLanguages()

  console.log('TEST===[log]===>', {
    watchProviders,
  })
  const [selectedWatchProvider, setSelectedWatchProvider] = useState(
    savedFilters.with_watch_providers || ''
  )
  const [includeAdult, setIncludeAdult] = useState(
    savedFilters.include_adult || false
  )

  const [originalLang, setOriginalLang] = useState(
    savedFilters.with_original_language || ''
  )

  useEffect(() => {
    const filtersToSave = {
      sort_by: sortBy,
      with_watch_providers: selectedWatchProvider,
      include_adult: includeAdult,
      with_original_language: originalLang,
    }
    localStorage.setItem('discoverFilters', JSON.stringify(filtersToSave))
  }, [sortBy, selectedWatchProvider, includeAdult, originalLang])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onFilterChange({
      sort_by: sortBy,
      with_watch_providers: selectedWatchProvider || undefined,
      include_adult: includeAdult,
      with_original_language: originalLang || undefined,
    })
  }

  return (
    <FilterContainer>
      <form onSubmit={handleSubmit}>
        <Flex flexDirection='column' gap='16px'>
          <div>
            <Label htmlFor='sort_by'>Sort By</Label>
            <Select
              id='sort_by'
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              {sortOptions?.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor='watch_provider'>Watch Provider</Label>
            <Select
              id='watch_provider'
              value={selectedWatchProvider}
              onChange={e => setSelectedWatchProvider(e.target.value)}
            >
              <option value=''>Any</option>
              {watchProviders?.map(({ provider_id, provider_name }: any) => (
                <option key={provider_id} value={provider_id}>
                  {provider_name}
                </option>
              ))}
            </Select>
          </div>
          <CheckboxLabel htmlFor='include_adult'>
            <Checkbox
              id='include_adult'
              type='checkbox'
              checked={includeAdult}
              onChange={e => setIncludeAdult(e.target.checked)}
            />
            Include Adult Content
          </CheckboxLabel>
          <div>
            <Label htmlFor='original_language'>Original Language</Label>
            <Select
              id='original_language'
              value={originalLang}
              onChange={e => setOriginalLang(e.target.value)}
            >
              <option value=''>Any</option>
              {languages?.map(({ iso_639_1, english_name }: any) => (
                <option key={iso_639_1} value={iso_639_1}>
                  {english_name}
                </option>
              ))}
            </Select>
          </div>
        </Flex>

        <Flex justifyContent='space-between' gap='10px' margin='10px 0 0 0'>
          <Button type='button' onClick={onClose}>
            Close
          </Button>
          <Button type='submit'>Apply Filters</Button>
        </Flex>
      </form>
    </FilterContainer>
  )
}
