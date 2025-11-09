// Rights Reserved, Unlicensed
'use client'
import { injected } from '@wagmi/connectors'
import { useConnect } from 'wagmi'

export default function WalletButton() {
  const { connectAsync } = useConnect({ connector: injected() })
  return (
    <button
      onClick={async () => await connectAsync({ connector: injected() })}
      className="px-4 py-2 bg-blue-600 text-white rounded-xl"
    >
      Connect MetaMask
    </button>
  )
}
