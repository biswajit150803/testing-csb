console.log("hello world");
const a = 20;
const b = 12;
const n = 10;
if (a > b) console.log(a + " is greater than b " + b);
else console.log(b + " is greater than " + a);
for (let i = 0; i < n; i++) console.log(i);
try {
  console.log(a / 0);
} catch (e) {
  console.log(e);
}
