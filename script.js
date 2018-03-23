let testString = "bob, likes, dogs";
let numArray = [1, 2, 3, 4];
let mixArray = [1, 3, 5, 3, 7, 3, 1, 1, 5];


// 1. Reverse a string

function One(kata1String) {
    let reverseWords = kata1String.split("").reverse().join("");
    return reverseWords;
}

// 2. Reverse a sentence ("bob likes dogs" -> "dogs likes bob")

function Two(kata2String) {
    let reverseString = kata2String.split(",").reverse();
    let testString1 = JSON.stringify(reverseString);
    return testString1;
}

// 3. Find the minimum value in an array

function Three(kata3Array) {
    let minArray = Math.min(...kata3Array);
    return minArray;
}

// 4. Find the maximum value in an array

function Four(kata4Array) {
    let maxArray = Math.max(...kata4Array);
    return maxArray;
}

// 5. Calculate a remainder (given a numerator and denominator)

function Five(x, y) {
    return x / y;
}



// 6. Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")

function Six(kata6Array) {
    // let unique = [...new Set(mixArray)]; // Array.from(new Set(mixArray))
    // console.log(unique);

    let testObject = {};
    for (let unique of kata6Array) {
        if (!testObject[unique]) {
            testObject[unique] = true;
        }

    }
    return Object.keys(testObject);
}

// 7. Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")

function Seven(kata7Array) {
    let counts = {};
    for (let unique of kata7Array) {
        counts[unique] = (counts[unique] || 0) + 1;
    }
    return counts
}

function eight(passString, passObject) {
    

    let obString = passString;
    let obValues = passObject;
    let total = 0;
    let obArray = obString.split(" ");
    
    for(let i = 0; i < obArray.length; i++) {
        obResults = obArray[i];
        if(obResults === "+" || obResults === "-") {
            continue;
            
        } else {
            let letter = obArray[i];
            let operators = obArray[i-1];
            if (operators === "+" || operators === undefined) {
                total += obValues[letter];
            } else if (operators === "-") {
                total -= obValues[letter];
                
            }
            
        }
        
    }
    return total;
} 








// Kata 1:
    const kata1Result1 = One("xyz");
    const kata1Result2 = One("x y z");

    console.assert(kata1Result1 === "zyx", kata1Result1);
    console.assert(kata1Result2 === "z y x", kata1Result2);

// Kata 2:     

    const kata2Result1 = Two("x,y,z");
    const kata2Result2 = Two("c,b,a");

    console.assert(kata2Result1 === '["z","y","x"]', kata2Result1);
    console.assert(kata2Result2 === '["a","b","c"]', kata2Result2);

// Kata 3: 
    const kata3Result1 = Three([6,9,15,12]);
    const kata3Result2 = Three([100,201,88,1000]);

    console.assert(kata3Result1 === 6, kata3Result1);
    console.assert(kata3Result2 === 88, kata3Result2);

// Kata 4: 
    const kata4Result1 = Four([6,9,15,12]);
    const kata4Result2 = Four([100,201,88,1000]);

    console.assert(kata4Result1 === 15, kata4Result1);
    console.assert(kata4Result2 === 1000, kata4Result2);

// Kata 5: 
    const kata5Result1 = Five(12,4);
    const kata5Result2 = Five(60,10);

    console.assert(kata5Result1 === 3, kata5Result1);
    console.assert(kata5Result2 === 6, kata5Result2);

// Kata 6:
    const kata6Result1 = Six([1,2,2]);
    const kata6Result2 = Six([8,8,8,5,1]);

    console.assert(JSON.stringify(kata6Result1 === `{"1","2"}`, kata6Result1));
    console.assert(JSON.stringify(kata6Result2 === `{"1","5","8"}`, kata6Result1));


// Kata 7: 
    const kata7Result1 = Seven([1,2,2]);
    const kata7Result2 = Seven([8,8,8,5,1]);

    console.assert(JSON.stringify(kata7Result1) === `{"1":1,"2":2}`, kata7Result1);
    console.assert(JSON.stringify(kata7Result2) === `{"1":1,"5":1,"8":3}`, kata7Result2);

// Kata 8: 

    const kata8Result1 = eight("a - d", {a:5, d:3});
    const kata8Result2 = eight("b + c - a", {a:8, b:6, c:4});

    console.assert(kata8Result1 === 2, kata8Result1);
    console.assert(kata8Result2 === 2, kata8Result2);

console.log("One:", One(testString));
console.log("Two:", Two(testString));
console.log("Three:", Three(numArray));
console.log("Four:", Four(numArray));
console.log("Five:", Five(4,2));
console.log("Six:", Six(mixArray));
console.log("Seven:", Seven(mixArray));
console.log("Eight:", eight("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}));

