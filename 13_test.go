package main

import (
	"fmt"
	"testing"
)

func TestRomanToInt(t *testing.T) {
	tests := []struct {
		input  string
		output int
	}{
		// {
		// 	input:  "III",
		// 	output: 3,
		// },
		// {
		// 	input:  "IV",
		// 	output: 4,
		// },
		{
			input:  "MCMXCIV",
			output: 1994,
		},
	}

	for _, test := range tests {
		t.Run(fmt.Sprintf("%v", test.input), func(t *testing.T) {
			if res := romanToInt(test.input); res != test.output {
				t.Fail()
				t.Logf("expect %v got %v", test.output, res)
			}
		})
	}
}
