import React, { useEffect, useState } from 'react'
import { ShimmerPostItem } from 'react-shimmer-effects'
import './Listing.css'
import Card from '../../../Component/Card/Card'
import { fetchDataByCategory } from './axios/fetchByCategory'
import axios from 'axios'

export default function Listing({ category }) {
    const itemPerPage = 16
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true);

          try {
              const response = await axios.get(`http://localhost:8080/api/products/get-product/by-category/${category}`);
              if (response.status === 200) {
                  const fetchedData = response.data;
                  console.log(fetchedData)
                  setData(fetchedData);
              } else {
                  console.error(`Unexpected response status: ${response.status}`);
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          } finally {
              setIsLoading(false);
          }
      };

      fetchData();
  }, []);

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
              <div key={item.id} className="special-listing">
                <Card item={item} />
              </div>
            ))}
          </>
        )}
      </div>
    )
}