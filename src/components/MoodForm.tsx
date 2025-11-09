// Rights Reserved, Unlicensed
'use client'
import { useState } from 'react'

export default function MoodForm({ onSubmit }: { onSubmit: (scores: Record<string, number>) => void }) {
  const [answers, setAnswers] = useState({ calm: 3, focus: 3, motivation: 3, joy: 3 })

  function handleChange(key: string, value: number) {
    setAnswers(prev => ({ ...prev, [key]: value }))
  }

  return (
    <form
      onSubmit={e => { e.preventDefault(); onSubmit(answers) }}
      className="space-y-4 p-4 border rounded-xl max-w-md"
    >
      <h2 className="text-xl font-semibold">Mood Questionnaire</h2>
      {Object.entries(answers).map(([k, v]) => (
        <div key={k} className="flex justify-between items-center">
          <label className="capitalize">{k}</label>
          <input
            type="range"
            min="1"
            max="5"
            value={v}
            onChange={e => handleChange(k, Number(e.target.value))}
          />
        </div>
      ))}
      <button className="px-4 py-2 bg-green-600 text-white rounded-xl w-full" type="submit">
        Analyze
      </button>
    </form>
  )
}
