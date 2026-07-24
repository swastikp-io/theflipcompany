import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ServiceSelect({ 
  value, 
  onValueChange, 
  triggerClassName,
  placeholder = "Select"
}: { 
  value?: string, 
  onValueChange?: (value: string) => void,
  triggerClassName?: string,
  placeholder?: string
}) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={triggerClassName || "w-full bg-poch-black border-poch-white/20 rounded-xl px-6 py-[1.75rem] font-inter text-lg hover:border-poch-white/40 focus:ring-1 focus:ring-poch-white/50 transition-colors text-poch-white/70"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-[#0f0f0f] text-white border border-white/20 rounded-xl shadow-2xl overflow-hidden font-inter text-base md:text-lg">
        <SelectItem value="AI SEO (GEO)" className="cursor-pointer py-3 focus:bg-[#023e90] focus:text-white data-[state=checked]:bg-[#023e90] data-[state=checked]:text-white">
          AI SEO (GEO)
        </SelectItem>
        <SelectItem value="AI Agents" className="cursor-pointer py-3 focus:bg-[#023e90] focus:text-white data-[state=checked]:bg-[#023e90] data-[state=checked]:text-white">
          AI Agents
        </SelectItem>
        <SelectItem value="Website Development" className="cursor-pointer py-3 focus:bg-[#023e90] focus:text-white data-[state=checked]:bg-[#023e90] data-[state=checked]:text-white">
          Website Development
        </SelectItem>
        <SelectItem value="AI Automation" className="cursor-pointer py-3 focus:bg-[#023e90] focus:text-white data-[state=checked]:bg-[#023e90] data-[state=checked]:text-white">
          AI Automation
        </SelectItem>
        <SelectItem value="AI Consulting" className="cursor-pointer py-3 focus:bg-[#023e90] focus:text-white data-[state=checked]:bg-[#023e90] data-[state=checked]:text-white">
          AI Consulting
        </SelectItem>
        <SelectItem value="Something else" className="cursor-pointer py-3 focus:bg-[#023e90] focus:text-white data-[state=checked]:bg-[#023e90] data-[state=checked]:text-white">
          Something else
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
