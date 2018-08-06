Anon Me
=========

#### Ruby 2.5.1
#### Rails 5.2.0

---
React Single Page App (SAP) with a Rails API backend used to promote privacy via generation of unique data for website sign ups.

*Note: This project is a work in progress*

### Dependencies

This service has dependencies on the following services:

1. Ruby `2.5.1`
1. Postgres
1. React

### Local development (without Docker)
To start the application from project folder:

1. Start App: `$ rails s`
1. Access Sidekiq via browser: `$ open http://localhost:3000`

### Database

#### Migration

A rake task needs to be executed the first time the project is set up in order to migrate the database.

1. `rake db:create db:migrate` (Local)

### Rspec

1. `bundle exec rspec`

### Environment Variables

| Variable       |  Description   | Default                 |
| ---------------|:---------------|:-----------------------:|
| `DATABASE_URL`  | Postgres URL   | postgres://localhost:5432/anon_development |

### Deployment

App is currently hosted on Heroku free tier. Run the following to deploy via Heroku CLI:

`git push heroku master`

### TODO

1. Add Docker
1. Add UI tests
1. Determine if ActiveAdmin CMS is required (probably not)
1. Replace Address with valid values (currently mocked)
1. Replace Phone Number with valid values (currently mocked)
