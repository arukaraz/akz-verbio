import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useVerbioContext } from "@/lib/VerbioContext";

const Setup = () => {
  const {
    handleTextChange,
    handleModeChange,
    handleStart,
  } = useVerbioContext();

  return (
    <>
      <span className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          VERBIO
        </h1>
      </span>
      <Textarea
        className="min-h-[14rem] w-3/6"
        id="textarea"
        onChange={handleTextChange}
        placeholder="words here..."
      />
      <div className="flex flex-row items-center">
        <Button type="submit" className="mr-1 w-full" onClick={handleStart}>
          Start
        </Button>
        <Menu>
            <MenuButton className="h-10 px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Options
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom start"
              className="w-80 p-0 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <Button variant="outline" className="border-white p-0 m-0" onClick={() => handleModeChange("word")}>
                  hide a word as you go through levels
                </Button>
              </MenuItem>
              <MenuItem>
                <Button variant="outline" className="border-white p-0 m-0" onClick={() => handleModeChange("letter")}>
                  guess the word by its first letter
                </Button>
              </MenuItem>
            </MenuItems>
          </Menu>
      </div>
    </>
  )
};

export default Setup;