'use client'
import React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
   
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 200, damping: 40, mass: 1.5 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    { ...springConfig,  }
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    { ...springConfig,  }
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.1, 1]),
    { ...springConfig,  }
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [10, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-500, 300]),
    { ...springConfig,  }
  )

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-30 px-4 w-full left-0 top-0">
      <h1 className="text-5xl md:text-7xl font-bold dark:text-white">
        New Circle
      </h1>
      <p className="max-w-2xl font-bold text-xl md:text-2xl mt-5 dark:text-neutral-200">
      You are the average of the people you code with.
      </p>
      <p className="max-w-2xl text-base md:text-lg mt-8  dark:text-neutral-200">
       <span className='font-bold'>1. Closed Community:</span> No spam. No randoms. Just a small group of driven students building alongside you.
      <br/>

Daily Updates: Share your progress. See what others are building.
<br />
Direct DM Access: Stuck on a concept? Message me. We solve it.
      </p>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -15, // Reduced hover bounce
        scale: 1.02, // Slight scale-up for smooth effect
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="group/product h-96 w-[35rem] relative flex-shrink-0 "
    >
      <div className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  )
}
