let users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
getUserNames(users);
getUserNamesLength(users);

function getUserNames(users) {
  const usernames = users.map((el) => {
    return el.username;
  });
  console.log(usernames);
}
function getUserNamesLength(users) {
  const userNamesLength = users.map((el) => {
    return el.username.length;
  });
  console.log(userNamesLength);
}
