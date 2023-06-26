// function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;
  
//     const rangeIterator = {
//       next() {
//         let result;
//         if (nextIndex < end) {
//           result = { value: nextIndex, done: false };
//           nextIndex += step;
//           iterationCount++;
//           return result;
//         }
//         return { value: iterationCount, done: true };
//       },
//     };
//     return rangeIterator;
//   }
  
//   console.log(makeRangeIterator().next());

 
function* gen() {
    yield 1
    yield 2
    yield 3
    return 4
  }
  const g = gen()
  console.log(g.next()) // { value: 1, done: false }
  console.log(g.next()) // { value: 2, done: false }
  console.log(g.next()) // { value: 3, done: false }
  console.log(g.next())