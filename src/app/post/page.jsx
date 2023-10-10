import Link from "next/link";

export default function Post(){
    return(
        <div>
            <h1>Postagens</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus necessitatibus deleniti voluptatibus corrupti odit a sed aperiam facere culpa atque obcaecati temporibus eligendi, illo earum reprehenderit ut, nam dicta dolores!</p>
            <p><Link href="/">Voltar...</Link></p>
        </div>
    )
}