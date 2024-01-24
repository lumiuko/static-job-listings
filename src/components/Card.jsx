import { mergeTags } from '../utils'

export default function Card({ item, addFilter, filters }) {
  const allTags = mergeTags(item)

  return (
    <article
      className="bg-white rounded-[5px] border-l-[5px] flex flex-col px-6 pb-6 shadow-card xl:pl-9 xl:pr-10 xl:py-8 xl:flex-row xl:items-center xl:gap-6 xl:text-[1.125rem]"
      style={{ borderColor: item.featured ? 'hsl(180, 29%, 50%)' : 'transparent' }}
    >
      <img src={item.logo} className="size-[48px] object-cover rounded-full -mt-6 xl:mt-0 xl:size-[88px]" alt={item.company} />
      <div className="mt-2 flex flex-col gap-2 xl:mt-0">
        <div className="flex items-center text-white text-sm font-bold leading-4">
          <p className="mr-8 text-cyan text-[0.8125rem] leading-3 xl:text-[1.125rem] xl:leading-5 xl:mr-4">{item.company}</p>
          {item.new && <div className="mr-2 bg-cyan px-2 py-1 rounded-xl uppercase">New!</div>}
          {item.featured && <div className="bg-very-dark-cyan px-2 py-1 rounded-xl uppercase">Featured</div>}
        </div>
        <h2 className="text-[0.9375rem] leading-6 font-bold xl:text-[1.375rem]">
          <a href="#" className="hover:text-cyan transition-colors">
            {item.position}
          </a>
        </h2>
        <div className="flex items-center gap-[0.625rem] text-dark-cyan leading-6 xl:gap-4">
          <p>{item.postedAt}</p>
          <div className="size-1 bg-line rounded-full"></div>
          <p>{item.contract}</p>
          <div className="size-1 bg-line rounded-full"></div>
          <p>{item.location}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t-[1px] border-line text-base flex flex-wrap gap-4 font-bold xl:mt-0 xl:pt-0 xl:border-none xl:ml-auto">
        {allTags.map((tag, index) => (
          <button
            key={index}
            className="bg-grayish-cyan rounded-[4px] text-cyan px-2 py-1 enabled:hover:bg-cyan enabled:hover:text-white transition-colors disabled:opacity-50"
            onClick={() => addFilter(tag)}
            disabled={filters.includes(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </article>
  )
}
