import { jest } from '@jest/globals'

import locale from '../src/locale/en.json'

jest.mock('mobx-react-lite', () => ({
  observer: (component) => component,
}))

jest.mock('i18next', () => ({
  t: jest.fn((key: string) => locale[key]),
}))

jest.mock('antd', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...jest.requireActual<any>('antd'),
  message: {
    error: jest.fn(),
  },
}))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
