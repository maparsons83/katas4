let testString = "bob, likes, dogs";
let numArray = [1, 2, 3, 4];
let mixArray = [1, 3, 5, 3, 7, 3, 1, 1, 5];


// 1. Reverse a string

function One(string) {
    let reverseWords = testString.split("").reverse().join("");
    return reverseWords;
}

// 2. Reverse a sentence ("bob likes dogs" -> "dogs likes bob")

function Two(string) {
    let reverseString = testString.split(",").reverse();
    let testString1 = JSON.stringify(reverseString);
    return testString1;
}

// 3. Find the minimum value in an array

function Three(array) {
    let minArray = Math.min(...numArray);
    return minArray;
}

// 4. Find the maximum value in an array

function Four(array) {
    let maxArray = Math.max(...numArray);
    return maxArray;
}

// 5. Calculate a remainder (given a numerator and denominator)

function Five(x, y) {
    return x / y;
}



// 6. Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")

function Six(array) {
    // let unique = [...new Set(mixArray)]; // Array.from(new Set(mixArray))
    // console.log(unique);

    let testObject = {};
    for (let unique of mixArray) {
        if (!testObject[unique]) {
            testObject[unique] = true;
        }

    }
    return Object.keys(testObject);
}

// 7. Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")

function Seven(array) {
    let counts = {};
    for (let unique of mixArray) {
        counts[unique] = (counts[unique] || 0) + 1;
    }
    return counts
}



// console.log(unique);






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

    console.assert(kata3Result1 === '[6]', kata3Result1);

// Kata 7: 
    const kata7Result1 = Seven([1,2,2]);
    const kata7Result2 = Seven([8,8,8,5,1]);

    console.assert(JSON.stringify(kata7Result1) === `{"1":1,"2":2}`, kata7Result1);
    console.assert(JSON.stringify(kata7Result2) === `{"1":1,"5":1,"8":3}`, kata7Result2);

console.log("One:", One());
console.log("Two:", Two());
console.log("Three:", Three());
console.log("Four:", Four());
console.log("Five:", Five(4,2));
console.log("Six:", Six());
console.log("Seven:", Seven());

// console.log("One2:", One("blue"));