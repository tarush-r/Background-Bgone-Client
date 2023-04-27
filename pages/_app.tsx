import NavbarComp from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRouter";
import { AuthContextProvider } from "../context/AuthContext";
import "../styles/globals.css";
import {useRouter} from 'next/router';

const noAuthRequired = ['/login', '/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <>
    <AuthContextProvider>
      <NavbarComp/>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ): (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  </>
}

export default MyApp;
