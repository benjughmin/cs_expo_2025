import { BestThesisCategory } from "./components/BestThesisCategory";
import { BestThesisMentor } from "./components/BestThesisMentor";
import { HOFHero } from "./components/HallOfFameHero";
import { AwardWinners } from "./components/AwardWinners";

export default function HallOfFamePage(){
    return <>
    <HOFHero/>
    <AwardWinners/>
    <BestThesisCategory/>
    <BestThesisMentor/>
    </>
}