function unpack_backpack(contents) {
  half_a = contents.slice(0, contents.length / 2);
  half_b = contents.slice(contents.length / 2);
  return [half_a, half_b];
}

function compare_contents(contents_split) {
  [half_a, half_b] = contents_split;

  for (let i = 0; i < half_a.length; i++) {
    if (half_b.split("").includes(half_a.charAt(i))) {
      return half_a.charAt(i);
    }
  }
  return null;
}

function priority(char) {
  if (char == char.toUpperCase()) {
    return char.charCodeAt(0) - 64 + 26;
  }
  return char.charCodeAt(0) - 96;
}

async function read() {
  let response = await fetch("./input_3.txt");
  let data = await response.text();
  return data;
}

async function main() {
  let input = await read();

  const sum = input
    .split(/\r\n/)
    .reduce(
      (sum, contents) =>
        sum + priority(compare_contents(unpack_backpack(contents))),
      0
    );

  console.log(sum);
}

main();
