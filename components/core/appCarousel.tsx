import {
    Carousel, CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import TodoList from "@/components/core/todoComponent";
import CalendarComponent from "@/components/core/calendarComponent";
import ChatLocalComponent from "@/components/core/chatLocalComponent";

export default function AppCarousel() {

    const arrayTest = [<TodoList/>, <CalendarComponent/>, <ChatLocalComponent/>, "four", "five"]

    return (
        <Carousel>
            <CarouselContent>
                {arrayTest.map((item, index) => (
                    <CarouselItem key={index} className="basis-full h-[75vh]">
                        <div className="border-sidebar flex flex-col overflow-auto h-full w-[80%] mx-auto rounded-md bg-white dark:bg-stone-950">
                            <div>{item}</div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}