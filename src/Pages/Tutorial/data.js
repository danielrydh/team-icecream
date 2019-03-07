import cats from '../../constants/cats';
import hats from '../../constants/hats';
export const tutorial_page_1 = [
  {
    content: 'A cat with a hat is a game where you collect hats, and the player with most hats wins. You can either search for hats on a map in real places around the world or you can challenge people who are nearby on the street. ',
    type: 'text'
  },
];
export const tutorial_page_2 = [
  {
    content: 'You can also challenge the computer to win hats. It\'s like poker. You bet the hat that your cat is wearing, and if you lose the challenge, the opponent gets your hat. There are different hats, and some of them have one or more special power that can be used in the battle mode.',
    type: 'text'
  },
];
export const tutorial_page_3 = [
  {
    content: cats[0].animations.idle,
    type: 'icon'
  },
  {
    content: 'You start by choosing a cat with a color that you prefer',
    type: 'text'
  },
  {
    content: hats[3].icon,
    type: 'icon'
  },
  {
    content: 'Then match your cat with a nice hat.',
    type: 'text'
  }
];