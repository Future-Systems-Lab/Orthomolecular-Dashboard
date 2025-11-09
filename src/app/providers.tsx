// Rights Reserved, Unlicensed
'use client'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { injected } from '@wagmi/connectors'
import { mainnet, sepolia } from 'viem/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: { [mainnet.id]: http(), [sepolia.id]: http() },
  ssr: true
})
const queryClient = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
