import Link from "next/link";
import Image from "next/image";
export default function Post1(){
    return(
        <div>
            <h1>Postagens1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus necessitatibus deleniti voluptatibus corrupti odit a sed aperiam facere culpa atque obcaecati temporibus eligendi, illo earum reprehenderit ut, nam dicta dolores!</p>
            <p><Link href="/">Voltar...</Link></p>
            <figure>
                <Image src="/img/cat-8257177_1280.jpg" alt="Gato" width={320} height={320}></Image>
            </figure>
        </div>
    )
}