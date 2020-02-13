package main

import "testing"

func TestTwoSum(t *testing.T) {
	tests := []struct {
		nums   []int
		target int
		expect []int
	}{
		{
			nums:   []int{2, 7, 11, 15},
			target: 9,
			expect: []int{0, 1},
		},
		{
			nums:   []int{3, 2, 4},
			target: 6,
			expect: []int{1, 2},
		},
		{
			nums:   []int{3, 3},
			target: 6,
			expect: []int{0, 1},
		},
	}

	for _, test := range tests {
		res := TwoSum(test.nums, test.target)
		for k, v := range res {
			if v != test.expect[k] {
				t.Fail()
			}
		}
		t.Logf("expect %v got %v", test.expect, res)
	}
}
