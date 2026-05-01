export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="h-2 w-32 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-1/2 bg-accent animate-[marquee_1.2s_linear_infinite]" />
      </div>
    </div>
  );
}
