"use client"
import { SquareCheckBig } from 'lucide-react'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs';

function Hero() {
  
  const { isSignedIn } = useUser();
  const router = useRouter();
  const featuresRef = useRef(null);

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    } else {
      router.push('/sign-in');
    }
  }

  const handleLearnMore = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  
  return (
    <section className="bg-gray-900 text-white">
  <div>
      <header className="bg-gray-900 text-white py-8">
         <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
  <div className="mx-auto max-w-3xl text-center">
    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
      Elevate Your Interviews. <br />
      Master Your Future.
    </h1>

    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      Are you ready to stand out in your next interview? AI Mock Interview Buddy brings you cutting-edge technology to practice and refine your interview skills. With realistic simulations and personalized feedback, ace your interviews and unlock your dream career.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <a
        className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:cursor-pointer hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
        onClick={handleGetStarted}
      >
        Get Started
      </a>

      <a
        className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium hover:cursor-pointer text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
        onClick={handleLearnMore}
      >
        Learn More
      </a>
    </div>
  </div>
</div>




      </header>

      <section ref={featuresRef} className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="block rounded-xl border border-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <h3 className="text-xl font-semibold mb-4">Mock Interviews</h3>
              <p>Practice answering common interview questions in a realistic virtual interview setting.</p>
            </div>
            <div className="block rounded-xl border border-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <h3 className="text-xl font-semibold mb-4">Instant Feedback</h3>
              <p>Receive instant feedback on your answers, including tips for improvement.</p>
            </div>
            <div className="block rounded-xl border border-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <h3 className="text-xl font-semibold mb-4">Customizable Scenarios</h3>
              <p>Tailor your practice sessions to match the specific industry or job role you're targeting.</p>
            </div>
            <div className="block rounded-xl border border-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <h3 className="text-xl font-semibold mb-4">Performance Analytics</h3>
              <p>Track your progress over time with detailed performance analytics and insights.</p>
            </div>
            <div className="block rounded-xl border border-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
              <p>Practice anytime, anywhere, at your own pace.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">Why Choose AI Mock Interview Buddy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div >
              <h3 className="text-xl font-semibold mb-4 flex gap-2"><SquareCheckBig />Realistic Simulations</h3>
              <p>Our AI replicates real interview dynamics, from tone of voice to follow-up questions, ensuring a true-to-life experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex gap-2"><SquareCheckBig />Personalized Learning</h3>
              <p>Get targeted feedback and recommendations based on your strengths and areas for improvement.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex gap-2"><SquareCheckBig />Convenience</h3>
              <p>No need to schedule mock interviews with human interviewers; practice whenever it suits you.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex gap-2"><SquareCheckBig />Competitive Edge</h3>
              <p>Stand out from other candidates by showcasing your polished interview skills.</p>
            </div>
          </div>
        </div>
      </section>
  
    </div>

</section>


  )
}

export default Hero
