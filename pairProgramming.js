function pairProgramming(experiences, isMostExperienced) {
  if (
    Array.isArray(experiences) &&
    Array.length !== 0 &&
    typeof isMostExperienced === "boolean"
  ) {
    let tab = [];
    if (isMostExperienced) {
      let max1 = experiences[0];
      let max2 = experiences[1];

      if (max1 > max2) {
        max2 = max1;
        max1 = max2;
      }

      experiences.forEach((item) => {
        if (item >= max2) {
          max1 = max2;
          max2 = item;
          return;
        }
        return;
      });

      const indexMax1 = experiences.findIndex((item) => item === max1);
      const indexMax2 = experiences.findIndex((item) => item === max2);

      tab.push(indexMax1, indexMax2);

      return tab;
    } else {
      let tab = [];
      let min1 = experiences[0];
      let min2 = experiences[1];

      if (min1 > min2) {
        min2 = min1;
        min1 = min2;
      }

      experiences.forEach((item) => {
        if (item < min2 && item > min1) {
          min2 = item;
          return;
        } else if (item < min1) {
          min1 = item;
          return;
        }
        return;
      });

      const indexMax1 = experiences.findIndex((item) => item === min1);
      const indexMax2 = experiences.findIndex((item) => item === min2);

      tab.push(indexMax1, indexMax2);

      return tab;
    }
  }
}
