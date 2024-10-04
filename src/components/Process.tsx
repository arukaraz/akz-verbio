import { Button } from "@/components/ui/button";
import { useVerbioContext } from "@/lib/VerbioContext";
import { MoveLeft, MoveRight, Repeat2, RotateCcw } from "lucide-react";
import { MemorizeComponent } from "@/components/MemorizeWord";
import { FirstLetter } from "@/components/FirstLetter";

const Process = () => {
  const {
    level,
    mode,
    setLevel,
    reshuffleWords,
    handleReturnHome,
  } = useVerbioContext();

  const ComponentToRender = mode === "word" ? MemorizeComponent : FirstLetter;
  const lastPage = mode === "word" ? 6 : 2;

  return (
    <>
      <main className="mx-auto flex min-h-screen flex-col items-center justify-center gap-10 p-4 w-full">
        <ComponentToRender />
      </main>
      <footer className="fixed bottom-0 flex flex-row items-center gap-2 rounded-md rounded-md p-8 backdrop-blur lg:p-12 w-3/6">
        <Button
          variant="outline"
          size="icon"
          disabled={level === 1}
          onClick={() => setLevel(1)}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          disabled={level === 1}
          onClick={() => setLevel(level - 1)}
        >
          <MoveLeft className="h-4 w-4" />
        </Button>
        {mode === "word" && (
          <Button variant="outline" size="icon" onClick={() => reshuffleWords()}>
            <Repeat2 className="h-4 w-4" />
          </Button>
        )}
        {level === lastPage ? (
          <Button onClick={handleReturnHome}>edit words</Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setLevel(level + 1)}
          >
            <MoveRight className="h-4 w-4" />
          </Button>
        )}
      </footer>
    </>
  )
};

export default Process;