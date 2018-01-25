const sortString = (string) => {
  return string
    .split('')
    .sort((a, b) => { return a < b })
    .join('');
}

module.exports = sortString;