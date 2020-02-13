package main

import (
	"fmt"
	"testing"
)

func TestIsPalindrome(t *testing.T) {
	tests := []struct {
		input  int
		output bool
	}{
		{
			input:  121,
			output: true,
		},
		{
			input:  -121,
			output: false,
		},
		{
			input:  10,
			output: false,
		},
	}

	for _, test := range tests {
		t.Run(fmt.Sprintf("%v", test.input), func(t *testing.T) {
			if res := isPalindrome(test.input); res != test.output {
				t.Fail()
				t.Logf("expect %v got %v", test.output, res)
			}
		})
	}
}
