
function GetPartialSumElements(numbers, total, partialSum) {
    var sum, num, remaining;

    partialSum = partialSum || [];

    sum = partialSum.reduce(function (a, b) {
        return a + b;
    }, 0);

    if (sum === total) {
        console.log("%s=%s", partialSum.join(","), total)
    }

    if (sum >= total) {
        return;
    }

    for (var i = 0; i < numbers.length; i++) {
        num = numbers[i];
        remaining = numbers.slice(i + 1);
        GetPartialSumElements(remaining, total, partialSum.concat([num]));
    }
}

GetPartialSumElements([4, 2, 5, 9, 12], 18);

// Ouput : 4,2,12 = 18
//         4,5,9 = 18
