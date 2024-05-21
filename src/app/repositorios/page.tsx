'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react'


interface DataProps {
    id: number;
    name: string;
    full_name: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
    }
}



export default function Repositorios() {
    const [repos, setRepos] = useState<DataProps[]>([])

    useEffect(() => {
        function getData() {
            fetch("https://api.github.com/users/GabrielSgaria/repos")
                .then((response => response.json()))
                .then((data: DataProps[]) => {
                    setRepos(data)
                })
        }

        getData();
    }, [])

    const avatarUrl = repos.length > 0 ? repos[0].owner.avatar_url : ''

    return (
        <div className='container mx-auto flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold my-10'>Página de repositórios</h1>
            {avatarUrl && (
                <Image src={avatarUrl} alt='User Avatar' width={900} height={900} className='w-24 h-24 rounded-full mb-10' />
            )}

            {repos.map((item) => (
                <div key={item.id} className='flex flex-row'>
                    <strong>Repositório: </strong><a>{item.name}</a>
                    <br /><br />
                </div>

            ))}
        </div>
    )
}