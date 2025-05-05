import React from 'react'

const Pagination = ({pageNumber, increasePagenumber, decreasePageNumber, page1, page500}) => {
  return (
    <>
      <section className="w-[100%] pt-[2%] p-[3%] mx-auto">
        <div className="w-full mx-auto">
          
          {/* Pagination */}
          <div className="w-full mt-8 p-2 border border-black rounded-md flex flex-row justify-evenly items-center">

            {/* start */}
            <div className='ml-4' onClick={page1}>
              <h3 className='hover:text-blue-400 hover:cursor-pointer'>First Page</h3>
            </div>
            <div className="flex flex-row space-x-3 justify-center items-center">
            <button className='cursor-pointer' onClick={decreasePageNumber}>
            <i class="fa-solid fa-arrow-left"></i>
            </button>
            <div className='bg-gray-200 rounded-xl p-2 hover:bg-blue-200 transition-all duration-300'>
            <h3 className='font-sans font-bold'>{pageNumber}</h3>
            </div>
            <button className='cursor-pointer' onClick={increasePagenumber}>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            </div>

            {/* end */}
            <div className='mr-4' onClick={page500}>
              <h3 className='hover:text-blue-400 hover:cursor-pointer'>Last Page</h3>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Pagination