async function read() {
  let response = await fetch("./input_1.txt");
  let data = await response.text();
  return data;
}

async function main() {
  let max_calories = 0;
  let data = await read();

  const elves = data.split(/\n\s*\n/);

  for (let i = 0; i < elves.length; i++) {
    let backpack = elves[i].split(/\n\s*/);
    let calories = 0;

    for (let j = 0; j < backpack.length; j++) {
      calories = calories + parseInt(backpack[j], 10);
    }

    max_calories = max_calories < calories ? calories : max_calories;
  }

  console.log(max_calories);
}

main();
