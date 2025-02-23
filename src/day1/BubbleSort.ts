export default function bubble_sort(arr: number[]): void {
    //bubble_sort_1(arr);
    bubble_sort_2(arr);
}

function bubble_sort_1(arr: number[]): void {
    for (let length: number = arr.length; length > 1; length--) {
        for (let i: number = 1; i < length; i++) {
            if (arr[i - 1] > arr[i]) {
                let tmp = arr[i - 1];
                arr[i - 1] = arr[i]
                arr[i] = tmp;
            }
        }
    }
}

function bubble_sort_2(arr: number[]): void {
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = i + 1; j < arr.length - i; j++) {
            if (arr[j - 1] > arr[j]) {
                let tmp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}
