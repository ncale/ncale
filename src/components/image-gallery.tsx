import Image from "next/image";
import pic1 from "@/../public/images/profile-pic.jpeg";
import pic2 from "@/../public/images/pic2.jpeg";
import pic3 from "@/../public/images/pic3.jpeg";
import { AspectRatio } from "./ui/aspect-ratio";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const imageList = [pic1, pic2, pic3];

export default function ImageGallery() {
  return (
    <section className="space-y-5">
      <h2 className="font-app-special">Image Gallery</h2>
      <ScrollArea className="whitespace-nowrap rounded border">
        <div className="flex space-x-2 p-2">
          {imageList.map((pic, i) => (
            <div key={i} className="min-h-44 min-w-44 max-w-44 overflow-hidden">
              <AspectRatio ratio={1}>
                <Image
                  src={pic}
                  width={500}
                  height={500}
                  className="min-h-44 rounded object-cover"
                  alt="A portrait"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
