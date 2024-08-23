'use strict'

class Training {
  get rules () {
    return {
      client_id: 'required',
      name: 'required',
      observation: 'required',
      exercises: 'required',
    }
  }

  get messages() {
    return {
      'client_id.required': 'Informe a propriedade client_id',
      'name.required': 'Informe a propriedade name',
      'observation.required': 'Informe a propriedade observation',
      'exercises.required': 'Informe a propriedade exercises',
    }
  }
}

module.exports = Training
