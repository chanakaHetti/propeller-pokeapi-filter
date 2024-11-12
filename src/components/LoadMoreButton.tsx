import React from 'react';

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton = React.memo(({ onClick }: LoadMoreButtonProps) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Load more Pokemon"
        tabIndex={0}
      >
        Load More
      </button>
    </div>
  );
});

export default LoadMoreButton;
