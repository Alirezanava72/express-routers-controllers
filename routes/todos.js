var express = require('express');
var router = express.Router();
var todosController = require('../controllers/todos');

// All actual paths start with "/todos"

// GET /todos
router.get('/', todosController.index);
// GET /todos/new <-- Define bnefore show route
router.get('/new', todosController.new);
// Get /Todos/:id
router.get('/:id', todosController.show);
// GET /todos/:id/edit
router.get('/:id/edit', todosController.edit);
// Post /todos
router.post('/', todosController.create)
// DELETE /todos/:id
router.delete('/:id', todosController.delete)
// PUT /todos/:id
router.put('/:id', todosController.update)

module.exports = router;
