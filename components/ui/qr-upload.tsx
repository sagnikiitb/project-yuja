"use client";

import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface QRUploadProps {
    value: string;
    onChange: (Src: string) => void;
    disabled?: boolean;
};

export const QRUpload = ({
    value,
    onChange,
    disabled
}: QRUploadProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }
    return (
        <div className="space-y-4 w-full flex flex-col justify-center items-center">
            <CldUploadButton
                onUpload={(result: any) => onChange(result.info.secure_url)}
            options={{
                maxFiles: 1
            }}
            uploadPreset="h1ifcnd5"
            >

            </CldUploadButton>
        </div>
    )
}