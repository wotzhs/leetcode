package main

import "fmt"

func TwoSum(nums []int, target int) []int {
	hm := map[int]*int{}
	for k, v := range nums {
		idx := k
		hm[v] = &idx
	}

	for k, v := range hm {
		fmt.Printf("k: %v v: %v\n", k, *v)
	}

	for k, v := range nums {
		diff := target - v
		fmt.Printf("diff: %v\n", diff)
		fmt.Printf("hm[diff]: %v\n", *hm[diff])
		if hm[diff] != nil {
			if *hm[diff] == k {
				continue
			}
			return []int{k, *hm[diff]}
		}
	}
	return []int{}
}
