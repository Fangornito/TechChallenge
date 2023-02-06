const AbstractManager = require("./AbstractManager");

class argonauteManager extends AbstractManager {
  constructor() {
    super({ table: "argonaute" });
  }

  insert(argonaute) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [argonaute.name]
    );
  }

  delete(id) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ? `, [
      id,
    ]);
  }
}

module.exports = argonauteManager;
