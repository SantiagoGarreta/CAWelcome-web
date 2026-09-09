export function MediaPlaceholder({ className = "" }: { className?: string }) {
  return <div aria-label="Espacio reservado para una imagen o video" className={`placeholder flex min-h-48 items-center justify-center text-center ${className}`} />;
}
