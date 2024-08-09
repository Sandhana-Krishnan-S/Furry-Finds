import React, { useEffect, useState } from 'react'
import { ShimmerPostItem } from 'react-shimmer-effects'
import './Listing.css'
import Card from '../../../Component/Card/Card'
import { fetchDataByCategory } from './axios/fetchByCategory'

export default function Listing({ category }) {
  const itemPerPage = 16
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const responce = await fetchDataByCategory(category, currentPage, itemPerPage)
      if (responce.status) {
        setData([...responce.data])
        setTotalPages(responce.totalPages)
      }
      else {
        // TODO : failed to test
      }

    } catch (error) {
      // TODO : something went wrong
    } finally {
      setTimeout(() => setIsLoading(false) , 1000)
      
    }
  }
  useEffect(() => {
    fetchData()
  }, [currentPage])

  return (
    <div className="listing">
      {isLoading ? (
        <div className='special-listing'>
          {Array.from({ length: 16 }, (_, index) => (
            <div key={index} className="card-listing">
              <ShimmerPostItem
                card={true}
                title="Loading..."
                text="Loading description..."
                cta="Loading CTA"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="main-listing-element">
          <div className='special-listing'>
          {data.map((item) => (
            <div key={item.id} className="special-listing">
              <Card item={item} />
            </div>
          ))}
        </div>
          <div className="num-of-page">
            {/* Pagination buttons */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className="listing-paginate-btn"
                id={index === currentPage ? "active-list" : "non-active-list"}
                onClick={(event) => {
                  event.preventDefault()
                  setCurrentPage(index)}}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}