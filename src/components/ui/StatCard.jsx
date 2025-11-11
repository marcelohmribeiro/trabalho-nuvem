export default function StatCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-linear-to-br from-amber-100 to-amber-200 rounded-xl shadow-md">
      <div className="text-4xl">{icon}</div>
      <div className="flex-1">
        <div className="text-sm text-amber-800 font-medium">{label}</div>
        <div className="text-2xl font-bold text-amber-900">{value}</div>
      </div>
    </div>
  );
}
