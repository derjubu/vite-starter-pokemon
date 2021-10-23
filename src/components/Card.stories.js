import Card from './Card'

export default {
  title: 'components/Card',
  component: Card,
}

export const ShortText = () => Card('Short text')
export const LongText = () =>
  Card('This is a very long text to show how the component behaves')
