package main

import "fmt"

func main() {
	fmt.Print(test())
}

func test() int {
	A := []int{4, 2, 1}
	scenarios := map[int][]int{}
	var answer int
	for i := range A {
		tempArr := []int{}
		tempArr = append(tempArr, A[0:i]...)
		tempArr = append(tempArr, A[i+1:len(A)]...)
		scenarios[i] = tempArr
	}

	for _, v := range scenarios {
		possible := true
		for i := 0; i < len(v)-1; i++ {
			if v[i] > v[i+1] {
				possible = false
			}
		}
		if possible {
			answer += 1
		}

	}
	return answer
}
