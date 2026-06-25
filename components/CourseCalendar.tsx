"use client";

import { useState } from "react";
import Link from "next/link";
import { longFormCourses, buildCalendarWeeks } from "@/lib/courses";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function CourseCalendar({ compact }: { compact?: boolean }) {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(6);

  const weeks = buildCalendarWeeks(year, month);

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
  }

  function nextMonth() {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
  }

  const cellH = compact ? "min-h-[52px] md:min-h-[64px]" : "min-h-[80px] md:min-h-[100px]";
  const dayHeaderPy = compact ? "py-2" : "py-3";
  const textSize = compact ? "text-[10px]" : "text-[10px] md:text-xs";
  const courseHref = (id: string) => compact ? `/schedule#course-${id}` : `#course-${id}`;

  return (
    <div>
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          aria-label="Previous month"
          className="w-9 h-9 rounded-full border border-sand flex items-center justify-center text-ink hover:bg-sand/40 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <h3 className={`font-serif font-bold text-ink ${compact ? "text-lg" : "text-xl"}`}>
          {MONTH_NAMES[month]} {year}
        </h3>
        <button
          onClick={nextMonth}
          aria-label="Next month"
          className="w-9 h-9 rounded-full border border-sand flex items-center justify-center text-ink hover:bg-sand/40 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-px bg-sand rounded-2xl overflow-hidden border border-sand">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className={`bg-cream ${dayHeaderPy} text-center text-[10px] font-medium tracking-widest uppercase text-ink-light`}>
            {day}
          </div>
        ))}

        {weeks.map((week, wi) =>
          week.map((cell, di) => (
            <div
              key={`${wi}-${di}`}
              className={`p-1.5 ${cellH} ${
                cell?.inMonth ? "bg-surface/80" : "bg-cream/40"
              }`}
            >
              {cell && (
                <>
                  <p className={`text-[10px] mb-0.5 ${cell.inMonth ? "text-ink-light" : "text-ink-light/40"}`}>
                    {cell.date.getDate()}
                  </p>
                  <div className="space-y-0.5">
                    {cell.courses.map((course) => {
                      const Tag = compact ? Link : "a";
                      return (
                        <Tag
                          key={course.id}
                          href={courseHref(course.id)}
                          className={`block ${textSize} font-medium px-1 py-0.5 rounded-md leading-tight transition-colors ${course.color}`}
                        >
                          <span className="hidden md:inline">{course.shortName}</span>
                          <span className="md:hidden">{course.abbr}</span>
                        </Tag>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4">
        {longFormCourses.map((c) => {
          const Tag = compact ? Link : "a";
          return (
            <Tag key={c.id} href={courseHref(c.id)} className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              <span className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
              <span className="text-xs text-ink-mid">{c.title}</span>
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
