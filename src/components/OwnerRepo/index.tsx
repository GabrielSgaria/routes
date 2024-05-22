'use client'
import Image from "next/image";
import { useState } from "react";

interface OwnerRepoProps {
    avatar_url: string;
    name: string;
}


export function OwnerRepo({ avatar_url, name }: OwnerRepoProps) {
    const [show, setShow] = useState(false);

    return (
        <div className="flex gap-2 items-center ">
            {show && (
                <>
                    <Image
                        src={avatar_url}
                        alt="Avatar do usuario"
                        width={900}
                        height={900}
                        className="rounded-full w-8 h-8"
                    />
                    <strong>{name}</strong>
                </>
            )}
            <button onClick={() => setShow(!show)}>
                {show ? 'Ocultar nome' : 'Mostrar nome'}
            </button>
        </div>
    )
}