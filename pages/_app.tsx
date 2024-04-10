import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  metamaskWallet,
  walletConnect,
  localWallet,
} from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";

const activeChain = "mumbai";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="b90c2748336e8c9d4bdf429dc8c03b1c"
      supportedWallets={[metamaskWallet(), walletConnect(), localWallet()]}
    >
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

// export default MyApp;
