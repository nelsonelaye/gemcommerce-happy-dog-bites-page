
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  align?: "left" | "right";
}

export default function FeatureItem({
  icon,
  title,
  description,

}: FeatureItemProps) {
  return (
    <div
      className={`flex items-start gap-3 sm:gap-6 w-full max-w-[370px] flex-row text-left `}
    >
      <div className="shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-[Inter_Tight] font-semibold text-sm sm:text-[19px] text-text leading-[150%] tracking-[0.5px] mb-2">
          {title}
        </p>
    <p>
      {description}
    </p>
      </div>
    </div>
  );
}
