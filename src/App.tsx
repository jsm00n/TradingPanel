import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from 'pages'
import { ThemeProvider } from 'components/theme-provider'
import { ApolloProvider } from "@apollo/client";
import { subgraphClient } from "config/graphql/subgraphClient";
import { WalletProvider } from "contexts";
import "@rainbow-me/rainbowkit/styles.css";

const App = () => {

  return (
    <ApolloProvider client={subgraphClient}>
      <WalletProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </WalletProvider>
    </ApolloProvider>
  )
}

export default App
