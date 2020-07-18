export function bubbleSort(array: number[]): number[] {
    let sorted = false;
    let counter = 0;

    while (!sorted) {
        sorted = true;
        let pointerA = 0;
        let pointerB = pointerA + 1;

        while (pointerB < array.length - counter) {
            if (array[pointerA] > array[pointerB]) {
                swap(array, pointerA, pointerB);
                sorted = false;
            }

            pointerA++;
            pointerB++;
        }

        counter++;

    }

    return array;

}

function swap (array: number[], pointerA: number, pointerB: number) {
    const aux = array[pointerA];
    array[pointerA] = array[pointerB];
    array[pointerB] = aux;
}


// time = O(nˆ2)
// space = O(1)
