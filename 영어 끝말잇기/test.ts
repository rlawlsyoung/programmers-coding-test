function 영어끝말잇기(n: number, words: string[]) {
  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    const player = (i % n) + 1;
    const turn = Math.floor(i / n) + 1;

    if (words[i - 1].slice(-1) !== currentWord.charAt(0)) {
      return [player, turn];
    }

    if (words.indexOf(currentWord) !== i) {
      return [player, turn];
    }
  }

  return [0, 0];
}

영어끝말잇기(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);

//? 실행 결과) [3,3]
