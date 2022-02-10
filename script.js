// HELLO MY NAME IS SHYNAR BOLATOVA. Here are the solutions^^:

// Problem 1 ------------------------------------------------------

function colorPatternTimes(arr) {
  let coloring_time = 0,
    changing_color_time = 0;
  coloring_time = arr.length * 2;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      changing_color_time++;
    }
  }
  return coloring_time + changing_color_time;
}
// colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]);
// colorPatternTimes(["Blue"]);
// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]);
colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]);

// Problem 2 ------------------------------------------------------

function plant(seed, water, fert, temp) {
  let result = "";
  if ((temp >= 20) & (temp <= 30)) {
    for (i = 0; i < water; i++) {
      for (w = 0; w < water; w++) {
        result += "-";
      }
      for (f = 0; f < fert; f++) {
        result += seed;
      }
    }
  } else {
    for (i = 0; i < water; i++) {
      for (w = 0; w < water; w++) {
        result += "-";
      }
    }
    result += seed;
  }
  return result;
}

plant("@", 3, 3, 25);
// plant("#", 1, 5, 30);
// plant("&", 5, 1, 20);
// plant("§", 3, 3, 15);

//  ------------------------------------------------------
// Thank you for your attention!~.~
