import ButtonTypeServer from "@/components/ButtonTypeServer";
import Card from "@/components/Card";
import CardCartoons from "@/components/CardCartoons";
import Link from "next/link";
export default function Home() {
  return (
    <>
        <div className="border-b-1 pb-5 border-[#409aa5] flex justify-between items-center">
         <ButtonTypeServer />
        </div>
        <div className="mt-10 flex items-center gap-10">
           <Link href={"/book-categories"} >
          <Card title={"Books"} image={"https://i.pinimg.com/736x/bf/67/73/bf6773ba023c70afe6caf83e88744d61.jpg"}/>
          </Link>
          <Link href={"/old-school-cartoons"}>
          <Card title={"Catoons"} image={"https://i.pinimg.com/736x/29/67/59/296759165612a1c74d225f42effed730.jpg"}/>
          </Link>
        </div>
    </>
  );
}
