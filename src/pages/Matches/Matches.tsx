import React, { useEffect, useState } from 'react'
import { Table, Spin, Typography } from 'antd'
import { observer } from 'mobx-react-lite'

import { MatchService, MatchStore } from 'entities/match'

const { Title } = Typography

export const Matches: React.FC = observer(() => {
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getMatches = () => {
      setLoading(true)

      matchService.getLiveMatches()
        .finally(() => setLoading(false)) // TODO: catch (and throw error in service)
    }

    getMatches()

    const intervalId = setInterval(getMatches, 30000)

    return () => clearInterval(intervalId)
  }, [])

  const columns = [
    {
      title: 'Home Team', // TODO: i18n
      dataIndex: 'home',
      key: 'home',
      render: (home: { name: string }) => home.name,
    },
    {
      title: 'Away Team',
      dataIndex: 'away',
      key: 'away',
      render: (away: { name: string }) => away.name,
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
  ]

  return (
    <div>
      <Title level={2}>Current Football Matches</Title>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={matchStore.matches}
          pagination={false}
          rowKey="id"
        />
      )}
    </div>
  )
})

const matchStore = new MatchStore()
const matchService = new MatchService(matchStore)
