function compare_contents(bp1, bp2, bp3) {
  let corresponding12 = [];

  for (let i = 0; i < bp1.length; i++) {
    if (bp2.split("").includes(bp1.charAt(i))) {
      corresponding12.push(bp1.charAt(i));
    }
  }

  for (let i = 0; i < bp3.length; i++) {
    if (corresponding12.includes(bp3.charAt(i))) {
      return bp3.charAt(i);
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

  const backpacks = input.split(/\r\n/);
  let sum = 0;

  for (let i = 0; i < backpacks.length; i = i + 3) {
    sum += priority(
      compare_contents(backpacks[i], backpacks[i + 1], backpacks[i + 2])
    );
  }

  console.log(sum);
}

main();
