const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
  async create(req, res) {
    try {
      const todo = await Todo.create({
        title: req.body.title
      });

      return res.status(201).json(todo);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async destroy(req, res) {
    try {
      const todo = await Todo.findById(req.params.todoId);

      if (!todo) {
        return res.status(400).json({
          message: 'Todo Not Found'
        });
      }

      await todo.destroy();
      return res.status(204);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async list(req, res) {
    try {
      const todos = await Todo.findAll({
        include: [
          {
            model: TodoItem,
            as: 'todoItems'
          }
        ]
      });
      return res.status(200).json(todos);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  async retrieve(req, res) {
    try {
      const todo = await Todo.findByPk(req.params.todoId, {
        include: [
          {
            model: TodoItem,
            as: 'todoItems'
          }
        ]
      });

      if (!todo) {
        return res.status(404).json({
          message: 'Todo Not Found'
        });
      }

      return res.status(200).json(todo);
    } catch (err) {
      return res.status(400).json(error);
    }
  },
  async update(req, res) {
    try {
      const todo = await Todo.findByPk(req.params.todoId, {
        include: [
          {
            model: TodoItem,
            as: 'todoItems'
          }
        ]
      });

      if (!todo) {
        return res.status(404).json({
          message: 'Todo Not Found'
        });
      }

      await todo.update({
        title: req.body.title || todo.title
      });
      return res.status(200).json(todo);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
};
