import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import GoldercoinComponent from "@/ZobloabUiComponents/MainPageComponents/GodenCoin";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    company_name:string;
    coinValueforJob:number;
    salary_range:string;
    number_of_jobs_left:number;
    location:string;
    job_type:string;
    experience_level:string;
    user_job_status:string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.company_name}</CardDescription>
          </CardHeader>
          <CardContent>
              <ul className="my-0 ml-4 list-disc [&>li]:mt-0">
                <li>Salary: {item.salary_range}</li>
                <li>Jobs left: {item.number_of_jobs_left}</li>
                <li>Location: {item.location}</li>
                <li>Job type: {item.job_type}</li>
                <li>Exprenece: {item.experience_level}</li>
                <li>Application status: <span className="dark:bg-zinc-600">{item.user_job_status}</span></li>
              </ul>
          </CardContent>
          <CardFooter>
                    <div className="rounded-full pl-4 pr-2 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Use Coin</span>
                    <span className="bg-zinc-700 rounded-full text-[0.7rem] px-2 py-0 text-white">
                      {item.coinValueforJob}
                    </span>
                    <GoldercoinComponent />
                    </div>
          </CardFooter>
        </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
