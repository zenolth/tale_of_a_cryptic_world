//!native
//!optimize 2

export function slice<T extends defined>(array: T[], start?: number, stop?: number): T[] {
    start = start ?? 0;
    stop = stop ?? array.size();

    if (start < 0) start += array.size();
    if (stop < 0) stop += array.size();

    const result: T[] = [];
    for (let i = start; i < stop && i < array.size(); i++) {
        result.push(array[i]);
    }
    return result;
}

function merge<T extends defined>(left: Array<T>,right: Array<T>,sortFunction: (a: T,b: T) => boolean): Array<T> {
    const result: Array<T> = [];

    let i = 0;
    let j = 0;

    while (i < left.size() && j < right.size()) {
        if (sortFunction(left[i],right[j])) {
            result.push(left[i]);
            ++i;
        } else {
            result.push(right[j]);
            ++j;
        }
    }

    slice(left,i).forEach((value) => result.push(value));
    slice(right,j).forEach((value) => result.push(value));

    return result;
}

export function mergeSort<T extends defined>(array: Array<T>,sortFunction: (a: T,b: T) => boolean): Array<T> {
    let step = 1;
    const length = array.size();

    while (step < length) {
        for (let i = 0; i <= length; i += 2 * step) {
            const left = slice(array,i,i + step);
            const right = slice(array,i + step,i + 2 * step);

            const merged = merge(left,right,sortFunction);

            merged.forEach((value,j) => array[i + j] = value);
        }
        step *= 2;
    }
    
    return array;
}