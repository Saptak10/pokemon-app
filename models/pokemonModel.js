const mongoose = require('mongoose')

const pokemonSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            required: true,
        },
        attacks: { 
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        abilities: { 
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
)

module.exports = mongoose.model("Pokemon", pokemonSchema)