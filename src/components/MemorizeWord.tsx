import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { LEVEL_DESCRIPTIONS } from "@/lib/utils";
import { useVerbioContext } from "@/lib/VerbioContext";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.03
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const MemorizeComponent = () => {
  const {
    words,
    hiddenWords,
    level,
    revealWord,
  } = useVerbioContext();


  return (
    <>
      <span className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">{level}</h1>
        <p className="text-secondary-foreground">{
          LEVEL_DESCRIPTIONS[`LEVEL_${level}` as keyof typeof LEVEL_DESCRIPTIONS]
        }</p>
      </span>
      <ScrollArea className="w-xl h-[17rem] w-full xl:h-[20rem] 2xl:h-[25rem]">
        <motion.div
          key={`${level}-${words.length}`}
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col items-center gap-2"
        >
          {words.map((line, i) => (
            <motion.div
              key={i}
              variants={container}
              className="flex flex-row items-center gap-2 w-full"
            >
              {line.map((word, j) => (
                <motion.div variants={item} key={j} className="flex flex-row items-center gap-1 w-full">
                  {hiddenWords[i]?.includes(j) ? (
                    <Button
                      className="text-transparent"
                      variant="outline"
                      onClick={() => revealWord(i, j)}
                    >
                      <span>{word}</span>
                    </Button>
                  ) : (
                    <Button variant="secondary">{word}</Button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};
