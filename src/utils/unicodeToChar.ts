const unicodeToChar = (text: string) =>
  text.replace(/\\u[\dA-F]{4}/gi, function (match) {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
  });

export default unicodeToChar;
