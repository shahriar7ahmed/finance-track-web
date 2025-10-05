import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <Button variant="destructive">Hello World</Button>
    </div>
  );
}
