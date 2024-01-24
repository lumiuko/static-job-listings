import { useState } from 'react'

import Filters from './components/Filters'
import Card from './components/Card'

import data from './data.json'
import { mergeTags } from './utils'
import { useEffect } from 'react'

function App() {
  const [filters, setFilters] = useState([])

  useEffect(() => {
    if (!filters.length) return
    scrollTo({ top: 0 })
  }, [filters])

  function clearFilters() {
    setFilters([])
  }

  function removeFilter(filter) {
    setFilters(prevFilters => prevFilters.filter(item => item !== filter))
  }

  function addFilter(filter) {
    if (filters.includes(filter)) return
    setFilters(prevFilters => [...prevFilters, filter])
  }

  const cards = data
    .filter(item => filters.every(tag => mergeTags(item).includes(tag)))
    .map(item => <Card key={item.id} item={item} addFilter={addFilter} filters={filters} />)

  return (
    <main className="px-6 py-[7.5rem]">
      <div className="max-w-container mx-auto">
        <h1 className="sr-only">Job listings</h1>
        <Filters filters={filters} clearFilters={clearFilters} removeFilter={removeFilter} />
        <div className="mt-14 flex flex-col gap-10 xl:gap-6 xl:mt-10">{cards}</div>
      </div>
    </main>
  )
}

export default App
