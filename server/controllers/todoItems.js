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
  },
  async destroy(req, res) {
    try {
      const todoItem = await TodoItem.find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId
        }
      });

      if (!todoItem) {
        return res.status(404).json({
          message: 'TodoItem Not Found'
        });
      }

      await todoItem.destroy();
      res.status(204);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  async update(req, res) {
    try {
      const todoItem = await TodoItem.findOne({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId
        }
      });

      if (!todoItem) {
        return res.status(404).json({
          message: 'TodoItem Not Found'
        });
      }

      const updatedTodoItem = await todoItem.update(req.body, {
        fields: Object.keys(req.body)
      });

      return res.status(200).json(updatedTodoItem);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
};
