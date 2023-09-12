async function read() {
  let response = await fetch("./input_.txt");
  let data = await response.text();
  return data;
}

async function main() {
  let input = await read();

  console.log(input);
}

main();
