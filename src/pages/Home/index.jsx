import React from 'react'
import MainSection from './features/MainSection'
import Work from './features/Work'
import WhyJoinKiwi from './features/WhyJoinKiwi'
import SafetySection from './features/SafetySection'
import TeenWorksSection from './features/TeenWorksSection'
import JobPostingAccess from './features/JobPostingAccess'
import FAQSection from './features/FAQSection'
import SuccessStories from './features/SuccessStories'
import BlogSection from './features/BlogSection'

const Home = () => {
  return (
    <div>
        <MainSection/>
        <Work/>
        <WhyJoinKiwi/>
        <SafetySection/>
        <TeenWorksSection/>
        <JobPostingAccess/>
        <FAQSection/>
        <SuccessStories/>
        <BlogSection/>
    </div>
  )
}

export default Home