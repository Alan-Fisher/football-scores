import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Matches } from './Matches'

jest.mock('entities/match', () => {
  const matches = [
    {
      id: 1, home: { name: 'Team A' }, away: { name: 'Team B' }, score: '1 - 0',
    },
    {
      id: 2, home: { name: 'Team C' }, away: { name: 'Team D' }, score: '2 - 2',
    },
  ]

  return ({
    MatchService: jest.fn().mockImplementation(() => ({
      getLiveMatches: jest.fn().mockResolvedValue(matches),
    })),
    MatchStore: jest.fn().mockImplementation(() => ({
      matches,
    })),
  })
})

describe('Matches component', () => {
  it('Renders table with correct columns and data', async () => {
    render(<Matches />)
    expect(screen.getByRole('table')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Team A')).toBeInTheDocument()
      expect(screen.getByText('Team B')).toBeInTheDocument()
      expect(screen.getByText('1 - 0')).toBeInTheDocument()

      expect(screen.getByText('Team C')).toBeInTheDocument()
      expect(screen.getByText('Team D')).toBeInTheDocument()
      expect(screen.getByText('2 - 2')).toBeInTheDocument()
    })
  })
})
