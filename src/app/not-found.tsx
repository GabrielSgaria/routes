import Link from "next/link";

export default function NotFound() {
    return (
      <div>
        <h2>Página não encontrada</h2>
        <p>Parece que esta página que esta tentando acessar não existe</p>
        <Link href="/">Voltar para a home</Link>
      </div>
    )
  }