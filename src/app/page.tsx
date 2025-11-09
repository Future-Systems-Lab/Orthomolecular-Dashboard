// Rights Reserved, Unlicensed
'use client'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import WalletButton from '@/components/WalletButton'
import NeuroChart from '@/components/NeuroChart'
import MoodForm from '@/components/MoodForm'
import MedsConfirm from '@/components/MedsConfirm'

export default function Page() {
  const { isConnected } = useAccount()
  const [medsOk, setMedsOk] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  function analyzeMood(scores: Record<string, number>) {
    const avg = Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length
    if (avg <= 2) setFeedback('Low overall tone detected → suggest tryptophan + B6 support.')
    else if (avg < 4) setFeedback('Moderate tone → maintain current balance, add magnesium if stressed.')
    else setFeedback('Optimal mood balance → continue current regimen and hydration.')
  }

  return (
    <main className="min-h-screen p-8 space-y-8">
      <h1 className="text-3xl font-semibold">Orthomolecular Dashboard</h1>

      <div className="flex items-center gap-4">
        <WalletButton />
        <span className={`text-sm ${isConnected ? 'text-green-400' : 'text-gray-400'}`}>
          {isConnected ? 'Wallet connected' : 'Connect wallet to continue'}
        </span>
      </div>

      <NeuroChart />

      {!isConnected && (
        <div className="p-4 border rounded-xl max-w-md text-gray-300">
          Connect MetaMask first to unlock medication confirmation and mood analysis.
        </div>
      )}

      {isConnected && !medsOk && (
        <MedsConfirm onConfirm={(ok) => setMedsOk(!!ok)} />
      )}

      {isConnected && medsOk && (
        <div className="max-w-lg">
          <div className="p-4 border rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Mood Questionnaire</h2>
            <MoodForm onSubmit={analyzeMood} />
          </div>
        </div>
      )}

      {feedback && (
        <div className="p-4 rounded-xl bg-gray-100 text-black max-w-xl">
          <h3 className="font-semibold mb-2">Wellness Insight</h3>
          <p className="mb-2">{feedback}</p>
          <p className="text-xs text-gray-600">Educational prototype only — not medical advice.</p>
        </div>
      )}
    </main>
  )
}
