
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";
import { Metadata } from "next";


export const metadata:Metadata= {
    title: 'Lista de Pokemons',
    description: 'Descripcion de todos los pokemons'
}


const getPokemons = async (limit = 50, offset = 0): Promise<SimplePokemon[]> => {

    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    //throw new Error('Este es un error que no deberia ocurrir')

    return pokemons;
}



export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">

        
            <span className="text-5xl my-2">Listado de Pokemon<small className="text-blue-500">estatico</small></span>

            <PokemonGrid
                pokemons={pokemons}
            />
            

        </div>
    );
}