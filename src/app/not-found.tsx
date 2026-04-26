import Loader from "@/components/ui/Loader";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 via-white to-gray-100 text-gray-900 px-6 text-center">
      
      {/* 404 Heading */}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
        404
      </h1>

      {/* Subheading */}
      <h2 className="mt-4 text-xl md:text-2xl font-medium text-gray-700">
        Page not found
      </h2>

      {/* Message */}
      <p className="mt-3 text-gray-500 max-w-md">
        This page might be under development, or you may have entered the wrong URL.
        We’ll be adding it soon 🚀
      </p>

      {/* Actions */}
      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:scale-105 transition"
        >
          Go Home
        </Link>

        <div className="opacity-70">
          <Loader />
        </div>
      </div>
    </div>
  );
}