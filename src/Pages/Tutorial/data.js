import cats from '../../constants/cats';
import hats from '../../constants/hats';

export const tutorial_page_1 = [
  {
    content: 'A cat with a hat is a game where you collects hats and the one with most hats wins. You can either search for hats on a map in real places around the world. ',
    type: 'text'
  }
];

export const tutorial_page_2 = [
  {
    content: 'Or you can challenge persons who are nearby on the street. You can also pick a fight with the computer to win hats. It\'s like poker you bet the hat you have on and if you lose the competition gets your hat. Their are different hats and some of them have one or more powerboost that can be used in the battle mode.',
    type: 'text'
  }
];

export const tutorial_page_3 = [
  {
    content: cats[0].animations.idle,
    type: 'icon'
  },
  {
    content: 'You start by picking a prefered color',
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
