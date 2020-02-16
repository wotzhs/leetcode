package main

import (
	"fmt"
	"testing"
)

func TestLongestCommonPrefix(t *testing.T) {
	tests := []struct {
		input  []string
		output string
	}{
		{
			input:  []string{"acc", "ac", "abb"},
			output: "a",
		},
		{
			input:  []string{"ab", "abcc"},
			output: "ab",
		},
		{
			input:  []string{"bab", "bcc"},
			output: "b",
		},
		{
			input:  []string{"aca", "cba"},
			output: "",
		},
		{
			input:  []string{"c", "acc", "ccc"},
			output: "",
		},
		{
			input:  []string{"abab", "aba", ""},
			output: "",
		},
		{
			input:  []string{"aa", "ab"},
			output: "a",
		},
		{
			input:  []string{"aa", "aa"},
			output: "aa",
		},
	}

	for _, test := range tests {
		t.Run(fmt.Sprintf("%v", test.input), func(t *testing.T) {
			if res := longestCommonPrefix(test.input); res != test.output {
				t.Fail()
				t.Logf("expect %v got %v", test.output, res)
			}
		})
	}
}
