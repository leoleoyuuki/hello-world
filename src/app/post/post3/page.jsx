import Image from "next/image";
import Link from "next/link";

export default function Post3(){
    return(
        <div>
            <h1>Postagens3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus necessitatibus deleniti voluptatibus corrupti odit a sed aperiam facere culpa atque obcaecati temporibus eligendi, illo earum reprehenderit ut, nam dicta dolores!</p>
            <p><Link href="/">Voltar...</Link></p>
            <figure>
                <Image src="/img/flowers-8288492_1280.jpg" alt="Flores" width={320} height={320}></Image>
            </figure>
        </div>
    )
}