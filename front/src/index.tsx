import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import {Lobby} from '~/lobby/main'

import {RowContainer} from './common/components/common'
import GlobalStyle from './common/components/globalStyles'

const AppWrapper = styled(RowContainer)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: black;
  min-height: 0;
  min-width: 0;
`

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <AppWrapper>
        <RowContainer stretched>
          <Lobby/>
        </RowContainer>
      </AppWrapper>
    </>
  )
}

const renderApp = (Component: React.FC) => {
  ReactDOM.render(<Component/>, document.getElementById('root'))
}

renderApp(App)


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration)
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}
