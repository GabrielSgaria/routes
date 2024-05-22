import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contatos - Aprendendo NextJS",
    description: "Entre em contato com sujeito programador",
    keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
    openGraph: {
      images: ['https://sujeitoprogramador.com/wp-content/uploads/2024/04/r19.png']
    },
    robots: {
      index: true,
      follow: true,
      nocache:true,
      googleBot:{
        index: true,
        follow: true,
        noimageindex: true,
      }
    }
  };


export default function Contatos(){
    return(
        <div>
            <h1>Página de contatos</h1>
            <span>(41) 995373052</span>
        </div>
    )
}