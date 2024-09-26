import RetroGrid from "@/components/magicui/retro-grid";

import NavBar from "@/components/ui/NavBar";
import SearchBar from "@/components/searchBar/SearchBar";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center overflow-hidden rounded-lg border bg-background md:shadow-xl bg-gray-50">
      <NavBar />

      <section className="space-y-12 h-full flex items-center justify-center flex-col flex-1 -mt-16 relative z-10">
        <div className="space-y-5">
          <h1 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            Discover Music & Insights
          </h1>

          <p className="text-xl max-w-4xl text-center">
            Find tracks or users to unlock detailed insights on our dashboard.
            Enter a track or artist to get started and dive into insights, and
            more.
          </p>
        </div>

        <SearchBar />
      </section>

      <RetroGrid />
    </div>
  );
}
