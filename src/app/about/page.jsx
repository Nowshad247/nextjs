
import React from 'react'
export default function AboutPage() {
  return (
   <div class="relative h-screen">
  <div class="absolute inset-0">
    <div class="relative h-full w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
    <div></div>
  </div>
  </div>
  <div class="relative z-10 flex h-full flex-col items-center justify-center px-4">
    <div class="max-w-3xl text-center">
      <h1 class="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
        Your Next Great
        <span class="text-sky-900">Project</span>
      </h1>
      <p class="mx-auto mb-8 max-w-2xl text-lg text-slate-700">
        Build modern and beautiful websites with this collection of stunning background patterns. 
        Perfect for landing pages, apps, and dashboards.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <button class="rounded-lg px-6 py-3 font-medium bg-sky-900 text-white hover:bg-sky-800">
          Get Started
        </button>
        <button class="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>
  )
}
