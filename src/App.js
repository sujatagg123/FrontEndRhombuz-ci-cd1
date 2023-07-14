import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
// import { getUserDetails } from './redux/slices/userSlice';
// import NavSection from './components/nav-section';
import AMXRoutes from './routes';
import { theme } from './constants/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

function App() {
  // const dispatch = useDispatch();

  const GlobalStyle = createGlobalStyle`
  button{
    font-family:${({ theme }) => theme.fontFamily}
  }
  `;

  // useEffect(() => {
  //   dispatch(
  //     getUserDetails({
  //       username: 'kminchelle',
  //       password: '0lelplR',
  //     })
  //   );
  // }, []);

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ theme, ...theme[selectedTheme] }}>
        <GlobalStyle />
        {/* <NavSection /> */}
        <AMXRoutes />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
