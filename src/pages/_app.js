import "@/styles/globals.css";
import Layout from "@/components/Layout";
import CartProvider from "@/contexts/CartContext";
import { UserProvider } from "@/contexts/UserContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </UserProvider>
  );
}
