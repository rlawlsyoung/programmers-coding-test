function jadenCase문자열만들기(s: string) {
  const strArr = s.toLowerCase().split(" ");
  const upperStrArr = strArr.map(
    (str) => str.charAt(0).toUpperCase() + str.substring(1)
  );

  return upperStrArr.join(" ");
}

jadenCase문자열만들기("3people unFollowed me");

//? 실행 결과) "3people Unfollowed Me"
