import {
  DisclaimerComponent,
  RainbowKitProvider,
  darkTheme
} from "@rainbow-me/rainbowkit";
import React from "react";
import { WagmiConfig } from "wagmi";

import { chains, wagmiConfig } from "./walletconfig";

type Props = {
  children: React.ReactNode;
};

const Disclaimer: DisclaimerComponent = ({ Text, Link }) => <></>;

const WalletProvider: React.FC<Props> = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: '#7b3fe4',
          accentColorForeground: 'white',
          borderRadius: 'small',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
        modalSize="wide"
        chains={chains}
        appInfo={{
          appName: "RainbowKit Demo",
          disclaimer: Disclaimer,
        }}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export { WalletProvider };
