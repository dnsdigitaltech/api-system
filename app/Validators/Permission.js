'use strict'

class Permission {
  get rules () {
    return {
      slug: 'required',
      name: 'required',
      description: 'required',
    }
  }

  get messages() {
    return {
      'slug.required': 'Informe a propriedade slug',
      'name.required': 'Informe a propriedade name',
      'description.required': 'Informe a propriedade description',
    }
  }
}

module.exports = Permission
