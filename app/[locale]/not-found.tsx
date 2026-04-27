import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-32 px-4 text-center">
      <p className="text-primary-500 text-sm tracking-widest uppercase mb-4 font-semibold">
        Error 404
      </p>
      <h1 className="text-[8rem] sm:text-[12rem] font-bold leading-none text-navy-100 select-none">
        404
      </h1>
      <p className="text-xl text-navy-500 mt-2 mb-8">
        Page not found
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl border border-navy-200 bg-white px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-surface-1 shadow-sm"
      >
        &larr; Back to home
      </Link>
    </div>
  );
}
