async function read() {
  let response = await fetch("./input_2.txt");
  let data = await response.text();
  return data;
}

async function main() {
  const hand_value = {
    D: 1,
    E: 2,
    F: 3,
  };

  const result_value = {
    X: 0,
    Y: 3,
    Z: 6,
  };

  const you = {
    A: { X: "F", Y: "D", Z: "E" },
    B: { X: "D", Y: "E", Z: "F" },
    C: { X: "E", Y: "F", Z: "D" },
  };

  let data = await read();
  const score = data
    .split(/\s+\n/)
    .map((round) => round.split(/\s+/))
    .reduce(
      (score, [opp, result]) =>
        score + hand_value[you[opp][result]] + result_value[result],
      0
    );

  console.log(score);
}

main();
