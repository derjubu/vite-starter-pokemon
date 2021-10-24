import Card from './Card'

export default {
  title: 'components/Card',
  component: Card,
}

export const ShortText = () =>
  Card({
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    name: 'Pikachu',
    id: '8',
    hp: 45,
    type: ['poison', 'water'],
    weight: 89,
    height: 9,
  })
