import Link from "next/link";

export default function Header({
  title,
  showBack = false,
  showSettings = false,
}) {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-linear-to-r from-amber-900 to-amber-800 text-amber-50 shadow-md">
      {showBack ? (
        <Link
          href="/home"
          className="text-3xl hover:scale-110 transition-transform duration-200"
        >
          ‹
        </Link>
      ) : (
        <div className="w-10"></div>
      )}

      <div className="flex items-center gap-2">
        {title === "Café Clicker" && <span className="text-2xl">☕</span>}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>

      {showSettings ? (
        <Link
          href="/settings"
          className="text-2xl hover:scale-110 transition-transform duration-200"
        >
          ⚙️
        </Link>
      ) : (
        <div className="w-10"></div>
      )}
    </div>
  );
}
