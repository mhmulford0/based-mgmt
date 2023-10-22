import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, base } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

if (!import.meta.env.VITE_ALCHEMY_API_KEY) {
  throw new Error("Alchemy API key required");
}

const { chains, publicClient } = configureChains(
  [mainnet, base],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "based-mgmt",
  projectId: "c4a73939b6602539bf25eeb2df5be94a",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={darkTheme({ overlayBlur: "none" })}
        modalSize="compact"
        chains={chains}
        initialChain={base}
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
