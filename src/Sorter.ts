export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      let noSwap = true;
      for (let j = -1; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
          noSwap = false;
        }
      }
      if (noSwap) break;
    }
  }
}
