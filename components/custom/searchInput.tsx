import * as React from "react";

import { cn } from "@/lib/utils";
import SearchIcon from '@mui/icons-material/Search';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center bg-white border rounded">
        <input
          type={type}
          className={cn(
            "outline-none border-0 focus:ring-0 flex h-10 w-full rounded-md  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="border-l-2 border-gray-300 px-2">
          <button><SearchIcon className="text-gray-500 hover:text-black"/></button>
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };