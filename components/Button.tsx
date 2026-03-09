export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
 <button
  className={`
    bg-primary text-white
    font-[Inter_Tight] font-semibold text-sm sm:text-base
    tracking-[0.5px] leading-[150%]
    px-6 py-3 rounded-[6px] h-[48px] 
    hover:opacity-90 transition-opacity
    cursor-pointer overflow-hidden truncate
    ${className}`}
>
  {children}
</button>
  );
}
