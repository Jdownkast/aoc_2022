async function read() {
  let response = await fetch("./input_1.txt");
  let data = await response.text();
  return data;
}

async function main() {
  let elves_total = [];
  let data = await read();

  const elves = data.split(/\n\s*\n/);

  for (let i = 0; i < elves.length; i++) {
    let backpack = elves[i].split(/\n\s*/);
    let calories = 0;

    for (let j = 0; j < backpack.length; j++) {
      calories = calories + parseInt(backpack[j], 10);
    }

    elves_total.push(calories);
  }

  elves_total.sort(function (a, b) {
    return a - b;
  });
  elves_total.reverse();

  console.log(elves_total[0] + elves_total[1] + elves_total[2]);
}

main();
