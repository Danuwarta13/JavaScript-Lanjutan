function repetLog(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
repetLog();

function reapet(n, action) {
  for (let i = 1; i <= n; i++) {
    action(i);
  }
}
// reapet(3, console.log);
// reapet(3, alert);
reapet();
