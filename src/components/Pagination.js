import React from "react"
import { PaginationWrapper, PaginationElement } from "../elements"

/* Pagination left and right button */
export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>&larr;</PaginationElement>
      <PaginationElement to={nextPage}>&rarr;</PaginationElement>
    </PaginationWrapper>
  )
}
