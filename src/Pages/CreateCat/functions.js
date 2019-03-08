export const catPicker = (value) => {
  let choosenCat;
  switch (value) {
    case 0: {
      choosenCat = "brown";
      break;
    }
    case 1: {
      choosenCat = "light_brown";
      break;
    }
    case 2: {
      choosenCat = "grey";
      break;
    }
    case 3: {
      choosenCat = "orange";
      break;
    }
    default: {
      throw Error("");
    }
  }
  return choosenCat
}