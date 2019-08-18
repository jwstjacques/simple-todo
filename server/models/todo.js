'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });
  Todo.associate = function(models) {
    Todo.hasMany(models.TodoItem, {
      as: 'todoItems',
      foreignKey: 'todoId'
    });
  };
  return Todo;
};
