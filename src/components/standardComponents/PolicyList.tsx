// components/standardComponents/PolicyList.tsx

interface PolicyListProps {
  title?: string; // The title prop is now correctly defined
  items: string[];
}

export default function PolicyList({ title, items }: PolicyListProps) {
  return (
    <div className="space-y-2">
      {title && <p className="font-semibold text-text-paragraph">{title}</p>}
      <ul className="list-disc list-inside text-text-paragraph text-sm/7 space-y-2 font-bold">
        {items.map((item, index) => (
          <li key={index} className="pl-2">{item}</li>
        ))}
      </ul>
    </div>
  );
}
