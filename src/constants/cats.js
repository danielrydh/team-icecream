// Grey Cat Animations
import grey_idle from './assets/cats/grey/cat_idle.gif'

// Brown Cat Animations
import brown_idle from './assets/cats/brown/cat_idle.gif'

// Light Brown Cat Animations
import light_brown_idle from './assets/cats/light_brown/cat_idle.gif'

// Orange Cat Animations
import orange_idle from './assets/cats/orange/cat_idle.gif'


const cats = [
  {
    id: 0,
    name: "brown",
    animations: {
      idle: brown_idle
    }
  },
  {
    id: 1,
    name: "light_brown",
    animations: {
      idle: light_brown_idle
    }
  },
  {
    id: 2,
    name: "grey",
    animations: {
      idle: grey_idle,
    }
  },
  {
    id: 3,
    name: "orange",
    animations: {
      idle: orange_idle
    }
  }
];

export const randomCat = (arr) => {
  // Randomize id between 1 and 4
  const randomNumber = Math.floor(Math.random() * cats.length);
  // Get a cat animation and return it
  return arr.find(cat => cat.id === randomNumber).animations.idle;
}


export default cats;