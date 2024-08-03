import React, { useEffect, useState } from 'react'
import { ShimmerPostItem } from 'react-shimmer-effects'
import './Listing.css'
import Card from '../../../Component/Card/Card'

export default function Listing({ category }) {
    const itemPerPage = 16
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            //   try {
            //     const response = await fetchData({category , currentPage , itemPerPage})
            //     const result = await response.json()
            //     setData(result.items)
            //     setTotalPages(result.totalPages)
            //   } catch (error) {
            //     console.error('Error fetching data:', error)
            //   }
              setIsLoading(true)
        }

        fetchData();
    }, [currentPage, itemPerPage, category])

    return (
        <div className="listing">
        {isLoading ? (
          <>
            {Array.from({ length: 16 }, (_, index) => (
              <div key={index} className="card-listing">
                <ShimmerPostItem card={true} title="Loading..." text="Loading description..." cta="Loading CTA" />
              </div>
            ))}
          </>
        ) : (
          <>
            {data.map((item) => (
              <div key={item.id} className="card-listing">
                <Card item />
              </div>
            ))}
          </>
        )}
      </div>
    )
}