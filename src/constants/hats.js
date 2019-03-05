

import hat1 from './assets/hats/hat1.png';
import hat2 from './assets/hats/hat2.png';
import hat3 from './assets/hats/hat3.png';
import hat4 from './assets/hats/hat4.png';
import hat5 from './assets/hats/hat5.png';


const hats = [
  {
    name: 'Master Hat',
    icon: hat1,
    tier: 2,
    powerup: {
      modifier: 1.25,
      type: 'speed'
    }
  },
  {
    name: 'Jumpy hat',
    icon: hat2,
    tier: 3,
    powerup: {
      modifier: 1.3,
      type: 'jump'
    }
  },
  {
    name: 'Wierd hat',
    icon: hat3,
    tier: 1,
    powerup: {
      modifier: 1,
      type: null
    }
  },
  {
    name: 'Cool hat',
    icon: hat4,
    tier: 1,
    powerup: {
      modifier: 1,
      type: null
    }
  },
  {
    name: 'Epic hat',
    icon: hat5,
    tier: 1,
    powerup: {
      modifier: 1,
      type: null
    }
  }
]

export default hats;