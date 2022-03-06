const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const CLIENTE_SERVICE = 'clienteService';

// Lista todos os clientes
router.get('/', asyncHandler(async (req, res) => {
  res.send(await res.app.get(CLIENTE_SERVICE).getAll());
}));

// Detalha um cliente
router.get('/:id', asyncHandler(async (req, res) => {
  res.send(await res.app.get(CLIENTE_SERVICE).getById(req.params.id));
}));

// Insere um cliente
router.post('/', asyncHandler(async (req, res) => {
  res.status(201).send(await res.app.get(CLIENTE_SERVICE).save(req.body));
}));

// Altera um cliente
router.put('/:id', asyncHandler(async (req, res) => {
  res.status(200).send(await res.app.get(CLIENTE_SERVICE).update(req.params.id, req.body));
}));

// Exclui um cliente
router.delete('/:id', asyncHandler(async (req, res) => {
  const deleted = await res.app.get(CLIENTE_SERVICE).deleteById(req.params.id);
  res.status(deleted.count == 1 ? 204 : 404).end();
}));

module.exports = router;
