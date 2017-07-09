import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'
import { meteorClientConfig } from 'meteor/apollo'

import * as React from 'react'
import * as ReactDOM from 'react-dom/server'

import ApolloClient from 'apollo-client'
import { createMeteorNetworkInterface } from 'meteor/apollo'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ApolloProvider, renderToStringWithData, getDataFromTree } from 'react-apollo'

import { match, StaticRouter } from 'react-router'
import createMemoryHistory from 'history/createMemoryHistory'

import * as Express from 'express'

import 'isomorphic-fetch'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import Helmet from 'react-helmet'

import { ServerStyleSheet } from 'styled-components'

import reduxStore from '../redux-store'
import Routes from '../routes'

import routes from '../routes'
import apolloClient from '../apollo-client'
import ApolloServer from '../../api'


ApolloServer()
const app = Express()

app.use(cookieParser())
app.use(bodyParser.json())

app.use((req, res, next) => {

  const history = createMemoryHistory(req.url)
  const client = apolloClient(req)
  const store = reduxStore(history, client)
  const context = {}

  const sheet = new ServerStyleSheet()

  const APP = (
    <ApolloProvider client={client} store={store}>
      <StaticRouter context={context} location={req.url}>
        <Routes />
      </StaticRouter>
    </ApolloProvider>
  )

  sheet.collectStyles(APP)

  renderToStringWithData(
    APP
  ).then((content) => {
    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      res.redirect(301, context.url)
      next()

    } else {

      const initialState = {
        apollo: {
          data: store.getState().apollo.data
        }
      }
      const hydrateApollo = `<script>window.__APOLLO_STATE__=${JSON.stringify(initialState).replace(/</g, '\\u003c')};</script>`
      req.dynamicHead = `${sheet.getStyleTags()}`
      req.dynamicBody = `<div id="react-app">${content}</div> ${hydrateApollo}`

      next()
    }
  })
})

WebApp.connectHandlers.use(Meteor.bindEnvironment(app))


