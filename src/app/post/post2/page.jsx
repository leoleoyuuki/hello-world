import Image from "next/image";
import Link from "next/link";

export default function Post2(){
    return(
        <div>
            <h1>Postagens2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus necessitatibus deleniti voluptatibus corrupti odit a sed aperiam facere culpa atque obcaecati temporibus eligendi, illo earum reprehenderit ut, nam dicta dolores!</p>
            <p><Link href="/">Voltar...</Link></p>
            <figure>
                <Image src="/img/goose-8290811_1280.jpg" alt="Goose" width={320} height={320}></Image>
            </figure>
        </div>
    )
}