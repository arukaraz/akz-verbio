export const splitWords = (sentence: string): string[][] => {
  return sentence.split(" ").reduce((acc, _, index, array) => {
    if (index % 5 === 0) {
      acc.push(array.slice(index, index + 5));
    }
    return acc;
  }, [] as string[][]);
}
