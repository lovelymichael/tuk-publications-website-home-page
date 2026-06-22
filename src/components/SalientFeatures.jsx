import React from "react";
import {
  ClipboardCheck,
  FilePenLine,
  BookOpen,
  Wallet,
  NotebookPen,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Visualization",
    icon: ClipboardCheck,
    color: "bg-lime-500",
  },
  {
    id: 2,
    title: "Attractive",
    icon: FilePenLine,
    color: "bg-cyan-400",
  },
  {
    id: 3,
    title: "Illustrated",
    icon: BookOpen,
    color: "bg-sky-400",
  },
  {
    id: 4,
    title: "Updated with the latest information",
    icon: Wallet,
    color: "bg-purple-400",
  },
  {
    id: 5,
    title: "Help the Parents become co-learners",
    icon: NotebookPen,
    color: "bg-emerald-400",
  },
];

const SalientFeatures = () => {
  return (
    <section className="bg-sky-500 py-20 px-4">
      {/* Heading */}
      <h2 className="text-center text-white text-4xl md:text-5xl font-light mb-16">
        Salient Features Of Our Books
      </h2>

      {/* Features */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <React.Fragment key={item.id}>
              <div className="group flex flex-col items-center">
                {/* Circle Section */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  
                  {/* Rotating Dashed Circle */}
                  <div className="absolute inset-0 border-2 border-dashed border-white rounded-full group-hover:animate-spin"></div>

                  {/* Black Ring */}
                  <div className="bg-slate-800 rounded-full p-2 z-10">
                    
                    {/* Colored Circle */}
                    <div
                      className={`${item.color}
                      w-32
                      h-32
                      rounded-full
                      flex
                      items-center
                      justify-center`}
                    >
                      <Icon size={55} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <p className="text-white text-center mt-5 max-w-[180px] text-lg">
                  {item.title}
                </p>
              </div>

              {/* Arrow */}
              {index !== features.length - 1 && (
                <ChevronRight
                  size={35}
                  className="text-white hidden xl:block"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default SalientFeatures;