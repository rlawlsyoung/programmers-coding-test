function 올바른괄호(s) {
  let count = 0;

  if (s[0] === ")") return false;

  for (let i = 0; i < s.length; i++) {
    const currentS = s[i];
    if (currentS === "(") count++;
    else count--;

    if (count < 0) {
      return false;
    }
  }

  if (count === 0) return true;
  else return false;
}

올바른괄호("()()");

//? 실행 결과) true
