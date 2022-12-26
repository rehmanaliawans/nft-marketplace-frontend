import Navbar from "./navbar";
import Footer from "./footer";
import Wallet_modal from "./modal/wallet_modal";
import BidsModal from "./modal/bidsModal";
import BuyModal from "./modal/buyModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Logintrue } from "../redux/counterSlice";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("call");
      if (localStorage.getItem("Useraddress")) {
        console.log("callagain");
        dispatch(Logintrue());
      }
    }
  }, []);
  return (
    <>
      <Navbar />
      <Wallet_modal />
      <BidsModal />
      <BuyModal />
      <main>{children}</main>
      <Footer />
    </>
  );
}
