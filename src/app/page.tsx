import LanguageSelector from "@/components/LanguageSelector";
import Content from "@/components/Content";
// import Main from "@/components/Main";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative h-[100vh]">
        <Image
          className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
          src="/logo.jpg"
          width={400}
          height={400}
          alt="Vidhi Saharaa logo"
        />
        <LanguageSelector />
      </section>
      <Content />
    </div>
  );
}
