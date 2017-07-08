import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'
import { meteorClientConfig } from 'meteor/apollo'

import * as React from 'react'
import * as ReactDOM from 'react-dom/server'

import ApolloClient from 'apollo-client'
import { createMeteorNetworkInterface } from 'meteor/apollo'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'

import { match, StaticRouter } from 'react-router'
import createMemoryHistory from 'history/createMemoryHistory'

import * as Express from 'express'

import 'isomorphic-fetch'
import Helmet from 'react-helmet'

import { ServerStyleSheet } from 'styled-components'

import reduxStore from '../redux'
import Routes from '../routes'

import routes from '../routes'
import apolloClient from '../apollo'
import ApolloServer from '../../api'


const app = Express()

app.use((req, res, next) => {

    const context = {}
    const history = createMemoryHistory(req.url)
    const client = apolloClient(req)
    const store = reduxStore(history, req)

    const sheet = new ServerStyleSheet()

    const component = (
        <ApolloProvider client={client} store={store}>
            <StaticRouter context={context} location={req.url}>
                <Routes />
            </StaticRouter>
        </ApolloProvider>
    )

    renderToStringWithData(
        sheet.collectStyles(component)
    ).then((content) => {
        const initialState = store.getState().apollo.data
        req.dynamicBody = `<div id="react-app">${content}</div>`

        const hydrateApollo = `<script>window.__APOLLO_STATE__ = ${JSON.stringify(initialState)}</script>`

        const head = Helmet.rewind()
        req.dynamicHead = `
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${hydrateApollo}
        ${sheet.getStyleTags()}`
        next()
    })

})

WebApp.connectHandlers.use(Meteor.bindEnvironment(app))
ApolloServer()

