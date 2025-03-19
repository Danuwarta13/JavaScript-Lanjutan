// Contoh 1
function repetLog(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// repetLog(3);
// repetLog(5);
repetLog();

// Contoh 2
function reapet(n, action) {
  for (let i = 1; i <= n; i++) {
    action(i);
  }
}
// reapet(3, console.log);
// reapet(3, alert);
reapet();
