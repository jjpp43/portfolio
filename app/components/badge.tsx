import Image from "next/image";

interface BadgeProps {
  icon: string;
  label: string;
}

export default function Badge({ icon, label }: BadgeProps) {
  return (
    <div className="flex flex-row overflow-hidden rounded-full justify-center w-fit h-fit flex-wrap relative wrapper-badge gap-2 font-normal text-sm ">
      <div className="flex flex-row z-10 items-center rounded-full p-px">
        <div className="flex flex-row items-center bg-black px-2 py-0.5 rounded-full">
          <div className="p-0.5">
            <Image
              src={`/badgeIcons/${icon}.svg`}
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="p-0.5 px-1">{label}</div>
        </div>
      </div>
    </div>
  );
}
