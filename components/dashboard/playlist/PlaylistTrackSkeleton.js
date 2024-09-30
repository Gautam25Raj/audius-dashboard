const PlaylistTrackSkeleton = () => {
  return (
    <ul className="flex-1 overflow-y-scroll">
      {Array.from({ length: 5 }).map((_, index) => (
        <li
          key={index}
          className="p-2 flex justify-between items-center rounded-lg animate-pulse bg-gray-200 my-2"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-lg mr-4"></div>

            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>

          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </li>
      ))}
    </ul>
  );
};

export default PlaylistTrackSkeleton;
