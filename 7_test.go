package main

import "testing"

func TestReverse(t *testing.T) {
	tests := []struct {
		input  int
		output int
	}{
		{
			input:  123,
			output: 321,
		},
		{
			input:  1534236469,
			output: 0,
		},
	}

	for _, test := range tests {
		if res := reverse(test.input); res != test.output {
			t.Fail()
			t.Logf("expect %v got %v", test.output, res)
		}
	}
}
