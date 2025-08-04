const isValidParentheses = (s: string): boolean => {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    switch (char) {
      case '(':
        stack.push(char);
        break;
      case '{':
        stack.push(char);
        break;
      case '[':
        stack.push(char);
        break;
      case ')':
        if (stack.pop() !== '(') {
          return false;
        }
        break;
      case '}':
        if (stack.pop() !== '{') {
          return false;
        }
        break;
      case ']':
        if (stack.pop() !== '[') {
          return false;
        }
        break;
      default:
        continue;
    }
  }

  return stack.length === 0;
};

export default isValidParentheses;
