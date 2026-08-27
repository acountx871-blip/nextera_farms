'use client';

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Navbar skeleton */}
      <div className="h-16 sm:h-[72px] bg-[oklch(0.32_0.11_155)]" />
      {/* Hero skeleton */}
      <div className="h-screen bg-muted" />
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-28 space-y-8">
        <div className="h-8 bg-muted rounded-lg w-48 mx-auto" />
        <div className="h-12 bg-muted rounded-lg w-96 mx-auto" />
        <div className="h-4 bg-muted rounded-lg w-64 mx-auto" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-muted rounded-2xl h-80" />
          ))}
        </div>
      </div>
    </div>
  );
}
