'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { status: 'Online' }
})

Route.post('/sessions', 'SessionController.create')
Route.put('/sessions', 'SessionController.refreshToken')

Route.resource('users', 'UserController').apiOnly().validator(new Map([
  [['users.store'], ['User']],[['users.update'], ['User']]
])).middleware('auth:jwt')

Route.resource('clients', 'ClientController').apiOnly().validator(new Map([
  [['clients.store'], ['Client']],[['clients.update'], ['Client']]
])).middleware('auth:jwt')

Route.resource('exercises', 'ExerciseController').apiOnly().validator(new Map([
  [['exercises.store'], ['Exercise']],[['exercises.update'], ['Exercise']]
])).middleware('auth:jwt')

Route.resource('trainings', 'TrainingController').apiOnly().validator(new Map([
  [['trainings.store'], ['Training']],[['trainings.update'], ['Training']]
])).middleware('auth:jwt')

Route.resource('products', 'ProductController').apiOnly().validator(new Map([
  [['products.store'], ['Product']],[['products.update'], ['Product']]
])).middleware('auth:jwt')