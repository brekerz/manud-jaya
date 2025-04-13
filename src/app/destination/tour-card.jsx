import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Clock, Bus, Group, Car, User, Users } from "lucide-react"

export default function TourCard() {
  return (
    <div className="flex flex-col md:flex-row border rounded-md overflow-hidden">
      {/* Tour Image */}
      <div className="relative w-full md:w-48 h-40">
        <Image
          src="/assets/waterfall.jpeg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Tour Details */}
      <div className="flex-1 p-4 flex items-center flex-col md:flex-row">
        <div className="flex-1 space-y-4 items-center">
          <div className="flex gap-3">
            {/* Tour Badge */}
            <div className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full">Recommended</div>

            <div className="border-l bg-gray-300 h-6" />

            {/* Tour Rating */}
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-[#FFA432] text-[#FFA432]" />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">(256 reviews)</span>
            </div>
          </div>

          {/* Tour Title */}
          <h3 className="font-medium">Westminster to Greenwich River Thames</h3>


          {/* Tour Details */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span className="font-medium">2 hours</span>
            </div>

            <div className="border-l bg-gray-300 h-4" />

            <div className="flex items-center gap-1">
              <Car className="h-4 w-4" />
              <span className="font-medium">Transport</span>
            </div>

            <div className="border-l bg-gray-300 h-4" />

            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="font-medium">Family Plan</span>
            </div>
          </div>
        </div>

        {/* Price and Button */}
        <div className="mt-4 md:mt-0 md:ml-4 flex flex-col items-end justify-between">
          <div className="text-right">
            <div className="text-primary font-bold text-xl">$35.00</div>
          </div>
          <p className="text-sm text-gray-600">per person</p>
          {/* <Button className="bg-primary hover:bg-primary/90 text-white mt-4 md:mt-0">View Details</Button> */}
        </div>
      </div>
    </div>
  )
}

