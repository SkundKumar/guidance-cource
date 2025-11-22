


import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { clients, products } from "../../lib/constants";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { HeroParallax } from "@/components/global/connect-parallax";
import { LampComponent } from "@/components/global/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";

import { Timeline } from "@/components/ui/timeline";
import { TimelineDemo } from "@/components/global/TimelineDemo";


export default function Home() {





  return (
    <main>
    <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounnded-md !overflow-visible relative flex flex-col item-center antialiased" >
      <div className="absolute inset-0 h-full w-full items-center 
px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%, 
#000_35%,#223_100%)]">
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]" >
          <ContainerScroll
            titleComponent = {
                <div className="flex items-center justify-center flex-col">
                     <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                     <a href="https://forms.office.com/r/FprYCMy6kw">Your New Circle Awaits</a>
                  </span>
                </Button>
                <h1 className="text-5xl mb-2 md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold ">
                  I Teach You to Not Need Me
                 
                </h1>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold ">
                 
                 
                </h1>
                
                </div>
            }
          />

        </div>
</div>
      </section>

     

      <section className="mt-96 w-screen">
      
       
        
      </section>
     
      <section className="mt-[100px]">
        <LampComponent/>
            <div className="flex flex-wrap items-center justify-center justify center flex-col md:flex-row gap-8 -mt-72 mb-32">
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Why
                <h2 className="text-6xl mb-5">500 RS ?</h2>
              </CardItem>
              {/*card content first*/}
            
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                <p></p>
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    
                    YouTube is free. But on YouTube, no one tells you why your code is breaking. No one checks your logic. No one pushes you when you get lazy.
                  </li>
                  <li className="flex items-center gap-2">
                    
                    We don't watch videos all day. We build projects that you can actually put on your resume.
                  </li>
                 
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                 INTERESTED YET?
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=9NpbLPKP2Uu9VHxQqyGVkKMzhEmObmBIrP8JW3Y08npUQUhRV1FQUVlJTUUyQlpSSEVTSThJQjkyMS4u">Click For Queries</a>
                </CardItem>
              </div>
            </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                only 5 are 
                <h2 className="text-6xl mb-5">Allowed</h2>
              </CardItem>
                <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                
                <ul className="my-4 flex flex-col gap-2"><p>I am looking for 5 Students to turn into Frontend Engineers. </p><p className="font-semibold text-base">Stop watching YouTube tutorials. Join a closed cohort where you actually write code, get roasted, and learn how to build on your own.</p> 
                  
                </ul>
                </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  INTERESTED YET ?
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                 <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=9NpbLPKP2Uu9VHxQqyGVkKMzhEmObmBIrP8JW3Y08npUQUhRV1FQUVlJTUUyQlpSSEVTSThJQjkyMS4u">Click For Queries</a>
                </CardItem>
              </div>
            </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                
                <h2 className="text-4xl  mb-5">I don't want your money if you aren't going to code. This is for the serious ones only.</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
          
                <ul className="my-4 flex flex-col gap-2">
                  
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  INTERESTED YET ?
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=9NpbLPKP2Uu9VHxQqyGVkKMzhEmObmBIrP8JW3Y08npUQUhRV1FQUVlJTUUyQlpSSEVTSThJQjkyMS4u">Click For Queries</a>
                </CardItem>
              </div>
            </CardBody>
                </CardContainer>
                
                
            </div>
            <div className="flex items-center justify-center flex-col mb-10">
            <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    <a href="https://forms.office.com/r/FprYCMy6kw">Fill The Form</a> .
                  </span>
                </Button>

                
            </div>
            <div className="flex items-center justify-center flex-col mb-10">
              <p> or Else <span className="ml-2"><p>(ง&apos;̀-&apos;́)ง</p></span> </p>
            </div>
            
      </section>
      
      <TimelineDemo/>
   
      
      
      
      
   </main>
  );
}
