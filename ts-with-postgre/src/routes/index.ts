import express from 'express'
const app = express()

import {router as countryRouter} from './app-routes'


app.use('/country',countryRouter)

export {app};
