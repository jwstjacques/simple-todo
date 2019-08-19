const TodoItem = require('../models').TodoItem;

module.exports = {
  async create(req, res) {
    try {
      const item = await TodoItem.create({
        content: req.body.content,
        todoId: req.params.todoId
      });

      return res.status(201).json(item);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
};
