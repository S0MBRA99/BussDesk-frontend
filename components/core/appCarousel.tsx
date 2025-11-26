import {
    Carousel, CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function AppCarousel() {

    const arrayTest = ["one", "two", "three", "four", "five"]

    return (
        <Carousel className="w-full max-w-xs h-1/2">
            <CarouselContent>
                {arrayTest.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="h-full">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{item}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}