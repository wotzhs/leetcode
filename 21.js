/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }

    while (l2 != null) {
        if (l1.val >= l2.val) {
            let tmp = l2;
            l2 = l2.next;
            tmp.next = l1;
            l1 = tmp;
            continue;
        }

        if (l1.val < l2.val) {
            if (l1.next === null) {
                l1.next = l2;
                return l1;
            }
            let count = 0;
            let tmp = l1.next;
            while (tmp.val <= l2.val) {
                if (tmp.next === null) {
                    break;
                }
                tmp = tmp.next;
                count++;
            }
            let tmp3 = l1;
            while (count) {
                tmp3 = tmp3.next;
                count--;
            }
            let tmp2 = l2;
            l2 = l2.next;
            tmp2.next = tmp;
            tmp3.next = tmp2;

            continue;
        }
    }
    return l1;
};

module.exports = mergeTwoLists;
