import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LamDev Blog",
  description: "This is may personal blog!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* <Provider store={store}> */}
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container ">
                <div className="wrapper overflow-hidden">
                  <Navbar />
                  {children}
                </div>
                <Footer />
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
          {/* </Provider> */}
        </AuthProvider>
      </body>
    </html>
  );
}
