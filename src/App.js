import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Header } from './components/Header'
import { Content } from './components/Content'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <ListOfCategories />
        <ListOfPhotoCards />
      </Content>
    </>
  )
}

export default App
