// Grey Cat Animations
import grey_idle from './assets/cats/grey/cat_idle.gif'
import grey_jump from './assets/cats/grey/cat_jump.gif'
import grey_landing from './assets/cats/grey/cat_landing.gif'
import grey_run from './assets/cats/grey/cat_run.gif'

// Brown Cat Animations
import brown_idle from './assets/cats/brown/cat_idle.gif'

// Light Brown Cat Animations
import light_brown_idle from './assets/cats/light_brown/cat_idle.gif'

// Orange Cat Animations
import orange_idle from './assets/cats/orange/cat_idle.gif'


export const cats = {
  brown: {
    idle: brown_idle
  },
  light_brown: {
    idle: light_brown_idle
  },
  grey: {
    idle: grey_idle,
    jump: grey_jump,
    landing: grey_landing,
    run: grey_run
  },
  orange: {
    idle: orange_idle
  }
}

export default cats;