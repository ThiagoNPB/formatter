const { formatter } = require("../formatter");

describe("Formatter", () => {
  it.each`
    caracthers        | amountOfDashes | result
    ${"ezg-5u-1"}     | ${4}           | ${"EZ-G5U1"}
    ${"ezg-5u-1"}     | ${2}           | ${"EZ-G5-U1"}
    ${"op123-mnpq23"} | ${2}           | ${"O-P1-23-MN-PQ-23"}
  `(
    "Should return $result for $caracthers string and $amountOfDashes amount of dashes",
    ({ caracthers, amountOfDashes, result }) => {
      console.log({ caracthers, amountOfDashes, result });
      expect(formatter(caracthers, amountOfDashes)).toBe(result);
    }
  );
});
