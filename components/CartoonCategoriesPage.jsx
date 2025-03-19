'use client'
import React from 'react'
import GetCartoonsAll from './GetCartoonsAll'
import { useSearchParams } from 'next/navigation'
import GetCartoonsFilther from './GetCartoonsFilther'
import GetCartoonsSearch from './GetCartoonsSearch'

export default function CartoonCategoriesPage({ cartoons, getCategoeisCatoons, searchCatoons }) {
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre")
  const title = searchParams.get("search")
  return (
    <>
      {genre ? (
        <GetCartoonsFilther filter={getCategoeisCatoons} />
      ) : (
        <>
          {title ? (
            searchCatoons.length > 0 ? (
              <GetCartoonsSearch search={searchCatoons} />
            ) : (
              ""
            )
          ) : (
            <GetCartoonsAll allCartoons={cartoons} />
          )}
        </>
      )}
    </>
  )
}


