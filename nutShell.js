const address = "vanamalajayanth@Vanamalas-MacBook-Pro";
let directory = [];

const changeDir = function (args) {
  const array = args.split("/");

  for (const element of array) {
    element === ".." ? directory.pop() : directory.push(element);
  }
};

const getNextDir = function (commandArray) {
  const command = commandArray[0];
  const details = commandArray[1];

  switch (command) {
    case 'cd':
      changeDir(details);
    case "pwd":
      console.log(directory.join("/"));
    default:
      return "command not found";
  }
};

while (true) {
  const command = prompt(address + "-" + directory.join("/") + " %");
  getNextDir(command.split(" "));
}