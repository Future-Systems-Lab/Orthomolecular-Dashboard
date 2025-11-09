# Orthomolecular Dashboard MVP

Applied MIS/BA prototype that visualizes neurotransmitter balance and generates educational naturopathic insights.

## User Flow
1. Connect wallet with MetaMask.
2. Confirm medications (no recent changes).
3. Adjust mood sliders (Calm, Focus, Motivation, Joy).
4. Press **Analyze** to see recommendations.

## Stack
Next.js • React • TypeScript • Tailwind • Recharts • Wagmi • Viem • React Query

## Run Locally
pnpm install
pnpm run dev
open http://localhost:3000

## Scope (Phase 1)
- Targets: Serotonin, Dopamine, GABA, Endorphins, Endocannabinoid
- Inputs: Tryptophan, Tyrosine, Glutamine, Phenylalanine, Anandamide
- Output: Bar chart of synthesis potential
- Insight: Mood-based recommendation card
- Data: JSON model in `src/data/neurochem.json`

## Roadmap
- Phase 2: cofactors (B6, Mg), lifestyle metrics, gut–brain modeling, EncryptHealth link, AI adaptation, FHIR/HL7 integration.

## Educational Disclaimer
This prototype is for educational purposes only and is not medical advice. Do not change medications without consulting a qualified professional.

## Project Links
Repository: https://github.com/Future-Systems-Lab/Orthomolecular-Dashboard

**Live:** https://orthomolecular-dashboard-pxb4jn0ko-megs-projects-95a11e5b.vercel.app
