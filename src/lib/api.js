export async function fetchPokemon(id) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  )
  const data = await response.json()
  return data
}
