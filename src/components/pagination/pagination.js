import React from 'react'

const Pagination = (props) => {
  const {
    currentPage,
    itemsPerPage,
    totalTaskCount,
    handleFirstPageButtonClick,
    handleBackButtonClick,
    handleNextButtonClick,
    handleLastPageButtonClick
  } = props

  return (
    <nav aria-label='...' className='col-12'>
      <ul className='pagination'>
        <li className={'page-item' + (currentPage === 1 && ' disabled')}>
          <span
            onClick={handleFirstPageButtonClick}
            className='page-link'>
            <span aria-hidden='true'>&#8592;</span> First
          </span>
        </li>
        <li className={'page-item' + (currentPage === 1 && ' disabled')}>
          <span
            className='page-link'
            onClick={handleBackButtonClick}>
            Previous
          </span>
        </li>
        <li className={'page-item' + (currentPage >= Math.ceil(totalTaskCount / itemsPerPage) && ' disabled')}>
          <span
            className='page-link'
            onClick={handleNextButtonClick}>
            Next
          </span>
        </li>
        <li className={'page-item' + (currentPage >= Math.ceil(totalTaskCount / itemsPerPage) && ' disabled')}>
          <span
            className='page-link'
            onClick={handleLastPageButtonClick}>
            Last <span aria-hidden='true'>&#8594;</span>
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
