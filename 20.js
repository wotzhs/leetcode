var isValid = function(s) {
    let stack = ""
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === ")" && stack[stack.length-1] === "(") {
            stack = stack.slice(0, stack.length-1)
            continue
        } 
        if (s[i] === "]" && stack[stack.length-1] === "[") {
            stack = stack.slice(0, stack.length-1)
            continue
        } 
        if (s[i] === "}" && stack[stack.length-1] === "{") {
            stack = stack.slice(0, stack.length-1)
            continue
        }
        stack += s[i]
    }
    return stack === ""
};