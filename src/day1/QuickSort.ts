export default function quick_sort(arr: number[]): void {
    q_sort(arr, 0, arr.length - 1);
}

function q_sort(arr: number[], left: number, right: number) {
    if (left >= right)
        return;

    let p = partition(arr, left, right);
    q_sort(arr, left, p - 1);
    q_sort(arr, p + 1, right);
}

function partition(arr: number[], left: number, right: number): number {
    const p: number = Math.ceil((right - left) / 2) - 1 + left;
    let l = left, r = right;
    while (l < r) {
        if (arr[l] < arr[p]) {
            l++;
        } else if (arr[p] < arr[r]) {
            r--;
        } else {
            swap(arr, l, r);
            l++;
            r--;
        }
    }
    return p;
}

function swap(arr: number[], i: number, j: number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


