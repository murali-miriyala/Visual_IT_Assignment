function isAnagram(s1,s2){
    let l1 = s1.length;
    let l2 = s2.length;
    if(l1!==l2){
        console.log("Invalid Length && Invalid Input");
        return;
    }
    let string1 = s1.split('').sort().join('');
    let string2 = s2.split('').sort().join('');
    if(string1==string2){
        console.log("True");
    }
    else{
        console.log("False")
    }
}

isAnagram("silent","listen");

// Output : True