const asyncHandler = require('express-async-handler')
// const Pokemon = require('../models/pokemonModel')
// const pokemons = require('../data')

module.exports.getPokemon = asyncHandler(async (req, res) => {
    // res.json(pokemons)
    res.json({ message: 'Hello' })
})

module.exports.getPokemonById = asyncHandler(async(req, res) => {
    // const pokemon = await pokemons.find((p) => p._id === req.params.id)
    // if(pokemon) {
    //     res.json(pokemon)
    // }else{
    //     res.status(404).json({ message: 'Pokemon Not Found' })
    // }
    res.json({ message: 'Hello' })
})