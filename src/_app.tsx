import { AppProps } from "next/app";
import "../styles/globals.css";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import LoadingScreen from "./components/intro/splash";
import { useState, useEffect } from "react";

interface MyAppProps extends AppProps {
  Component: React.FC;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const shouldShowSplashscreen = true;

    if (shouldShowSplashscreen) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <PrimeReactProvider>
          <Component {...pageProps} />
        </PrimeReactProvider>
      )}
    </>
  )
}

export default MyApp;