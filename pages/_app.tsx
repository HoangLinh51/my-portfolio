import { AppProps } from "next/app";
import "../styles/globals.css";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <PrimeReactProvider><Component {...pageProps} /></PrimeReactProvider>
}

export default MyApp;