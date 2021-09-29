function avgMinMax() {
  let integers = [80, 40, 260, 100];
  let minimum = Math.min.apply(null, integers);
  let maximum = Math.max.apply(null, integers);
  let average = 0;
  for (let i = 0; i < integers.length; i++) {
    let currentNum = integers[i];
    average += currentNum;
  }
  average = average / integers.length;

  console.log(minimum, maximum, average);
}

avgMinMax();
