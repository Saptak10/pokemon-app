const express = require('express')
const router = express.Router();

const { getPokemon, getPokemonById } = require('../controller/pokemonController')
  
router.get('/', getPokemon)

router.get('/:id', getPokemonById)

module.exports = router;