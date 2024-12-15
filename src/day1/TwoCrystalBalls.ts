export default function two_crystal_balls(breaks: boolean[]): number {
    // return two_crystal_balls_1(breaks);
    return two_crystal_balls_2(breaks);
}

function two_crystal_balls_1(breaks: boolean[]): number {
    let jump: number = Math.floor(Math.sqrt(breaks.length));
    for (let i: number = jump; i < breaks.length; i += jump) {
        if (breaks[i] === true) {
            for (let j: number = i - jump; j <= i + jump; j++) {
                if (breaks[j] === true)
                    return j;
            }
            return i;
        }
    }
    return -1;
}

function two_crystal_balls_2(breaks: boolean[]): number {
    let jump: number = Math.floor(Math.sqrt(breaks.length));
    let first_break: number = -1;
    for (let i: number = jump; i < breaks.length; i += jump) {
        if (breaks[i] === true) {
            first_break = i;
            break;
        }
    }

    let last_break: number = first_break;
    for (let j: number = first_break - jump; j < first_break + jump; j++) {
        if (breaks[j] === true) {
            last_break = j;
            break;
        }
    }

    return last_break;
}
