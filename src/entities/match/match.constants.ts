import { IMatch, IMatchExternal } from './match.types'

export const matches: IMatch[] = [
  {
    id: 1,
    score: '2 — 1',
    home: { id: 1, name: 'Team A' },
    away: { id: 2, name: 'Team B' },
  },
  {
    id: 2,
    score: '3 — 0',
    home: { id: 3, name: 'Team C' },
    away: { id: 4, name: 'Team D' },
  },
]

export const externalMatches: IMatchExternal[] = [
  {
    id: 1,
    scores: { score: '2 — 1' },
    home: { id: 1, name: 'Team A' },
    away: { id: 2, name: 'Team B' },
  },
  {
    id: 2,
    scores: { score: '3 — 0' },
    home: { id: 3, name: 'Team C' },
    away: { id: 4, name: 'Team D' },
  },
]
