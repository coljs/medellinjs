import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import PageLoading from "./layouts/PageLoading"
import Homepage from "./layouts/Homepage"
import Post from "./layouts/Post"

import RaffleComponent from './components/Raffle'

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      PageLoading,
      Homepage,
      Post,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="/sorteo" component={ RaffleComponent } />
    <Route path="*" component={ PageContainer } />
  </Route>
)
