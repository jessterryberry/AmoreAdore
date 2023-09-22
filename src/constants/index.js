//Website Title is going to be called AmoreAdore

import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigBook1, bigBook2, bigBook3, customer1, customer2, 
         book1, book2, book3, book4, book5, book6, book7, book8, 
         book9, book10, book11, book12, book13, book14, thumbnailBook1, 
         thumbnailBook2, thumbnailBook3 } from "../assets/images";

export const navLinks = [
    { href: "", label: "Home" },
    { href: "about-us", label: "About Us" },
    { href: "all-products", label: "Products" },
    { href: "contact-us", label: "Contact Us" },
];

export const books = [
    {
        thumbnail: thumbnailBook1,
        bigBook: bigBook1,
    },
    {
        thumbnail: thumbnailBook2,
        bigBook: bigBook2,
    },
    {
        thumbnail: thumbnailBook3,
        bigBook: bigBook3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Authors' },
    { value: '500+', label: 'Publishers' },
    { value: '250k+', label: 'Customers' },
];

export const popProducts = [
    {
        imgURL: book4,
        name: "A Touch of Chaos",
        author: "Scarlett St. Clair",
        price: "$28.99",
    },
    {
        imgURL: book5,
        name: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        price: "$18.32",
    },
    {
        imgURL: book10,
        name: "Fourth Wing",
        author: "Rebecca Yarros",
        price: "$25.50",
    },
    {
        imgURL: book12,
        name: "Twisted Games",
        author: "Ana Huang",
        price: "$21.67",
    },
];

export const fullProducts = [
    {
        imgURL: book1,
        name: "A Touch of Darkness",
        author: "Scarlett St. Clair",
        price: "$19.76",
    },
    {
        imgURL: book2,
        name: "A Touch of Ruin",
        author: "Scarlett St. Clair",
        price: "$20.62",
    },
    {
        imgURL: book3,
        name: "A Touch of Malice",
        author: "Scarlett St. Clair",
        price: "$20.60",
    },
    {
        imgURL: book4,
        name: "A Touch of Chaos",
        author: "Scarlett St. Clair",
        price: "$28.99",
    },
    {
        imgURL: book5,
        name: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        price: "$18.32",
    },
    {
        imgURL: book6,
        name: "A Court of Mist and Fury",
        author: "Sarah J. Maas",
        price: "$24.50",
    },
    {
        imgURL: book7,
        name: "A Court of Wings and Ruin",
        author: "Sarah J. Maas",
        price: "$21.79",
    },
    {
        imgURL: book8,
        name: "A Court of Frost and Starlight",
        author: "Sarah J. Maas",
        price: "$22.00",
    },
    {
        imgURL: book9,
        name: "A Court of Silver Flames",
        author: "Sarah J. Maas",
        price: "$16.06",
    },
    {
        imgURL: book10,
        name: "Fourth Wing",
        author: "Rebecca Yarros",
        price: "$25.50",
    },
    {
        imgURL: book11,
        name: "Twisted Love",
        author: "Ana Huang",
        price: "$21.67",
    },
    {
        imgURL: book12,
        name: "Twisted Games",
        author: "Ana Huang",
        price: "$21.67",
    },
    {
        imgURL: book13,
        name: "Twisted Hate",
        author: "Ana Huang",
        price: "$21.67",
    },
    {
        imgURL: book14,
        name: "Twisted Lies",
        author: "Ana Huang",
        price: "$19.26",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const aboutUs = [
    {
        imgURL: support,
        label: "Our Commitment",
        subtext: "A small team of five, dedicated to bringing the best in romance and fantasy."
    },
    {
        imgURL: truckFast,
        label: "Shipping",
        subtext: "For orders exceeding $100, enjoy free shipping, because we believe that every booklover deserves a little extra love."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with secure payment options, ensuring a seamless shopping experience."
    },
    
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Chris Robison',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Meghan Gibney',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "A Touch of Chaos", link: "/" },
            { name: "A Court of Thorns and Roses", link: "/" },
            { name: "Fourth Wing", link: "/" },
            { name: "Twisted Games", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@amoreadore.com", link: "mailto:customer@amoreadore.com" },
            { name: "+ 1 807 355 8463", link: "tel:+18073558463" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];