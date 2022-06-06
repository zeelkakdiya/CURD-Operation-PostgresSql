import pgPromise from 'pg-promise'

const pg = pgPromise({})
export const db = pg("postgres://postgres:zeel@localhost:5432/fleetdb")






