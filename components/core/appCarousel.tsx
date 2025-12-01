import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { columns } from "@/components/core/columnsTable";
import { TaskSection, dataTableTest } from "@/app/types"
import CalendarComponent from "@/components/core/calendarComponent";
import ChatLocalComponent from "@/components/core/chatLocalComponent";
import { DataTable } from "@/components/core/dataTableComponent";
import { FileSpreadsheet, Calendar, MessageSquare } from "lucide-react";
import { useState,useEffect } from "react";


export default function AppCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [api, setApi] = useState<any>(null);

    const slides = [
        {
            component: <DataTable columns={columns} data={dataTableTest} />,
            icon: FileSpreadsheet,
            label: "Tasks"
        },
        {
            component: <CalendarComponent />,
            icon: Calendar,
            label: "Calendar"
        },
        {
            component: <ChatLocalComponent />,
            icon: MessageSquare,
            label: "Chat"
        }
    ];

    useEffect(() => {
        if (api) {
            api.scrollTo(currentIndex);
        }
    }, [currentIndex, api]);

    useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="h-full flex flex-col w-[95%]">
            <div className="flex sm:hidden items-center justify-center gap-2 p-3 border-b border-zinc-200 dark:border-zinc-800">
                {slides.map((slide, index) => {
                    const Icon = slide.icon;
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                                currentIndex === index
                                    ? "bg-blue-500 text-white"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                        >
                            <Icon className="size-4" />
                            <span className="text-xs font-medium">{slide.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Carousel */}
            <div className="flex-1 relative overflow-auto">
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    className="h-full"
                    setApi={setApi}
                >
                    <CarouselContent className="h-full -ml-2 md:-ml-4">
                        {slides.map((slide, index) => (
                            <CarouselItem key={index} className="basis-full pl-2 md:pl-4 h-full">
                                <div className="h-full px-2 py-3 sm:p-4">
                                    <div className="h-full w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-stone-950 shadow-sm overflow-hidden">
                                        {slide.component}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* Indicadores de puntos (solo móvil) */}
                <div className="flex sm:hidden items-center justify-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-800">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1.5 rounded-full transition-all ${
                                currentIndex === index
                                    ? "w-6 bg-blue-500"
                                    : "w-1.5 bg-muted-foreground/30"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}