"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { TimelineIndicator } from "@/components/ui/timeline-indicator";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { memo } from "react";

interface EducationCardProps {
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const EducationCard = memo(function EducationCard({
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: EducationCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const cardContent = (
    <Card className="flex">
      <div className="flex-grow items-center flex-col group">
        <CardHeader>
          <div className="flex gap-3">
            <TimelineIndicator />
            <div className="flex-1 space-y-1 pb-1">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  {badges && (
                    <span className="inline-flex gap-x-1">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              </div>
              {subtitle && (
                <div className="font-sans text-xs text-muted-foreground">
                  {subtitle}
                </div>
              )}
              {description && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,

                    height: isExpanded ? "auto" : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-xs sm:text-sm pt-1"
                >
                  {description}
                </motion.div>
              )}
            </div>
          </div>
        </CardHeader>
      </div>
    </Card>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block cursor-pointer"
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="block cursor-pointer" onClick={handleClick}>
      {cardContent}
    </div>
  );
});
