export interface IMatchExternal {
  id: number,
  home: ITeamExternal,
  away: ITeamExternal,
  scores: {
    score: string,
  }
}

export interface ITeamExternal {
  id: number,
  name: string,
}

export interface IMatch extends Omit<IMatchExternal, 'scores'> {
  score: string,
}
