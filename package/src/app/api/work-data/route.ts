import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/projectMarketingStrategy.png",
        title: "\"With Us Always\" — 4 | 4 | 4 Strategy",
        client: "McMaster | Under Armour Case Study (2025)",
        slug: "marketing-strategy"
    },
    {
        image: "/images/work/projectDigitalTransformation.png",
        title: "Loss Prevention Web Platform",
        client: "McMaster | Digital Transformation (2025)",
        slug: "digital-transformation"
    },
    {
        image: "/images/work/projectNuclearEnergyForCommunityTransit.png",
        title: "Nuclear Energy for Community Transit",
        client: "McMaster | GRIT Week (2024)",
        slug: "nuclear-energy-transit"
    }
];




export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
