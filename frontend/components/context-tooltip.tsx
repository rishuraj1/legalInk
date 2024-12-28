import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export function ContextTooltip({
  context,
  href,
}: {
  context: string;
  href?: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" aria-label="Show context information">
            Hover for context
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-white text-black rounded shadow-lg p-2">
          <p>{context}</p>
          {href && (
            <Link href={href} passHref>
              <p className="text-sm text-zinc-600">{href}</p>
            </Link>
          )}
          <small className="text-gray-500">Additional info can go here.</small>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
