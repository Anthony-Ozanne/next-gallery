"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src="/menu.png"
        alt="Image"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Accueil</Link>
          <Link href="/">Notre Galerie</Link>
          <Link href="/">Nos Artistes</Link>
          <Link href="/">Actualités</Link>
          <Link href="/">Leasing</Link>
          <Link href="/">La boutique</Link>
          <Link href="/">Contactez nous</Link>
          <Link href="/">Déconnexion</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
