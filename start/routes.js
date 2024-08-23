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

Route.resource('exercises', 'ExerciseController').apiOnly().validator(new Map([
  [['exercises.store'], ['Exercise']],[['exercises.update'], ['Exercise']]
]))

Route.resource('trainings', 'TrainingController').apiOnly().validator(new Map([
  [['trainings.store'], ['Training']],[['trainings.update'], ['Training']]
]))

Route.resource('products', 'ProductController').apiOnly().validator(new Map([
  [['products.store'], ['Product']],[['products.update'], ['Product']]
]))