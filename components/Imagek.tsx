import { Image, ImageKitProvider } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Imagek() {
  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <Image
        src="https://ik.imagekit.io/your_imagekit_id/image.jpg"
        width={600}
        height={600}
        alt="Picture of the author"
      />
    </ImageKitProvider>
  );
}
