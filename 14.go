package main

import "strings"

func longestCommonPrefix(strs []string) string {
	lcp := ""
	if len(strs) == 0 {
		return lcp
	}

	lcp = strs[0]
	for i := 1; i < len(strs); i++ {
		for !strings.HasPrefix(strs[i], lcp) {
			lcp = lcp[:len(lcp)-1]
		}
	}

	return lcp
}
