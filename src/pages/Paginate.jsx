import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate ,page}) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalPosts / postsPerPage)

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  let acces

  const selectAcces = () => {
    if (totalPages > 10) {
    if (page > totalPages - 5) {
        acces = pageNumbers.slice(totalPages - 10, totalPages)
    } else if (page > 5) {
        acces = pageNumbers.slice(page - 5, page + 5)
    } else {
        acces = pageNumbers.slice(0, 10)
    }} else {
        acces = pageNumbers.slice(0, totalPages)
    }
}

selectAcces()


  return (
    <nav>
      <div className='pagination'>
        {acces.map(number => (
          <div key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='bootons2'>
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;