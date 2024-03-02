import React from 'react'
import ImageMarker from 'react-image-marker';
import floorImg from "@/styles/assets/group.svg";
import Button from '@/components/common/button';
import Link from '@/components/common/link';

const AloEmployee = () => {

    const CustomMarker = (props) => {
        return (
            <div className="tooltip" data-tooltip={props.name}>
                <p className="custom-marker"></p>
            </div>
        );
    };

    const employee = [
        {
            "top": 47.756314647476124,
            "left": 11.263020833333334,
            "name": "Alex"
        },
        {
            "top": 47.756314647476124,
            "left": 17.838541666666668,
            "name": "Zen"
        },
        {
            "top": 42.966141585934544,
            "left": 23.307291666666668,
            "name": "Ethan"
        },
        {
            "top": 45.56652124791426,
            "left": 28.515625,
            "name": "Liam"
        },
        {
            "top": 44.47162454813333,
            "left": 33.658854166666664,
            "name": "Ryan"
        },
        {
            "top": 44.47162454813333,
            "left": 38.802083333333336,
            "name": "Lucas"
        },
        {
            "top": 43.78731411077025,
            "left": 44.921875,
            "name": "Sickick"
        },
        {
            "top": 45.01907289802379,
            "left": 50.455729166666664,
            "name": "Harper"
        },
        {
            "top": 48.166900909893975,
            "left": 55.598958333333336,
            "name": "Sophia"
        },
        {
            "top": 48.30376299736659,
            "left": 60.481770833333336,
            "name": "Olivia"
        },
        {
            "top": 49.39865969714752,
            "left": 66.14583333333333,
            "name": "Caleb"
        },
        {
            "top": 48.851211347257056,
            "left": 75.65104166666667,
            "name": "Isabella"
        },
        {
            "top": 48.166900909893975,
            "left": 83.0078125,
            "name": "Scarlet"
        },
        {
            "top": 52.546487709017704,
            "left": 90.625,
            "name": "Annabelle"
        },
        {
            "top": 77.45538762903391,
            "left": 81.90104166666667,
            "name": "Chuckles"
        },
        {
            "top": 67.05386898111506,
            "left": 67.05729166666667,
            "name": "Mason"
        },
        {
            "top": 65.27466184397103,
            "left": 53.841145833333336,
            "name": "Natarajan CEO"
        },
        {
            "top": 65.8221101938615,
            "left": 41.341145833333336,
            "name": "Grace"
        },
        {
            "top": 77.86597389145176,
            "left": 29.557291666666668,
            "name": "BitToBytes"
        }
    ]

    return (
        <div className="alo-billers">
            <h2>One team, one dream—we are navigating the digital realm together </h2>
            <ImageMarker src={floorImg?.src} markers={employee} markerComponent={CustomMarker} />
            <Link href="/careers?page=scroll" text={<Button label="Work With Us" />} />
        </div>
    )
}
export default AloEmployee