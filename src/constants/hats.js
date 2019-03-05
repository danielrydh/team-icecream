

import hat1 from './assets/hats/hat1.png';
import hat2 from './assets/hats/hat2.png';
import hat3 from './assets/hats/hat3.png';
import hat4 from './assets/hats/hat4.png';
import hat5 from './assets/hats/hat5.png';
import hat1_128x128 from './assets/hats/hat1_128x128.png';
import hat2_128x128 from './assets/hats/hat2_128x128.png';
import hat3_128x128 from './assets/hats/hat3_128x128.png';
import hat4_128x128 from './assets/hats/hat4_128x128.png';
import hat5_128x128 from './assets/hats/hat5_128x128.png';


const hats = [
  {
    name: 'Master Hat',
    small_icon: hat1,
    big_icon: hat1_128x128,
    tier: 2,
    powerup: {
      modifier: 1.25,
      type: 'speed'
    }
  },
  {
    name: 'Jumpy hat',
    small_icon: hat2,
    big_icon: hat2_128x128,
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

/*export const bigHats = {
  hat1x128: {
    name: '',
    hat: hat1_128x128
  },
  hat2x128: {
    name: '',
    hat: hat2_128x128
  },
  hat3x128: {
    name: '',
    hat: hat3_128x128
  },
  hat4x128: {
    name: '',
    hat: hat4_128x128
  },
  hat5x128: {
    name: '',
    hat: hat5_128x128
  }
} */

export default hats;