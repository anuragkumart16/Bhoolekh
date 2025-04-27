"use client";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import getPlaces from "@/utils/getPlaces";

let frameworks = [
  
];

export function ComboboxDemo({ setItem}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    getPlaces()
      .then((data) => {
        console.log(data);
        frameworks = data.location;
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [navigate]);

  React.useEffect(() => {
    setItem(value)
  }, [value, setItem]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between"
        >
          {
            value
            ? frameworks.find((framework) => framework === value)
            : "Select Places"
          }
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search place..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework}
                  value={framework}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
