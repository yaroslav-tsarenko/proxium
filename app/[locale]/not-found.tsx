import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-32 px-4 text-center">
      <p className="text-green-400 text-sm tracking-widest uppercase mb-4 font-semibold">
        Error 404
      </p>
      <h1 className="text-[8rem] sm:text-[12rem] font-bold leading-none text-zinc-800 select-none">
        404
      </h1>
      <p className="text-xl text-zinc-400 mt-2 mb-8">
        Page not found
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 shadow-sm"
      >
        &larr; Back to home
      </Link>
    </div>
  );
}
