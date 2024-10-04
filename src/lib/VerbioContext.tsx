import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { getHiddenWords } from './utils';
import { splitWords } from './splitWords';
import { shuffle } from 'lodash';

type Mode = "word" | "letter";

interface VerbioContextType {
  mode: string;
  start: boolean;
  level: number;
  sentence: string;
  words: string[][];
  hiddenWords: number[][];
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleStart: () => void;
  setLevel: (newLevel: number) => void;
  handleModeChange: (newMode: Mode) => void;
  handleReturnHome: () => void;
  reshuffleWords: () => void;
  revealWord: (lineIndex: number, wordIndex: number) => void;
}


const VerbioContext = createContext<VerbioContextType | undefined>(undefined);

interface VerbioProviderProps {
  children: ReactNode;
}

const VerbioContextProvider: React.FC<VerbioProviderProps> = ({ children }) => {
  const [words, setWords] = useState<string[][]>([]);
  const [hiddenWords, setHiddenWords] = useState<number[][]>([]);
  const [level, setLevel] = useState<number>(1);
  const [sentence, setSentence] = useState<string>("");
  const [start, setStart] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("word");

  
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setSentence(e.target.value);
  const handleModeChange = (newMode: Mode) => setMode(newMode);
  const handleStart = () => {
    setWords(splitWords(sentence));
    setStart(true);
  }

  const reshuffleWords = () => {
    const newHiddenWords = words.map((line) => {
      if (level === 1) return [];

      const shuffledLine = shuffle(line.map((_, wordIndex) => wordIndex));
      return shuffledLine.slice(0, level - 1);
    });
    setHiddenWords(newHiddenWords);
  }

  function revealWord(lineIndex: number, wordIndex: number) {
    if (level === 1) return;

    const newHiddenWords = hiddenWords.slice();
    newHiddenWords[lineIndex] = newHiddenWords[lineIndex]!.filter(
      (hiddenWordIndex) => hiddenWordIndex !== wordIndex,
    );
    setHiddenWords(newHiddenWords);
  }

  const handleReturnHome = () => {
    setStart(false);
    setLevel(1);
  }

  useEffect(() => {
    const hiddenWords = getHiddenWords(words, level, mode);
    setHiddenWords(hiddenWords);

  }, [words, level]);


  return (
    <VerbioContext.Provider value={{
      mode,
      start,
      level,
      sentence,
      words,
      hiddenWords,
      setLevel,
      handleTextChange,
      handleStart,
      handleModeChange,
      handleReturnHome,
      reshuffleWords,
      revealWord,
    }}>
      {children}
    </VerbioContext.Provider>
  );
};

const useVerbioContext = () => {
  const context = useContext(VerbioContext);
  if (!context) {
    throw new Error("useVerbioContext must be used within VerbioProvider");
  }

  return context;
};

export { VerbioContextProvider, useVerbioContext };