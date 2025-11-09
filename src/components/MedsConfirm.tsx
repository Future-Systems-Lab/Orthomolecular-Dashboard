// Rights Reserved, Unlicensed
'use client'
import { useState } from 'react'

export default function MedsConfirm({ onConfirm }: { onConfirm: (ok: boolean) => void }) {
  const [noChanges, setNoChanges] = useState(false)
  return (
    <div className="p-4 border rounded-xl max-w-md">
      <h2 className="text-xl font-semibold mb-3">Medication Confirmation</h2>
      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={noChanges}
          onChange={(e) => setNoChanges(e.target.checked)}
        />
        <span>No recent changes to my medications</span>
      </label>
      <button
        onClick={() => onConfirm(noChanges)}
        className="px-4 py-2 rounded-xl bg-blue-600 text-white disabled:opacity-50"
        disabled={!noChanges}
      >
        Confirm medications
      </button>
    </div>
  )
}
