import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { shuffle } from "lodash";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getHiddenWords = (words: string[][], level: number, mode: string) => {
  let newHiddenWords: number[][] = [];

  if (mode === "word") {
    newHiddenWords = words.map((line) => {
      if (level === 1) return [];
      const shuffledLine = shuffle(line.map((_, wordIndex) => wordIndex));

      return shuffledLine.slice(0, level - 1);
    });
  } else {
    if (level === 2) {
      newHiddenWords = words.map((line) =>
        line.map((_, wordIndex) => wordIndex),
      );
    }
  }

  return newHiddenWords;  
}

export enum LEVEL_DESCRIPTIONS {
  LEVEL_1 = "The text is organized into groups of five words each. As you go through the levels, some words will start disappearing. For now, read the text aloud to become familiar.",
  LEVEL_2 = "Certain words are missing from each group. Select the blank spaces to see the hidden words. If you choose incorrectly, hit 'Retry' to begin again.",
  LEVEL_3 = "Two words are now absent from each group. Check your guesses carefully, and restart the level if you misplace any.",
  LEVEL_4 = "The difficulty has been raised. If it takes a while to remember a word, practice until you can recall all of them without hesitation.",
  LEVEL_5 = "Only a single word is left in each group. You should have a good grasp of the text. Repeat until you are comfortable with all the words.",
  LEVEL_6 = "All words have been removed. The goal is to remember each word in every group by the end of this stage.",
}