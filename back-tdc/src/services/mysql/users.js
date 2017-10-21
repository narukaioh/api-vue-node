
const users = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT id, email FROM users', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar os users', reject)
            return false
          }
          resolve({ users: results })
        })
      })
    },
    save: (email, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao salvar o usuário ${email}`, reject)
            return false
          }
          resolve({ user: { email, id: results.insertId } })
        })
      })
    },
    update: (id, email) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('UPDATE users SET email = ? WHERE id = ?', [email, id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Falha ao atualizar o usuário ${email}`, reject)
            return false
          }
          resolve({ user: { email, id }, affectedRows: results.affectedRows })
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Falha ao remover o usuário de id ${id}`, reject)
            return false
          }
          resolve({ message: 'Usuário removido com sucesso!', affectedRows: results.affectedRows })
        })
      })
    }
  }
}

module.exports = users
