import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import TourCard from "./tour-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { DatePicker } from "@/components/ui/date-picker"

export default function Destination() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6">

        {/* Header with sort */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold font-v">Wisata Alam</h1>
            <p className="text-sm text-gray-500">65 Interesting Places</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by:</span>
            <Select defaultValue="popularity">
              <SelectTrigger className="w-[180px] bg-gray-100">
                <SelectValue placeholder="Popularity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content with Filters and Results */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Section */}
          <div className="w-full md:w-64 space-y-4">
            {/* Availability Filter */}
            <div className="border rounded-md overflow-hidden">
              <h3 className="font-medium p-4 border-b">Availability</h3>
              <div className="p-4 space-y-3">
                <p className="text-sm mb-2">From</p>
                <div className="space-y-3">
                  <DatePicker label="07/03/2023" btnClassName={'w-full'} />
                  <DatePicker label="07/03/2023" btnClassName={'w-full'} />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Check Availability</Button>
                </div>
              </div>
            </div>

            {/* Theme Filter */}
            <FilterSection title="Theme">
              <FilterCheckbox id="nature-wonders" label="Nature wonders" />
              <FilterCheckbox id="world-discovery" label="Earth for world discovering" />
              <FilterCheckbox id="adventure" label="Adventure" />
              <FilterCheckbox id="urban" label="Urban gems" />
              <FilterCheckbox id="food" label="Food and Culture" />
              {/* <ShowMoreLink /> */}
            </FilterSection>

            {/* Duration Filter */}
            <FilterSection title="Duration">
              <FilterCheckbox id="1-hour" label="1-2 hours" />
              <FilterCheckbox id="3-4-hours" label="3-4 hours" />
              <FilterCheckbox id="5-7-hours" label="5-7 hours" />
              <FilterCheckbox id="full-day" label="Full day (7+ hours)" />
              {/* <ShowMoreLink /> */}
            </FilterSection>

            {/* Destination Filter */}
            <FilterSection title="Destination">
              <FilterCheckbox id="bogor" label="Bogor" />
              <FilterCheckbox id="puncak" label="Puncak" />
              <FilterCheckbox id="sentul" label="Sentul" />
              {/* <ShowMoreLink /> */}
            </FilterSection>
          </div>

          {/* Tour Results */}
          <div className="flex-1">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <TourCard key={index} />
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" className="px-8">
                Load more
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


function FilterSection({ title, children }) {
  return (
    <Collapsible defaultOpen className="border rounded-md overflow-hidden">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 border-b">
        <h3 className="font-medium">{title}</h3>
        <ChevronDown className="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 space-y-2">{children}</CollapsibleContent>
    </Collapsible>
  )
}

function FilterCheckbox({ id, label }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <label htmlFor={id} className="text-sm cursor-pointer">
        {label}
      </label>
    </div>
  )
}

function ShowMoreLink() {
  return (
    <a href="#" className="text-xs text-primary block mt-2">
      Show More Destinations
    </a>
  )
}
