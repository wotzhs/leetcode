package main

import "strconv"

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	strInt := strconv.Itoa(x)
	for i := 0; i < len(strInt)/2; i++ {
		if strInt[i] != strInt[len(strInt)-1-i] {
			return false
		}
	}
	return true
}
