let input = prompt("What Would You Like To DO : ");
const todos = ["web", "read"];
while (input !== "quit") {
  if (input === "list") {
    console.log("***************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} : ${todos[i]}`);
    }
    console.log("***************");
  } else if (input === "new") {
    const newToDO = prompt("Enter New ToDO : ");
    todos.push(newToDO);
  } else if (input === "delete") {
    const i = prompt("Enter Index Of ToDo to Delete : ");
    todos.splice(i, 1);
  }
  input = prompt("What Would You Like To DO : ");
}
