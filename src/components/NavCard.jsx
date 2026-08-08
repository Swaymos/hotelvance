export function NavCard({ label, item, align }) {
  return (
    <a
      href={`/case-studies/${item.id}`}
      className={`border bg-slate-100 rounded-xl p-6 hover:bg-gray-50 transition ${
        align === "right" ? "text-right" : ""
      }`}
    >
      <p className="text-[14px] uppercase text-gray-500 mb-2">{label}</p>
      <p className="font-semibold text-[20px]">{item.title}</p>
    </a>
  );
}
