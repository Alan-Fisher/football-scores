import { makeAutoObservable } from 'mobx'

import { IMatch } from './match.types'

export class MatchStore {
  matches: IMatch[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setMatches(matches: IMatch[]) {
    this.matches = matches
  }
}
