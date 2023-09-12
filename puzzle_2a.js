async function read() {
  let response = await fetch("./input_2.txt");
  let data = await response.text();
  return data;
}

async function main() {
  const hand_value = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  const round_value = {
    A: { X: 3, Y: 6, Z: 0 },
    B: { X: 0, Y: 3, Z: 6 },
    C: { X: 6, Y: 0, Z: 3 },
  };

  let data = await read();
  const score = data
    .split(/\s+\n/)
    .map((round) => round.split(/\s+/))
    .reduce(
      (score, [opp, you]) => score + hand_value[you] + round_value[opp][you],
      0
    );

  console.log(score);
}

main();
