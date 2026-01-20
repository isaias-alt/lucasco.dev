"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { TimelineIndicator } from "@/components/ui/timeline-indicator";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

interface WorkCardProps {
  position: string;
  company: string;
  href?: string;
  period: string;
  description: string;
}

export const WorkCard = memo(function WorkCard({
  position,
  company,
  href,
  period,
  description,
}: WorkCardProps) {
  return (
    <Card className="flex">
      <div className="flex-grow items-center flex-col group">
        <CardHeader>
          <div className="flex gap-3">
            <TimelineIndicator />
            <div className="flex-1 space-y-1 pb-1">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  {position}
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              </div>
              {href ? (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-muted-foreground inline-flex items-center gap-1 hover:text-blue-500 transition-colors duration-300 group/link w-fit"
                >
                  {company}
                  <ArrowUpRight className="size-3 transition-opacity duration-300" />
                </Link>
              ) : (
                <div className="font-sans text-xs text-muted-foreground">
                  {company}
                </div>
              )}
              <div className="text-xs sm:text-sm pt-1">{description}</div>
            </div>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
});
