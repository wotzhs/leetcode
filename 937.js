/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let letter = logs.filter(a => { 
    	return a.split(" ")[1] * 1 !== Number(a.split(" ")[1])
    })

    let digit = logs.filter(a => { 
    	return a.split(" ")[1] * 1 === Number(a.split(" ")[1])
    })

    return [...lexSort(letter), ...digit]
};

function lexSort(wordsArr) {
	return wordsArr.sort((a,b)=> {
    	let tmpA = a.split(" ").slice(1).join(" ")
    	let tmpB = b.split(" ").slice(1).join(" ")

    	if (tmpA > tmpB) {
    		return 1
    	}

    	if (tmpA < tmpB) {
    		return -1
    	}

    	if (tmpA == tmpB) {
    		if (a.split(" ")[0] > b.split(" ")[0]) {
    			return 1
    		}
    		if (a.split(" ")[0] < b.split(" ")[0]) {
    			return -1
    		}
    	}

    	return 0

    })
}

module.exports = reorderLogFiles