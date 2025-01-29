"use client"

import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { TFeature } from "../types/features";

const FeatureCard = ({ feature }: { feature: TFeature }) => {
  return (
    <Card
      className="bg-gradient-to-r from-[#333333] to-[#313131] p-4 rounded-full text-center border-none hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden group"
      isPressable
    >
      <CardBody className="border-none">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-content2 group-hover:bg-primary/10 transition-colors duration-300">
            <Image 
              src={feature.imageSrc} 
              alt={feature.imageAlt} 
              width={100} 
              height={100} 
              className="text-primary w-7 !h-7" 
            />
          </div>
          <p className="text-[18px]">{feature.title}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
