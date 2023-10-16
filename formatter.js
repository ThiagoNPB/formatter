const removesDashes = (phrase) =>
  phrase
    .split("")
    .filter((e) => e !== "-")
    .join("");

const addDashes = (stringWithoutDashes, amountOfDashes) => {
  const hasRemainder = stringWithoutDashes.length % amountOfDashes;

  const firstGroupLength = hasRemainder || amountOfDashes;

  let formattedPhrase = stringWithoutDashes.slice(0, firstGroupLength);

  for (
    let i = firstGroupLength;
    i < stringWithoutDashes.length;
    i += amountOfDashes
  ) {
    formattedPhrase += "-" + stringWithoutDashes.slice(i, i + amountOfDashes);
  }

  return formattedPhrase;
};

const formatter = (phrase, amountOfDashes) => {
  const stringWithoutDashes = removesDashes(phrase).toUpperCase();
  return addDashes(stringWithoutDashes, amountOfDashes);
};

module.exports = { formatter };
