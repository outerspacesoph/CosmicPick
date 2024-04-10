// image tag/components used, will add Next.js image tags/components later
// add web3 button later
// https://i.imgur.com/KBAQkee.png
// "https://i.imgur.com/32syeyr.png"
// bg-[#0c0e2d] background
// bg-[#fcd6ef] light pink text
// https://i.imgur.com/fOl5Pjd.png
// https://i.imgur.com/YSgVuO1.png

import React from "react";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  walletConnect,
  localWallet,
  darkTheme,
} from "@thirdweb-dev/react";

function Login() {
  return (
    <div className="bg-[#07081a] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="h-56 w-56 mb-10"
          src="https://i.imgur.com/fOl5Pjd.png"
          alt=""
        />
        <h1 className="text-6xl text-[#f6df45] font-bold">CosmicPick✨</h1>
        <h2 className="text-[#f6df45] py-8">
          Connect your wallet to get started!
        </h2>

        <ConnectWallet
          theme={darkTheme({
            colors: {
              accentText: "#f6df45",
              accentButtonBg: "#f6df45",
              modalBg: "#07081a",
              dropdownBg: "#07081a",
              borderColor: "#0e3262",
              separatorLine: "#0e3262",
              primaryButtonBg: "#f6df45",
            },
          })}
          btnTitle={"Connect Wallet"}
          modalSize={"wide"}
          welcomeScreen={{
            img: {
              src: "https://i.imgur.com/BCqQUK1.png",
              width: 200,
              height: 150,
            },
          }}
          modalTitleIconUrl={"https://i.imgur.com/6E7UFeM.png"}
        />
      </div>
    </div>
  );
}

export default Login;
