import axios from 'axios'

import { Request, Response } from "express"

type PokemonType = {
    slot: number;
    type: {
        name: string;
        url: string
    };
}

export async function getPokemon(req: Request, res: Response<Pokemon>) {
    // id aleatoria de 1 - 151
    const randomID =  Math.round(Math.random() * 150) + 1;

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID}`)

    const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.other.dream_world.front_default, // front_default
        types: data.types.map((type: PokemonType) => {
            return type.type.name
        }),
        cry: `https://pokemoncries.com/cries-old/${data.id}.mp3`
    }

    res.json(pokemon)
}