import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-3 mt-12 mb-8">
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          flex items-center gap-2 px-4 py-2 font-figtree text-sm transition-colors
          ${
            currentPage === 1
              ? "text-text-secondary/50 cursor-not-allowed"
              : "text-text-secondary hover:text-primary"
          }
        `}
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {visiblePages.map((pageNumber, index) => (
          <React.Fragment key={index}>
            {pageNumber === "..." ? (
              <span className="px-3 py-2 text-sm font-figtree text-text-secondary">
                ...
              </span>
            ) : (
              <button
                onClick={() =>
                  typeof pageNumber === "number" && onPageChange(pageNumber)
                }
                className={`
                  min-w-[34px] h-[34px] flex items-center justify-center text-md font-figtree font-medium rounded transition-all duration-200
                  ${
                    pageNumber === currentPage
                      ? "bg-primary text-white shadow-sm"
                      : "text-text-secondary hover:text-primary hover:bg-filter-bg"
                  }
                `}
              >
                {pageNumber}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`
          flex items-center gap-2 px-4 py-2 font-figtree text-sm transition-colors
          ${
            currentPage === totalPages
              ? "text-text-secondary/50 cursor-not-allowed"
              : "text-text-secondary hover:text-primary"
          }
        `}
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
