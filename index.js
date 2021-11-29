const a = 1;
try {
  console.log(a.b.c);
} catch (error) {
  console.log("Failed");
}
