import Image from "next/image";
import pic1 from "@/../public/images/profile-pic.jpeg";
import pic2 from "@/../public/images/pic2.jpeg";
import pic3 from "@/../public/images/pic3.jpeg";

const imageList = [pic1, pic2, pic3];

export default function ImageGallery() {
  return (
    <section className="space-y-5">
      <h2 className="font-app-special">Image Gallery</h2>
      <div className="flex flex-row overflow-scroll">
        {imageList.map((pic, i) => (
          <div
            key={i}
            className="relative mb-2 mr-2 h-fit min-h-44 min-w-44 max-w-44 overflow-hidden shadow-md"
          >
            <Image
              src={pic}
              width={500}
              height={500}
              className="absolute left-1/2 min-h-44 -translate-x-1/2 rounded"
              alt="A portrait"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
