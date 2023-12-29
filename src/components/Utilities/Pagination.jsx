import React from 'react'

const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 text-color-primary gap-4 text-2xl">
            <button
                onClick={handlePrevPage}
                disabled={page === 1} // Disable button when page is 1
                className={`transition-all hover:text-color-accent ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            > Prev</button>
            <p>{page} of {lastPage}</p>
            <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
        </div>
    )
}

export default Pagination