import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return <main className="overflow-hidden">
    <Hero />
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1>Car Catalogue</h1>
        <p>Explore the cars you like</p>
      </div>
      <div>
        <SearchBar />
        <div>
          <CustomFilter title="fuel"/>
          <CustomFilter  />
        </div>
      </div>

    </div>
  </main>;
}
