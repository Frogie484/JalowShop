import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-sm font-bold text-white">
        J
      </span>
      <span>
        <span className="block font-display text-3xl font-semibold leading-none">Jalowshop</span>
        <span className="block text-[10px] uppercase tracking-[0.34em] text-stone">
          refined essentials
        </span>
      </span>
    </Link>
  );
}
