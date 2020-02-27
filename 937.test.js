const reorderLogFiles = require("./937")

const cases = [
	{
		input: ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"],
		output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"],
	},
	{
		input: ["1 n u", "r 527", "j 893", "6 14", "6 82"],
		output: ["1 n u","r 527","j 893","6 14","6 82"],
	},
	{
		input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"],
		output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"],
	},
	{
		input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"],
		output: ["a2 act car","g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"],
	},
	{
		input: ["j mo", "5 m w", "g 07", "o 2 0", "t q h"],
		output: ["5 m w","j mo","t q h","g 07","o 2 0"],
	},
]

for (let i = 0; i < cases.length; i++) {
	test(`case no: ${i + 1}`, () => {
		let path = reorderLogFiles(cases[i].input)
		for (let j = 0; j < path.length; j++) {
			expect(path[j]).toBe(cases[i].output[j])
		}
	})
}