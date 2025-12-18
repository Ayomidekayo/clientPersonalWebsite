import { Star } from "lucide-react"
import { Card, CardContent } from "./ui/card"


const Testemony = () => {
  return (
    <div>
      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Why Harry’s Institute?</h2>
            <p className="mt-4 text-slate-600">
              Our experience and client testimonials speak volumes about the
              effectiveness of our brain-based academic coaching and training.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                message:
                  "Harry's Institute spent less than 12 hours with my daughter, and her result this time around was exceptional. This is the kind of result I have always desired. I gladly recommend Academic & Career Coach Harry Owanaba to parents and adults alike.",
                name: 'Mr. Ibulu Alfred',
                role: 'Parent (JSS1 Student)',
              },
              {
                message:
                  'You can’t imagine what Harry’s Institute has done to my academics. I am a living testimony. If you are struggling academically, rush down to Harry’s Institute.',
                name: 'Mrs. Ogechi Ezejimofor',
                role: '300 Level Nursing Student, Port Harcourt',
              },
              {
                message:
                  'The study habits training helped me resolve challenges with a difficult child who hated reading. I applied what I learned, and the impact was immediate and powerful.',
                name: 'Temmy',
                role: 'Academic Tutor, Lagos',
              },
              {
                message:
                  'Even free trainings from Harry’s Institute deliver massive value. I took a note-taking and speed reading training, and the impact on my focus has been tremendous.',
                name: 'Princess NG Okpara',
                role: 'Training Participant',
              },
              {
                message:
                  'I am deeply grateful for this class. I learned something that will make me better in my career and life. This value is priceless.',
                name: 'Anonymous',
                role: 'Online Training Participant',
              },
              {
                message:
                  'This training could easily be worth millions, but the value delivered was beyond expectations. Thank you for the wisdom and impact.',
                name: 'Anonymous',
                role: 'Online Participant',
              },
            ].map((t, i) => (
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
    hover:scale-[1.02]
    hover:shadow-xl
    hover:border-indigo-200
  "
>
  <CardContent className="p-6 flex flex-col h-full">
    {/* Stars */}
    <div className="flex gap-1 text-yellow-500 transition-transform duration-300 group-hover:scale-105">
      {[...Array(5)].map((_, idx) => (
        <Star
          key={idx}
          className="
            h-4 w-4
            fill-yellow-500
            text-yellow-500
            transition-all
            duration-300
            group-hover:drop-shadow-sm
          "
        />
      ))}
    </div>

    {/* Testimonial text */}
    <p className="mt-4 text-sm text-slate-600 flex-grow transition-colors duration-300 group-hover:text-slate-700">
      “{t.message}”
    </p>

    {/* Author */}
    <div className="mt-6 border-t pt-4 transition-colors duration-300 group-hover:border-indigo-100">
      <p className="text-sm font-semibold">{t.name}</p>
      <p className="text-xs text-slate-500">{t.role}</p>
    </div>
  </CardContent>
</Card>

            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testemony
