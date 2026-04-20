"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  "Meticulous attention to every detail",
  "Premium products and equipment",
  "Mobile service available - we come to you",
  "Hassle-free booking experience",
  "Satisfaction guaranteed",
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="aspect-[4/3] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/images/detail-process.jpg"
                alt="Professional car detailing process"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg shadow-xl border border-border max-w-xs hidden md:block"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  5
                </motion.div>
                <div>
                  <p className="font-semibold text-foreground">5-Star Rating</p>
                  <p className="text-sm text-muted-foreground">Verified on Google</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Element */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              className="text-primary font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Us
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Mobile Car Detailing Excellence
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover the pinnacle of automotive care at Nex-Gen AutoDetail. With an unwavering 
              commitment to perfection, we set the standard for meticulous craftsmanship and 
              unparalleled customer service.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              We detail every nook and cranny—no detail is too small for us. We meticulously clean 
              hard-to-reach areas, such as air vents and every single crevice, ensuring a thorough 
              and complete transformation of your vehicle.
            </motion.p>

            {/* Feature List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  </motion.div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
