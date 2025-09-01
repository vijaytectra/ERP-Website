import { FC } from "react";
import { LucideIcon } from "lucide-react"; // since you're using lucide icons

type UseCaseCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  className?: string; // optional extra styles
};

const UseCaseCard: FC<UseCaseCardProps> = ({
  title,
  description,
  icon: Icon,
  bgColor,
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl shadow-md p-6 flex flex-col gap-3 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow">
        <Icon className="w-6 h-6 text-text-heading" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-text-heading">{title}</h3>

      {/* Description */}
      <p className="text-sm text-text-paragraph leading-relaxed">{description}</p>
    </div>
  );
};

export default UseCaseCard;
