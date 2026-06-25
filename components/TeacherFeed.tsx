"use client";

import { useState } from "react";
import Image from "next/image";

type Post = { id: string; photos: string[]; url: string };

function TeacherCard({ post }: { post: Post }) {
  const [index, setIndex] = useState(0);
  const total = post.photos.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="space-y-2">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-sand group">
        <a
          href={`${post.url}?img_index=${index + 1}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`/teachers/${post.photos[index]}`}
            alt="Bathhouse instructor"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
            </svg>
            <span className="text-white text-xs font-medium">View on Instagram</span>
          </div>
        </a>

        {total > 1 && (
          <>
            <button
              onClick={(e) => { e.preventDefault(); prev(); }}
              aria-label="Previous photo"
              className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-cream/70 backdrop-blur-sm flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              onClick={(e) => { e.preventDefault(); next(); }}
              aria-label="Next photo"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-cream/70 backdrop-blur-sm flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {total > 1 && (
        <div className="flex justify-center gap-1">
          {post.photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Photo ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === index ? "bg-terracotta" : "bg-sand"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function TeacherFeed({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <TeacherCard key={post.id} post={post} />
      ))}
    </div>
  );
}
