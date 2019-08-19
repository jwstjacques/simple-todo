const todoItemsController = require('../controllers').todoItems;
const todosController = require('../controllers').todos;

module.exports = (app) => {
  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);

  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);

  app.post('/api/todos/:todoId/items', todoItemsController.create);
};
