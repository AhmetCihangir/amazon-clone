import Header from "../components/Header"
import Image from "next/image"
import { useSelector } from "react-redux"
import { selectItems } from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct"

const checkout = () => {
    const items = useSelector(selectItems)

    return (
      <div className="bg-gray-300">
        <Header />

        <main className="lg:flex max-w-screen-2xl mx-auto">
          <div className="flex-grow m-5 shadow-sm  ">
            <Image
              src="http://links.papareact.com/ikj"
              width={1020}
              height={250}
              objectFit="contain"
            />

            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl border-b pb-4 ">
                {items.length === 0
                  ? "Your Shipping Basket is empty."
                  : "Your Shipping Basket"}
              </h1>

              {items.map((item, i) => (
                <CheckoutProduct {...item} key={i} />
              ))}
            </div>
          </div>
        </main>
      </div>
    );
}

export default checkout
