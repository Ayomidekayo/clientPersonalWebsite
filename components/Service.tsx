"use client"

import { BookOpen, GraduationCap, Mic, Zap } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const services = [
  {
    icon: Zap,
    title: "Speed Reading",
    desc: "Read faster with deeper comprehension and long-term retention.",
  },
  {
    icon: GraduationCap,
    title: "Academic Coaching",
    desc: "Personalized learning systems that improve grades and confidence.",
  },
  {
    icon: BookOpen,
    title: "Training & Authorship",
    desc: "Books and transformational programs that reshape learning habits.",
  },
  {
    icon: Mic,
    title: "Public Speaking",
    desc: "High-impact talks for schools, institutions, and organizations.",
  },
]

const Service = () => {
  return (
    <section id="services" className="px-6 py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">What I Do</h2>
          <p className="mt-4 text-slate-600">
            I help students and professionals unlock their full academic and
            cognitive potential through proven, brain-based systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <Card
              key={i}
              className="
                group
                rounded-2xl
                border
                bg-white
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-indigo-200
              "
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-indigo-50
                    transition-all
                    duration-300
                    group-hover:bg-indigo-600
                    group-hover:scale-110
                  "
                >
                  <item.icon className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-semibold text-lg">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
