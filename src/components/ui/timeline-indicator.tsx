import { memo } from "react";

export const TimelineIndicator = memo(function TimelineIndicator() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5" />
      <div className="w-px flex-1 bg-border" />
    </div>
  );
});
