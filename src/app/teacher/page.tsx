import React from 'react';
import TeacherHero from '@/components/teacher/TeacherHero';
import TeacherAdvisors from '@/components/teacher/TeacherAdvisors';
import TeacherValue from '@/components/teacher/TeacherValue';
import TeacherPeople from '@/components/teacher/TeacherPeople';
import TeacherStep from '@/components/teacher/TeacherStep';
import TeacherCTA from '@/components/teacher/TeacherCTA';
import FadeIn from '@/components/ui/FadeIn';


export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
        <TeacherHero />

        <FadeIn>
          <TeacherAdvisors />
        </FadeIn>

        <FadeIn>
          <TeacherValue />
        </FadeIn>

        <FadeIn>
          <TeacherPeople />
        </FadeIn>

        <FadeIn>
          <TeacherStep />
        </FadeIn>

        <FadeIn>
          <TeacherCTA />
        </FadeIn>
    </div>
  );
}