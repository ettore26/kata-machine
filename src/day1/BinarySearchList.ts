export default function bs_list(haystack: number[], needle: number): boolean {
    let index: number = binary_search_rec(haystack, needle, 0, haystack.length - 1);
    //let index: number = binary_search_imp(haystack, needle);
    if (index < 0)
        return false;
    return true;
}

function binary_search_rec(nums: number[], n: number, l: number, r: number): number {
    //base case
    if (l > r)
        return -1;

    let h: number = Math.floor(l + ((r - l) / 2));
    if (n === nums[h])
        return h;

    if (n > nums[h])
        l = h + 1;
    else
        r = h - 1;

    return binary_search_rec(nums, n, l, r);
}

function binary_search_imp(nums: number[], n: number): number {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let h = Math.floor(l + ((r - l) / 2));
        //let h = l + ((r - l) / 2);
        if (n === nums[h])
            return h;
        if (n > nums[h])
            l = h + 1;
        else
            r = h - 1;
    }
    return -1;
}
