import React from 'react';

const Pagination = ( {newsperPage, totalNews, paginate} ) => {

    const pageNumbers = [];

    for(let i = 1; i <=  totalNews / newsperPage; i++ ) {
        pageNumbers.push(i);

    }
    // console.log(pageNumbers);
    // console.log(newsperPage);
    // console.log(totalNews);

    return (
        <div>
            <div className='lg:w-5/6 w-full mt-8 mx-auto mb-8 flex items-center justify-center h-16'>
                <div className='lg:w-1/2 w-full bg-blue-700 h-full'>
                    <ul className='flex items-center justify-center mt-3 gap-1 lg:gap-4 text-white mx-auto'>
                        {
                            pageNumbers.map(numbers =>
                                <li key={numbers} className='text-white font-bold text-2xl border-4 border-white'>
                                    <a onClick={() => paginate(numbers)} href='!#'>
                                        {numbers}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pagination;