import React from 'react';
import Product1 from "@/styles/assets/08.svg";
import Arrow from "@/styles/assets/09.svg";
import Fast from "@/styles/assets/10.svg";
import Yellow from "@/styles/assets/11.svg";
import Image from '@/components/common/image';
import Link from 'next/link';

const ZigZag = () => {
    return (
        <div className="zig-zag">
            <div className="zig-zag-parent header">
                <h3>Exploring excellence in every creation </h3>
                <h2>Our Products</h2>
            </div>
            <div className="zig-zag-blue">
                <div className="zig-zag-parent">
                    <div className="zig-img">
                        <Image src={Product1?.src} alt={Product1?.src} />
                    </div>
                    <div className="zig-content">
                        <h2>Order swiftly, indulge freely, and let the prompt invoice applaud. </h2>
                        <p>Experience the magic of Alo Invoice. Where your order is a whisper, and the invoice is a swift echo, ensuring you savor every moment without waiting for a waiter pause </p>
                        <Link href="https://play.google.com/store/apps/details?id=com.alo_invoice.restaurant" target='_'>
                            <button>Explore<Image src={Arrow?.src} alt={Arrow?.src} /></button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="zig-zag-red">
                <div className="zig-zag-parent">
                    <div className="zig-content">
                        <h2>From meals to milestones, FastX ensures everything reaches your doorstep  </h2>
                        <p>From delicious meals to daily essentials and urgent documents, our delivery app brings everything you need right to your doorstep with a tap </p>
                        <Link href="https://play.google.com/store/apps/details?id=com.fastx.consumer" target='__'>
                            <button>Explore<Image src={Arrow?.src} alt={Arrow?.src} /></button>
                        </Link>
                    </div>
                    <div className="zig-img">
                        <Image src={Fast?.src} alt={Fast?.src} />
                    </div>
                </div>
            </div>
            <div className="zig-zag-yellow">
                <div className="zig-zag-parent">
                    <div className="zig-img">
                        <Image src={Yellow?.src} alt={Yellow?.src} />
                    </div>
                    <div className="zig-content">
                        <h2>Tap, Order, Eat, Repeat - Satisfy your cravings with just a few clicks  </h2>
                        <p>No more scrolling through endless options! Alo Foodie gets to know your taste buds and curates a personalized menu with dishes you ll love </p>
                        <Link href="https://play.google.com/store/apps/details?id=com.ALO_Foodie_alo_foodie" target='___'>
                            <button>Explore<Image src={Arrow?.src} alt={Arrow?.src} /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ZigZag