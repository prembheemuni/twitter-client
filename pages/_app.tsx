import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId="843158704245-9hgjkumg851jk9dtdnm9l92d4q0851uo.apps.googleusercontent.com">
        <Component {...pageProps} />{" "}
      </GoogleOAuthProvider>
    </div>
  );
}
