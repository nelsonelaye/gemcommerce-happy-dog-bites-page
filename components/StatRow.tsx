
export default function StatRow({
  percent,
  description,
}: {
  percent: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 md:gap-12 pb-3">
      <span className="font-[Inter_Tight] font-bold text-xl sm:text-[32px] text-primary leading-[120%] shrink-0 w-14">
        {percent}
      </span>
      <p >{description}</p>
    </div>
  );
}
