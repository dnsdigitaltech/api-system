'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { status: 'Online' }
})

Route.resource('users', 'UserController').apiOnly()
Route.resource('clients', 'ClientController').apiOnly()
Route.resource('exercises', 'ExerciseController').apiOnly()
Route.resource('trainings', 'TrainingController').apiOnly()