"use client";

import Image from "next/image";

const CartModal = () => {
  const cardItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cardItems ? (
        <div className="">Le panier est vide</div>
      ) : (
        <div className="flex gap-4">
          <Image
            src=""
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            <div className="">
              <div className="flex items-center justify-between gap-8">
                <h3 className="font-semibold">Nom du produit</h3>
                <div className="p-1 bg-gray-100 rounded-sm">490 €</div>
              </div>
              <div className="text-sm text-gray-500">Disponible</div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="">Quantité : 2</span>
              <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
