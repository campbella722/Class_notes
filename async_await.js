// // function addNums(x,y) {
// //     let sum = x +y
// //     console.log(sum)
// //     return sum
// // }

// // addNums(5,5)
// // let result = addNums(5,5)
// // let result2 = addNums(7,15)
// // document.querySelector(".result".innerText = result)
// // document.querySelector(".result2".innerText = result2)

// try {
//     callingSomeBSFunctionThatDoesntExist()
//     console.log("Start of the try")
// } catch(err) {
//     console.log("Error has occurred " + err)
// } finally {
//     console.log("Finally ALWAYS runs")
// }
// console.log("The execution continues.")

// let json = '{"age": 30}'
//  try {
//      let user = JSON.parse(json)
//      if (!user.age) {
//          throw new SyntaxError("Incomplete data: no name")
//      }
//  } catch(e) {
//      console.log(`JSON Error: ${e}`)
//  }

function upperCase(name) {
    if (typeof name !== "string") {
        throw TypeError("Name must be a string")
    }
    return name.toUpperCase();
 }
 console.log(upperCase('alice'));