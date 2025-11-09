// Rights Reserved, Unlicensed
import { NextResponse } from 'next/server'
export function GET() {
  return NextResponse.json({ ok: true, service: 'orthomolecular-dashboard', status: 'healthy' })
}
