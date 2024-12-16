import Image from "next/image"
import ShopImage from "@/Pictures/shophero.png"
import { IoIosArrowForward } from "react-icons/io";
import Products from "@/components/Products";
import BlowHero from "@/components/ShopBlowHero";


export default function ShopHero(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "label 1.PNG",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          age: 25,
          image: 'Images (6).png',
          description: 'Stylish cafe chair.',
        },
        {
          name: 'lolito',
          price: "Rp 7000.000",
          age: 28,
          image: 'Images.png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 500.000",
          age: 28,
          image: 'Images (1).png',
          description: 'Outdoor bar table and stool.',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 28,
          image: 'image 1.png',
          description: 'Stylish cafe chair.',
        },
        {
          name: 'Leviosa',
          price: "Rp 7000.000",
          age: 28,
          image: 'Images (6).png',
          description: 'luxury big sofa.',
        },
        {
          name: 'Lolito',
          price: "Rp 500.000",
          age: 28,
          image: 'Images.png',
          description: 'Outdoor bar table and stool.',
        },
        {
          name: 'Respira',
          price: "Rp 500.000",
          age: 28,
          image: 'Images (1).png',
          description: 'Outdoor bar table and stool.',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "image 1.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          age: 25,
          image: 'Images (6).png',
          description: 'stylish cafe chair.',
        },
        {
          name: 'Lolito',
          price: "Rp 7000.000",
          age: 28,
          image: 'Images.png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 500.000",
          age: 28,
          image: 'Images (1).png',
          description: 'Outdoo bar table and stool.',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 28,
          image: 'image 1.png',
          description: 'Stylish cafe chair.',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          age: 28,
          image: 'Images (6).png',
          description: 'Stylish cafe chair.',
        },
        {
          name: 'Lolito',
          price: "Rp 700.000",
          age: 28,
          image: 'Images.png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 500.000",
          age: 28,
          image: 'Images (1).png',
          description: 'outdoor bar table and stool.',
        },
      ];



    return(
        <>
        <div className="shopsect">
        <Image src={ShopImage} alt="Picture of the author" />
            <h3 className="font-bold text-[1.5rem]">Shop</h3>
            <h5 className="shopPara"><span className=" font-bold">Home</span> Shop</h5>
        </div>
                <BlowHero/>
            <div className="cardsContainer">
            {data.map((card, index) => (

            <div className="card" key={index} style={{ width: "15rem" }}>
                <img
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                //   alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
            </div>
            </div>
                    ))}
            </div>

        </>
    )
}
