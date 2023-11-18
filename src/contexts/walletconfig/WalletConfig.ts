import {
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  fantom,
  fantomTestnet,
  goerli,
  sepolia
} from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

import { uniswapWallet, stargazerWallet } from "./customwallets";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, fantom, fantomTestnet, goerli, sepolia],
  [
    infuraProvider({
      apiKey: import.meta.env.VITE_PUBLIC_INFURA_ID
        ? import.meta.env.VITE_PUBLIC_INFURA_ID
        : "",
    }),
    publicProvider(),
  ]
);

const projectId = import.meta.env.VITE_PUBLIC_PROJECT_ID
  ? import.meta.env.VITE_PUBLIC_PROJECT_ID
  : "";
console.log("projectId = ", projectId);

const connectors = connectorsForWallets([
  ...getDefaultWallets({
    appName: "TradingPanel",
    projectId: projectId,
    chains,
  }).wallets,
  {
    groupName: "Recommended",
    wallets: [
      uniswapWallet({ chains, projectId }),
      stargazerWallet({ chains, projectId }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { chains, wagmiConfig };
