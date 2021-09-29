function concatArray() {
  let sentence1 = ["Greetings", "from", "the", "dog"];
  let sentence2 = ["All", "I", "want", "for", "christmas", "is", "you"];
  console.log(
    sentence1[0] + " " + sentence1[1] + " " + sentence1[2] + " " + sentence1[3] + '.'
  );
  console.log(
    sentence2[0] +
      " " +
      sentence2[1] +
      " " +
      sentence2[2] +
      " " +
      sentence2[3] +
      " " +
      sentence2[4] +
      " " +
      sentence2[5] +
      " " +
      sentence2[6] + '.'
  );
  console.log([] + '.')
}

concatArray();
