// console.log("Hello");

// setTimeout(function() {
//     console.log("World");
// }, 5000); 

// console.log("ankush");
// setTimeout(()=>{
//     console.log("Gupta")
// },2000)
// setTimeout(function() {
//     console.log("This is a callback function executed after 2 seconds.");
// }, 2000);
// setInterval
// setInterval(function() {
//     console.log("This is a callback function executed every 1 second.");
// }, 1000);

// var randomNum = Math.random();
// console.log("Random number:", randomNum);

const randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.5;
      if (shouldResolve) {
        resolve("Hello World");
      } else {
        reject("Error occurred");
      }
    }, 2000);
  });
  