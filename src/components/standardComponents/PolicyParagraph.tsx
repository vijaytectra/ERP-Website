// components/standardComponents/PolicyParagraph.tsx

interface PolicyParagraphProps {
    children: React.ReactNode;
}

export default function PolicyParagraph({ children }: PolicyParagraphProps) {
    return (
        <p className="text-text-paragraph text-base/7 font-medium">{children}</p>
    );
}
