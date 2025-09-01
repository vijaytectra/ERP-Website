// components/standardComponents/PolicySection.tsx

interface PolicySectionProps {
    title: string;
    children: React.ReactNode;
}

export default function PolicySection({ title, children }: PolicySectionProps) {
    return (
        <section className="flex flex-col space-y-4">
            <h2 className="text-xl text-text-heading font-bold">{title}</h2>
            <div className="space-y-4">
                {children}
            </div>
        </section>
    );
}
