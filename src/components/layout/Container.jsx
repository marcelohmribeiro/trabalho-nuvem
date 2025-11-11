export default function Container({ children, withNav = false }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-100 to-amber-100">
      <div className="max-w-2xl mx-auto min-h-screen bg-white shadow-xl">
        <div
          className={`flex flex-col min-h-screen ${
            withNav ? "pb-16 md:pb-0" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
