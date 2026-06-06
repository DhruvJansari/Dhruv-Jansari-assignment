function isValid(s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map[char]) {
      const topElement = stack.length > 0 ? stack.pop() : "#";

      if (topElement !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
