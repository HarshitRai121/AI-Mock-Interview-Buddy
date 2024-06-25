import React from 'react'

function Section1() {
  return (
    <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">How it Works</h2>

      <p className="mt-4 text-gray-300">
      Discover how AI Mock Interview Buddy simplifies your interview preparation process and helps you secure your dream job.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <a
        className="bg-pink-700 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Sign Up</h2>

        <p className="mt-1 text-sm text-gray-300">
        Create your account on AI Mock Interview Buddy and gain access to a personalized interview preparation platform. Customize your practice sessions based on your industry or job role for targeted preparation.
        </p>
      </a>

      <a
        className="bg-pink-700 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Tailor Your Scenarios</h2>

        <p className="mt-1 text-sm text-gray-300">
        Tailor your interview scenarios to match your industry or job role, ensuring that your practice sessions are relevant and effective. Practice answering common interview questions in a realistic virtual interview setting.
        </p>
      </a>

      <a
        className="bg-pink-700 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Practice and Analyze</h2>

        <p className="mt-1 text-sm text-gray-300">
        Engage in realistic mock interviews using our cutting-edge AI technology. Receive instant feedback on your answers, including tips for improvement. Track your progress with detailed performance analytics and insights to identify areas for improvement and excel in your interviews.
        </p>
      </a>

    </div>

  </div>

  <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
          <p className="mb-4">Join thousands of successful job seekers who have used AI Mock Interview Buddy to prepare and excel in their interviews. </p>
          {/* <a href="#" className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">Sign Up for Free Trial</a> */}
        </div>
  </footer>
</section>
  )
}

export default Section1
