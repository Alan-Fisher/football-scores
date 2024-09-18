import React, { useEffect, useState } from 'react'
import {
  Table, Spin, Typography, TableColumnType, Empty,
} from 'antd'
import { observer } from 'mobx-react-lite'
import { t } from 'i18next'

import { MatchService, MatchStore } from 'entities/match'

import * as Style from './Matches.styles'

const { Title } = Typography
const { PRESENTED_IMAGE_SIMPLE } = Empty

export const Matches: React.FC = observer(() => {
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getMatches = () => {
      setLoading(true)
      matchService.getLiveMatches()
        .finally(() => setLoading(false))
    }

    getMatches()

    const intervalId = setInterval(getMatches, 30000)

    return () => clearInterval(intervalId)
  }, [])

  const tableTitle = (
    <Title level={2}>
      {t('Matches.currentMatches')}
      {' '}
      {isLoading ? <Spin size="large" /> : '⚽️'}
    </Title>
  )

  const emptySign = <Empty description={t('Matches.noMatches')} image={PRESENTED_IMAGE_SIMPLE} />

  return (
    <Style.Container>
      <Style.TableWrapper title={tableTitle}>
        <Table
          columns={columns}
          dataSource={matchStore.matches}
          loading={isLoading && !!matchStore.matches.length}
          locale={{ emptyText: emptySign }}
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

const columns: TableColumnType[] = [
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
