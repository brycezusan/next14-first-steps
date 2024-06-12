import type { Metadata } from "next"

export const metadata : Metadata = {
  title: "About Page",
  description: "About Seo Metadata",
  keywords: ["About Page",'Next.js', 'Seo'],
}
export default function About() {
  return (
    <section className="flex flex-col items-center p-4">
      <h1 className="text-5xl text-center text-slate-800 py-4">About Page</h1>
      <h2>About</h2>
    </section>
  )
}
