// Rights Reserved, Unlicensed
'use client'
import data from '@/data/neurochem.json'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

export default function NeuroChart() {
  return (
    <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="target" />
          <YAxis domain={[0,1]} />
          <Tooltip />
          <Bar dataKey="potential" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
