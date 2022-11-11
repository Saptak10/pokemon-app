import React from 'react'
import Pokemons from './Pokemons'
import { useEffect, useState } from 'react';
import axios from 'axios'

const Pokemon = () => {

const [pokemons, setAllPokemons] = useState([])

  useEffect(() => {
    const fetchPokemon = async() => {
      const { data } = await axios.get(`https://api.pokemontcg.io/v2/cards?page=1&pageSize=1`)

      setAllPokemons(data)
    }

    fetchPokemon()
  }, [])

  return (
    <div>
        {pokemons.map((item) => (
            <Pokemons item={item} key={item.id} />
        ))}
        {/* <Pokemons /> */}
    </div>
  )
}

export default Pokemon