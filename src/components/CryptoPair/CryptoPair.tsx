import React from 'react';
import { Label } from '@/components/ui/label';

interface CryptoPairProps {
    images: string[];
    imageSize: number;
    space: number;
    margin: number;
    title: string;
    fontsize: number;
}

const CryptoPair: React.FC<CryptoPairProps> = ({ images, imageSize, space, margin, title, fontsize }) => {
    return (
        <div className="flex">
            <div className="flex my-auto">
                <img
                    src={`${images[0]}`}
                    alt="user.name"
                    className={`w-${imageSize} h-${imageSize} rounded-full bg-slate-100 ring-1 ring-white`}
                    loading="lazy"
                />
                <img
                    src={`${images[1]}`}
                    alt="user.name"
                    className={`ml-[-0.3rem] w-${imageSize} h-${imageSize} rounded-full bg-slate-100 ring-1 ring-white`}
                    loading="lazy"
                />
            </div>
            <Label className={`my-auto ml-${margin} text-[${fontsize}px] font-medium`}>{title}</Label>
        </div>
    );
};

export default CryptoPair;