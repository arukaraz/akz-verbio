"use client";

import { useVerbioContext } from "@/lib/VerbioContext";
import Setup from "@/components/Setup";
import Process from "@/components/Process";

export default function HomePage() {
  const {
    sentence,
    start,
  } = useVerbioContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      {!start && <Setup />}
      { start && sentence.length > 0 && <Process /> }
    </main>
  );
}
