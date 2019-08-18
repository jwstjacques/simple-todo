'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE'
    });
  };
  return TodoItem;
};
