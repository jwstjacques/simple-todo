const todoItemsController = require('../controllers').todoItems;
const todosController = require('../controllers').todos;

module.exports = (app) => {
  app.get('/api/todos', todosController.list);
  app.post('/api/todos', todosController.create);

  app.delete('/api/todos/:todoId', todosController.destroy);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);

  app.delete(
    '/api/todos/:todoId/items/:todoItemId',
    todoItemsController.destroy
  );
  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);

  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed'
    })
  );
};
