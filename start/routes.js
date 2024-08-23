'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { status: 'Online' }
})

Route.resource('users', 'UserController').apiOnly().validator(new Map([
  [['users.store'], ['User']],[['users.update'], ['User']]
]))

Route.resource('clients', 'ClientController').apiOnly().validator(new Map([
  [['clients.store'], ['Client']],[['clients.update'], ['Client']]
]))
Route.resource('exercises', 'ExerciseController').apiOnly()
Route.resource('trainings', 'TrainingController').apiOnly()