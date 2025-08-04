"use client"

// import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Lightbulb, Target } from 'lucide-react';
import Image from 'next/image';
import AboutComponent from '../shared/AboutComponent';


export function AboutSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Cutting-edge artificial intelligence solutions that transform business operations and drive intelligent automation."
    },
    {
      icon: Code,
      title: "IT Consulting", 
      description: "Comprehensive technology consulting services to optimize your infrastructure and accelerate digital transformation."
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Innovative approaches to complex challenges, delivering custom solutions tailored to your unique business needs."
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Results-driven strategies that align technology initiatives with your business objectives and growth goals."
    }
  ];

  return (
    <div id="about" className="relative ">
      <div className="">
        <AboutComponent
          imageSrc="/images/about1.jpg"
          textTitle="Discover Our Story"
          textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
    ut corporis voluptates tempora hic, molestiae, tenetur deleniti
    commodi eius accusamus veniam voluptate mollitia, doloremque error
    natus doloribus omnis? Deleniti, assumenda!"
          isImageFirst={true}
          hasBackgroundImage={true}
        />

        {/* Second Section */}
        <AboutComponent
          imageSrc="/images/about2.jpg"
          textTitle="Our Mission and Vision"
          textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
    ut corporis voluptates tempora hic, molestiae, tenetur deleniti
    commodi eius accusamus veniam voluptate mollitia, doloremque error
    natus doloribus omnis? Deleniti, assumenda!"
          isImageFirst={false}
          hasBackgroundImage={true}
        />
      </div>
    </div>
  );
}