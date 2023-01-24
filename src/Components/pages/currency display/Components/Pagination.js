import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
  return (
    <>
    
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={(event)=>{
      setPage(event.selected);
      window.scroll(0,450);
    }}
    pageRangeDisplayed={5}
    pageCount={(handleSearch()?.length/10).toFixed(0)}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
  />
  </>
  )
}

export default Pagination


