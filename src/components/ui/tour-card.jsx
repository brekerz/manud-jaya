import Image from "next/image";

export default function TourCard({ imageUrl, title, duration, price, rating }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-md transition-all overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">Durasi: {duration}</p>
        <div className="flex items-center justify-between">
          <p className="text-lime-600 font-semibold">{price}</p>
          <span className="text-sm text-yellow-500">⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
}