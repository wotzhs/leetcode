package main

import (
	"math"
	"strconv"
)

func reverse(x int) int {
	sign := 1
	if x < 0 {
		sign = -1
		x *= -1
	}
	strInt := strconv.Itoa(x)
	var rev string
	for _, v := range strInt {
		rev = string(v) + rev
	}

	revInt, err := strconv.Atoi(rev)
	if err != nil {
		return 0
	}

	if revInt > math.MaxInt32 {
		return 0
	}

	return revInt * sign
}
