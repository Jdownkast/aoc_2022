function unpackSections(input) {
  [elf_1, elf_2] = input.split(",");
  [elf_1_1, elf_1_2] = elf_1.split("-");
  [elf_2_1, elf_2_2] = elf_2.split("-");

  return [
    parseInt(elf_1_1, 10),
    parseInt(elf_1_2, 10),
    parseInt(elf_2_1, 10),
    parseInt(elf_2_2, 10),
  ];
}

function between(num, r1, r2) {
  if (num >= r1 && num <= r2) {
    return true;
  }
  return false;
}

function compareSections(unpacked) {
  [elf_1_1, elf_1_2, elf_2_1, elf_2_2] = unpacked;

  if (
    between(elf_2_1, elf_1_1, elf_1_2) ||
    between(elf_1_1, elf_2_1, elf_2_2)
  ) {
    return true;
  }
  return false;
}

async function read() {
  let response = await fetch("./input_4.txt");
  let data = await response.text();
  return data;
}

async function main() {
  let input = (await read()).split(/\r\n/);
  let sum = 0;

  for (let pair = 0; pair < input.length; pair++) {
    sum += compareSections(unpackSections(input[pair]));
  }

  console.log(sum);
}

main();
