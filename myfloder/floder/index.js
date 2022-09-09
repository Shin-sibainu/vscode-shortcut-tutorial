const list = [1, 2, 3];
const user = { id: 1, username: "shincode" };

const someFunction = () => {
  if (user) {
    console.log(user);
  } else {
    alert("not user here");
  }
};

const listFunction = () => {
  if (list.length > 3) {
    console.log(list);
  } else {
    alert(user);
  }
};
