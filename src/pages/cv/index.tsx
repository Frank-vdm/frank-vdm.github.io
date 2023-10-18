import React from 'react'
import { ContentView } from '~/components/ContentView'
import { Space } from '~/components/Space'
import { Subtitle } from '~/components/Typography'
import { Paragraph } from '~/components/Typography/Paragraph'
import { Section } from '~/content/Section'
import { SideBarLayout } from '~/layouts/SideBarLayout'

export const CurriculumVitae: React.FC = () => {
  return (
    <SideBarLayout>
      <ContentView style={{ maxWidth: '800px' }}>
        <Space />
        <Subtitle>Profile</Subtitle>
        <Paragraph>
          Driven by the belief that technological advancement shapes our future,
          I am perpetually engaged in learning the latest technologies and
          programming languages. I pride myself on my commitment to continuous
          self-improvement, underpinned by values of honour, dignity, and
          unwavering integrity. My passion lies in deciphering complex
          technological challenges and understanding the intricacies behind
          them. Having lived across diverse countries, I bring a unique global
          perspective to problem-solving and am adept at navigating
          multicultural environments. At the heart of my professional endeavors
          is a commitment to delivering high-quality and precise work, ensuring
          I am a valuable asset to any team.
        </Paragraph>
        <Subtitle>Education</Subtitle>
        <Section
          title={'BACHELOR OF COMPUTING'}
          institution={'THE BELGIUM CAMPUS'}
          startDate="2008"
          endDate="2014"
        >
          <ul>
            <li>
              Affiliated with KHLim (Limburg Catholic University College) in
              Belgium.
            </li>
            <li>
              Accredited by the Council of Higher Education of South Africa,
              rated NQF 8 by SAQA.
            </li>
            <li>
              Comprehensive course covering basics of computing, software
              development, web development, database development, and
              networking, culminating in an applied software engineering module
              simulating real-world scenarios.
            </li>
          </ul>
        </Section>
        <Section
          title={'HIGH SCHOOL DIPLOMA'}
          institution={'PRETORIA BOYS HIGH SCHOOL'}
          startDate="2002"
          endDate="2007"
        >
          <ul>
            <li>
              Subjects: English, Afrikaans, Science, Mathematics, Woodwork,
              Computer Science.
            </li>
            <li>
              Extra-curricular: Fencing (received Full Colours), Boxing,
              Gymnastics, Bridge Club, School Farm Support Group (environment
              conservation).
            </li>
          </ul>
        </Section>
        <Space size={30} />
        <Subtitle>Experience</Subtitle>
        <Section
          title="SENIOR SOFTWARE ENGINEER"
          institution="CINAPSE"
          location="Los Angeles, California, USA (Remote)"
          startDate="Jun 2021"
          endDate="Present"
        >
          <Space size={30} />
          Elevating Developer Experience: Transitioned mobile app from Expo
          classic to Expo EAS, enhancing developer experience and ensuring
          seamless CI/CD pipeline integrations. Trailblazing in Beta: Pioneered
          a state-of-the-art collaborative scheduling platform. Though still in
          its beta phase, it boasts around 30 users, with one already
          incorporating it into their production environment with significant
          potential to rival industry standards. Performance Enhancement:
          Addressed critical performance issues in our system. Through targeted
          optimization efforts, I transformed an erstwhile sluggish platform
          into a high-performance tool, with negligible latency, ensuring a
          smoother user experience in NextJS with Automerge CRDT. Algorithmic
          Solutions: Developed cutting-edge algorithms that empower our
          platform. This includes a multi-drag and drop sorting mechanism for
          components and a multi-tiered complex sorting and filtering algorithm
          that caters to nuanced needs of our consumers. End-to-End Leadership:
          Led comprehensive product development efforts, using technologies like
          React, React-native, NextJS, and NestJS. My role spanned scoping,
          specking, planning, prioritizing, and deploying, ensuring that
          products aligned perfectly with intricate business requirements.
          <Space size={20} />
        </Section>
        <Section
          title="MOBILE SOFTWARE ENGINEER"
          institution="ifiniti.io"
          location="Pretoria, Gauteng, South Africa (Hybrid)"
          startDate="Mar 2019"
          endDate="Jun 2021"
        >
          <Space size={30} />
          Offline-First Design: Architected and specked an offline-first mobile
          application, enabling continuous user workflow progression even
          without internet connectivity. This resilient design ensures seamless
          sync with advanced conflict resolution upon reconnection, using Azure
          IOT for robust communication. Technical Leadership: Played an
          instrumental role in both the design and execution of a sophisticated
          system, ensuring a smooth user experience. Startup Agility: Thrived in
          a dynamic startup environment, adapting to its unique challenges and
          pace, and making pivotal contributions to the product roadmap.
          <Space size={20} />
        </Section>
        <Section
          title="JUNIOR SOFTWARE DEVELOPER"
          institution="DREAMTEC INNOVATIONS"
          location="Pretoria, Gauteng, South Africa (Hybrid)"
          startDate="Nov 2016"
          endDate="Feb 2019"
        >
          <Space size={30} />
          Led end-to-end feature development using C# and AngularJS (v1). •
          Crafted a keychain access module for enhanced system security. •
          Revamped email and SMS engines, infusing them with a more "human"
          touch improved user engagement. • Transitioned to mobile app
          development through optimisation and UX enhancements to the existing
          mobile app in Xamarin
          <Space size={20} />
        </Section>
        <Section
          title="CONVERSATIONAL ENGLISH TUTOR"
          institution="EC英会話ｘNOVA"
          location="Hakodate, Hokkaido, Japan (on-site)"
          startDate="Feb 2016"
          endDate="Sep 2016"
        >
          <Space size={30} />
          I was a conversational English teacher, I taught classes of up to 4
          adults of children of the same skill level as well as evaluating the
          process of my students. I ultimately had to return back to South
          Africa for family matters.
          <Space size={20} />
        </Section>
        <Section
          title="CIRCUS INSTRUCTOR"
          institution="CLUB MED"
          location="Phuket, Thailand & Kuantan, Malaysia (on-site)"
          startDate="Jun 2014"
          endDate="Oct 2015"
        >
          <Space size={30} />
          I instructed and demonstrated arial acrobatics on the flying trapeze
          to guests of the resort and also performed acrobatic circus arts in
          the evening shows and a daily basis. I returned home after the end of
          my contract.
          <Space size={20} />
        </Section>
        <Section
          title="INTERN SOFTWARE DEVELOPER"
          institution="SIEMENS"
          location="Brussels, Belgium (on-site)"
          startDate="Mar 2013"
          endDate="Mar 2014"
        >
          <Space size={30} />
          I was an intern in the R&D department where I worked directly with
          corporate clients researching and implementing requested features and
          extensions.
          <Space size={20} />
        </Section>
        <Space size={30} />
        {/* <Subtitle>Certifications</Subtitle> */}
      </ContentView>
    </SideBarLayout>
  )
}
