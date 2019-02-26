

import hat1 from './assets/hats/hat1.png';
import hat2 from './assets/hats/hat2.png';
import hat3 from './assets/hats/hat3.png';
import hat4 from './assets/hats/hat4.png';
import hat5 from './assets/hats/hat5.png';



const hats = {
  hat1: {
    name: 'Master Hat',
    icon: hat1,
    tier: 2,
    powerup: {
      modifier: 1.25,
      type: 'speed'
    }
  },
  hat2: {
    name: 'Jumpy hat',
    icon: hat2,
    tier: 3,
    powerup: {
      modifier: 1.3,
      type: 'jump'
    }
  },
  hat3: {
    name: '',
    icon: hat3,
    tier: 1,
    powerup: {
      modifier: 1,
      type: null
    }
  },
  hat4: {
    name: '',
    icon: hat4,
    tier: 1,
    powerup: {
      modifier: 1,
      type: null
    }
  },
  hat5: {
    name: '',
    icon: hat5,
    tier: 1,
    powerup: {
      modifier: 1,
      type: null
    }
  }
}

export default hats;