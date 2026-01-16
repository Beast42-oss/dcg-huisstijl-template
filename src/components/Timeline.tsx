import React from "react";

type TimelineBrand = "vijfhart" | "dcg";

interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  highlight?: boolean;
}

interface TimelineProps {
  brand?: TimelineBrand;
  items: TimelineItem[];
  className?: string;
}

const brandStyles: Record<TimelineBrand, { dot: string; line: string; highlight: string }> = {
  vijfhart: {
    dot: "bg-vijfhart-red",
    line: "bg-vijfhart-grey",
    highlight: "bg-vijfhart-red text-white",
  },
  dcg: {
    dot: "bg-dcg-purple",
    line: "bg-dcg-light-purple",
    highlight: "bg-dcg-yellow text-dcg-purple",
  },
};

export const Timeline: React.FC<TimelineProps> = ({
  brand = "vijfhart",
  items,
  className = "",
}) => {
  const styles = brandStyles[brand];

  return (
    <div className={`relative ${className}`}>
      {/* Verticale lijn */}
      <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${styles.line}`} />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12">
            {/* Dot */}
            <div
              className={`absolute left-2 w-5 h-5 rounded-full border-4 border-white shadow-sm ${
                item.highlight ? styles.dot : "bg-gray-300"
              }`}
            />

            {/* Content */}
            <div
              className={`p-4 rounded-lg ${
                item.highlight ? styles.highlight : "bg-gray-50"
              }`}
            >
              <span className={`text-sm font-medium ${item.highlight ? "" : "text-gray-500"}`}>
                {item.date}
              </span>
              <h4 className={`text-lg font-bold mt-1 ${item.highlight ? "" : "text-gray-900"}`}>
                {item.title}
              </h4>
              {item.description && (
                <p className={`mt-2 text-sm ${item.highlight ? "opacity-90" : "text-gray-600"}`}>
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Horizontale tijdlijn variant - geschikt voor presentaties en overzichten
 */
interface HorizontalTimelineProps {
  brand?: TimelineBrand;
  items: TimelineItem[];
  className?: string;
}

export const HorizontalTimeline: React.FC<HorizontalTimelineProps> = ({
  brand = "vijfhart",
  items,
  className = "",
}) => {
  const styles = brandStyles[brand];

  return (
    <div className={`relative ${className}`}>
      {/* Horizontale lijn */}
      <div className={`absolute top-4 left-0 right-0 h-0.5 ${styles.line}`} />

      <div className="flex justify-between">
        {items.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center text-center max-w-[150px]">
            {/* Dot */}
            <div
              className={`w-8 h-8 rounded-full border-4 border-white shadow-md flex items-center justify-center ${
                item.highlight ? styles.dot : "bg-gray-300"
              }`}
            >
              {item.highlight && (
                <div className="w-2 h-2 bg-white rounded-full" />
              )}
            </div>

            {/* Content */}
            <div className="mt-4">
              <span className="text-xs font-medium text-gray-500 block">
                {item.date}
              </span>
              <h4 className="text-sm font-bold mt-1 text-gray-900">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
