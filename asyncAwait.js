console.log("person1 gets ticket");
console.log("person2 gets ticket");
const promiseWifeBringingTicks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
  console.log("wife: i have the tics");

  console.log("husband: we should go in");

  console.log("wife: no i am hungry");

  return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
  console.log("husband; i got some popcorn");
  console.log("husband: we should go in");

  console.log("wife: I need butter on my popcorn");

  return new Promise((resolve, reject) => resolve(`${t} butter`));
});

getButter.then((t) => console.log(t));

console.log("person4: shows ticket");
console.log("person5: shows ticket");

// async await code
console.log("person1 gets ticket");
console.log("person2 gets ticket");
const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));
  const addButter = new Promise((resolve, reject) => resolve("butter"));
  const coldDrink = new Promise((resolve, reject) => resolve("coldDrink"));
  let ticket = await promiseWifeBringingTicks;

  console.log("wife: i have the tics");
  console.log("hushand: we should go in");
  console.log("wife: no i am hungry");
  let popcorn = await getPopcorn;

  console.log(`husband: i got some ${popcorn}`);

  console.log("husband: we should go in");
  console.log("wife: I need butter on my popcorn");

  let butter = await addButter;
  console.log(`husband: i got some ${butter} on popcorn`);
  console.log("husband: anything else darling?");
  console.log("wife: I need cold drinks with popcorn");
  let drinks = await coldDrink;
  console.log(`husband: i got some ${drinks}`);
  console.log("wife: lets got we are getting late");
  console.log("husband: thank you for the reminder *grins* ");
  return ticket;
};
preMovie().then((m) => console.log(m));
console.log("person4: shows ticket");
console.log("person5: shows ticket");
