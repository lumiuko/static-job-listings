export default function Filters({ filters, clearFilters, removeFilter }) {
  return (
    <div
      className="p-5 bg-white rounded-[5px] shadow-card flex justify-between items-center gap-10 font-bold xl:px-10 transition-fadeIn"
      style={{ visibility: filters.length ? 'visible' : 'hidden', opacity: filters.length ? '1' : '0' }}
    >
      <ul className="flex flex-wrap gap-4">
        {filters.map((filter, index) => (
          <li key={index}>
            <button
              className="bg-light-cyan rounded-[4px] overflow-hidden text-cyan flex items-center group"
              aria-label="Remove element"
              onClick={() => removeFilter(filter)}
            >
              <div className="px-2 py-1">{filter}</div>
              <div className="w-8 h-8 bg-cyan flex justify-center items-center group-hover:bg-very-dark-cyan transition-colors">
                <img src="/icon-remove.svg" alt="Remove" aria-hidden="true" />
              </div>
            </button>
          </li>
        ))}
      </ul>
      <button className="text-dark-cyan leading-8 hover:text-cyan transition-colors" onClick={clearFilters}>
        Clear
      </button>
    </div>
  )
}
