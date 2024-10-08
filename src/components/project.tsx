import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export function Project(props: {
  name: string;
  link: string;
  githubLink?: string;
  date: string;
  desc: string;
  details: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-muted rounded-xl mb-4">
      <Card className="cursor-pointer" onClick={() => setOpen(!open)}>
        <CardHeader>
          <div className="flex justify-between">
            <h4 className="font-medium">{props.name}</h4>
            <div className="flex items-center gap-x-1">
              <p className="text-muted-foreground">{props.date}</p>
              <button>
                <ChevronDownIcon
                  className={cn("h-4 w-4 transition-transform duration-200", open ? "rotate-180" : "")}
                />
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{props.desc}</p>
        </CardContent>
      </Card>
      <div className={cn("overflow-hidden transition-all duration-200", open ? "max-h-96" : "max-h-0")}>
        <CardContent className="px-4 py-2 space-y-1.5">
          <p className="text-sm">{props.details}</p>
          <div className="flex items-center justify-between">
            <div className="space-x-1">
              <a href={props.link} target="_blank">
                <Badge>Link</Badge>
              </a>
              {props.githubLink && (
                <a href={props.githubLink} target="_blank">
                  <Badge>Github</Badge>
                </a>
              )}
            </div>
            {props.githubLink && <span className="inline-block text-muted-foreground text-xs">MIT License</span>}
          </div>
        </CardContent>
      </div>
    </div>
  );
}
