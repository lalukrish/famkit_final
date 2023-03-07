import images from './images';

const wines = [
  {
    title: 'pizza',
    price: '$56',
    tags: 'AU | M',
  },
  {
    title: 'alfam',
    price: '$59',
    tags: 'AU | full',
  },
  {
    title: 'meals',
    price: '$44',
    tags: 'FR | spcl',
  },
  {
    title: 'chicken biriyani',
    price: '$31',
    tags: 'CA | half',
  },
  {
    title: 'burger',
    price: '$26',
    tags: 'IE | jumbo',
  },
];

const cocktails = [
  {
    title: 'carrot',
    price: '$20',
    // tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "beans",
    price: '$16',
    // tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Potato',
    price: '$10',
    // tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Tomato',
    price: '$31',
    // tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'onion',
     price: '$26',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
