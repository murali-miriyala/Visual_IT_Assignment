function IsBalancedEnclosure(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let x = s[i];
        if (x == '(' || x == '[' || x == '{') {
            stack.push(x);
            continue;
        }

        if (stack.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }


    return (stack.length == 0);
}


let s = "{()[()]}";


if (IsBalancedEnclosure(s))
    console.log("True");
else
    console.log("False");

// Output : True



// let s = "[}()]";


// if (IsBalancedEnclosure(s))
//     console.log("True");
// else
//     console.log("False");

// Ouput : False