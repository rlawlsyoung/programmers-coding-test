function solution(s) {
  const strArr = s.toLowerCase().split(" ");
  const upperStrArr = strArr.map(
    (str) => str.charAt(0).toUpperCase() + str.substring(1)
  );

  return upperStrArr.join(" ");
}

solution("3people unFollowed me");

//? "3people Unfollowed Me"
