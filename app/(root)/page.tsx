import dynamic from "next/dynamic";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import Image from "next/image";
import Link from "next/link";

const Collection = dynamic(() => import("@/components/shared/Collection").then((m) => ({ default: m.Collection })), {
  loading: () => (
    <div className="collection-heading">
      <h2 className="h2-bold text-dark-600">Recent Edits</h2>
      <div className="collection-empty animate-pulse rounded-lg bg-dark-400/10 p-12">
        <p className="p-20-semibold text-dark-400/50">Loading...</p>
      </div>
    </div>
  ),
  ssr: true,
});

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = (await searchParams).page;
  const query = (await searchParams).query;

  const pageNum = Number(page) || 1;
  const searchQuery = (query as string) || "";

  const images = await getAllImages({ pageNum, searchQuery });

  return (
    <>
      <section className="home">
        <h1 className="home-heading">Unleash Your Creative Vision with ShadeCraft </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link key={link.route} href={link.route} className="flex-center flex-col gap-2">
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection hasSearch={true} images={images?.data} totalPages={images?.totalPage} page={pageNum} />
      </section>
    </>
  );
};

export default Home;
