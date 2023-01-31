const prom = Notification.requestPermission();
prom.then((param) => {
  if (param === "granted") {
    console.log("has dicho que si");
  } else {
    console.log("has dicho que No");
  }
});
// prom.catch(() => {
//   console.log("adios");
// });
