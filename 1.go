package main

func TwoSum(nums []int, target int) []int {
	hm := map[int]*int{}
	for k, v := range nums {
		idx := k
		hm[v] = &idx
	}

	for k, v := range nums {
		diff := target - v
		if hm[diff] != nil {
			if *hm[diff] == k {
				continue
			}
			return []int{k, *hm[diff]}
		}
	}
	return []int{}
}
