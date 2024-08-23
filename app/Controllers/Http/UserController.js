'use strict'

class UserController {
    async index() {
        return { result: 'Todos users'}
    }
    
    async show(id) {
        return { result: 'Usuário epecifico'}
    }

    async store() {
        return { result: 'Salvar'}
    }

    async update(id) {
        return { result: 'Atualizar'}
    }
    
    async destroy(id) {
        return { result: 'remover'}
    }
}

module.exports = UserController
