// components/standardComponents/PolicyParagraph.tsx

interface PolicyParagraphProps {
    children: React.ReactNode;
}

export default function PolicyParagraph({ children }: PolicyParagraphProps) {
    return (
        <p className="text-text-paragraph text-sm/7 font-medium">{children}</p>
    );
}
