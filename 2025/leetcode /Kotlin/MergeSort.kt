class MergeSort {
    fun merge(nums1: IntArray, m: Int, nums2: IntArray, n: Int): Unit {
        var i = m - 1
        var j = n - 1
        k = m + n - 1

        while (i >= 0 && j >=0) {
            if (nums1[i] > nums2[j]) {
                nums1[k] = nums1[i]
                i--
            }else {
                nums1[k] = nums1[i]
                i--
            }

        }
    }
}



nums1 = [0]
m = 0
nums2 = [1]
n = 1
s = MergeSort()
MergeSort.merge(nums1, m, nums2, n)
println(nums1)