import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import Navicons from "./Navicons";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="h-20 py-4 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="flex items-center justify-between md:hidden h-full">
        <Link href="/">
          <Image src="/logo1.png" alt="" width={48} height={48} />
        </Link>
        <Menu />
      </div>
      {/* Desktop */}
      <div className="hidden md:flex items-center h-full justify-between gap-8 ">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo1.png" alt="Logo" width={64} height={64} />
          </Link>
          <div className="hidden xl:flex gap-5 items-center justify-center w-full">
            <Link href="/">Notre Galerie</Link>
            <Link href="/">Nos Artistes</Link>
            <Link href="/">Actualités</Link>
            <Link href="/">Leasing</Link>
            <Link href="/">La boutique</Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3  flex items-center justify-between gap-8 xl:w-1/2">
          <SearchBar />
          <Navicons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
