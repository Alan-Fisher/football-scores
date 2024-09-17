import React, { useEffect, useState } from 'react'
import {
  Table, Spin, Typography,
} from 'antd'
import { observer } from 'mobx-react-lite'
import { t } from 'i18next'

import { MatchService, MatchStore } from 'entities/match'

import * as Style from './Matches.styles'

const { Title } = Typography

export const Matches: React.FC = observer(() => {
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getMatches = () => {
      setLoading(true)

      matchService.getLiveMatches()
        .finally(() => setLoading(false))
    }

    getMatches()

    // TODO: return
    // const intervalId = setInterval(getMatches, 2000) // TODO: change interval to 30000

    // return () => clearInterval(intervalId)
  }, [])

  const columns = [
    {
      title: t('Matches.homeTeam'),
      dataIndex: 'home',
      key: 'home',
      render: (home: { name: string }) => home.name,
    },
    {
      title: t('Matches.awayTeam'),
      dataIndex: 'away',
      key: 'away',
      render: (away: { name: string }) => away.name,
    },
    {
      title: t('Matches.score'),
      dataIndex: 'score',
      key: 'score',
    },
  ]

  return (
    <Style.Container>
      <Style.TableWrapper title={(
        <Title level={2}>
          {t('Matches.currentMatches')}
          {' '}
          {isLoading ? <Spin size="large" /> : '⚽️'}
        </Title>
      )}
      >
        <Table // TODO: make it heigh even when loading
          columns={columns}
          dataSource={matchStore.matches}
          loading={isLoading && !!matchStore.matches}
          pagination={false}
          rowKey="id"
          scroll={{ y: '70vh' }}
        />
      </Style.TableWrapper>
    </Style.Container>
  )
})

const matchStore = new MatchStore()
const matchService = new MatchService(matchStore)
