import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Página Inicial</h1>

    <div>
      <ul>
        <li><Link href="/post">Post</Link></li>
        <li><Link href="/post/post1">Post-1</Link></li>
        <li><Link href="/post/post2">Post-2</Link></li>
        <li><Link href="/post/post3">Post-3</Link></li>
      </ul>
    </div>
    </>
  )
}
