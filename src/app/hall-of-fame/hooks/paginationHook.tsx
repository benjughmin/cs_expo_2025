"use client"
import { useState } from "react"
import { BestProjectsProps } from "../types/hof.types"

export function usePagination(data: BestProjectsProps[]) {
  const [currentPage, setCurrentPage] = useState(0)

  // Increments currentPage if it's not the last index
  const handleNext = () => {
    currentPage < data.length - 1 ? setCurrentPage((prev) => prev + 1) : null
  }

  // Decrements currentPage if it's not the first index
  const handlePrev = () => {
    currentPage > 0 ? setCurrentPage((prev) => prev - 1) : null
  }

  return { handleNext, handlePrev, currentPage }
}
