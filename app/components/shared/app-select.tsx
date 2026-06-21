"use client";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SelectOption = {
  value: string;
  label: string;
};

type AppSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?:string
};

export default function AppSelect({
  value,
  onChange,
  options,
  placeholder
}: AppSelectProps) {

  return (
    <Select
      value={value}
      onValueChange={(value) => onChange(value??'')}
    >
      <SelectTrigger className="h-auto w-fit border-none bg-transparent px-0 text-xs text-white shadow-none focus:ring-0 [&_svg]:text-white">
        <SelectValue placeholder={placeholder}>
          {options.find((item) => item.value === value)?.label}
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        {options.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}