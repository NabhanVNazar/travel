import React from 'react'
import Header from './components/header'
import BlogSection from './components/blog_section'
import AboutSection from './components/about_section'
import Footer from './components/footer'

export default function App() {
  return (
    <>
      <Header />
      <AboutSection />
      <BlogSection />
      <Footer />
    </>
  )
}
