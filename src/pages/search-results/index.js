// import React from 'react';
// import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

// const SearchResults = () => {
//   const navigate = useNavigate();
//   const params = useParams();
//   const { searchId } = params;

//   const [searchParams, setSearchParams] = useSearchParams();

//   return (
//     <div>
//       <div>
//         search results for id : {searchId}
//         {searchParams.get('filter')
//           ? `width filter ${searchParams.get('filter')}`
//           : ''}
//       </div>
//       <button
//         onClick={() => {
//           setSearchParams({ filter: 'trending' });
//         }}
//       >
//         filter trending
//       </button>
//       <button onClick={() => navigate('/')}>back</button>
//     </div>
//   );
// };

// export default SearchResults;

import React from 'react';
// import ScreenSlider from '../../components/screenSlider';
import SearchResult from '../../components/search-result';

const SearchResults = () => {
  return (
    <>
      {/* <ScreenSlider /> */}
      <SearchResult />
    </>
  );
};

export default SearchResults;
