"use client"

// import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Lightbulb, Target } from 'lucide-react';
import Image from 'next/image';


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
    <div id="about" className="relative">
      <div className="">
        <div className="flex flex-col justify-center items-center w-full md:flex-row">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-64 h-64 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse hidden md:block"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse delay-1000 hidden md:block"></div>
            </div>
          <Image src="/images/about1.jpg" width={200} height={200} alt='about image' className='w-full md:w-1/2 h-[400px] aspect-video order-1 md:order-1'/>
          <div className='flex flex-col justify-center items-start gap-4 md:w-1/2 p-7 md:pl-5 order-2 md:order-2'>
            <h1 className='text-4xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>Give me some heading text</h1>
            <p className='leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ut corporis voluptates tempora hic, molestiae, tenetur deleniti commodi eius accusamus veniam voluptate mollitia, doloremque error natus doloribus omnis? Deleniti, assumenda!</p>
          </div>
          
        </div>
        
        <div className="flex flex-col justify-center items-center w-full bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20 md:flex-row">
        <Image src="/images/about2.jpg" width={200} height={200} alt='about image' className='w-full md:w-1/2 h-[400px] aspect-video order-1 md:order-2'/>  
          <div className='flex flex-col justify-center items-start md:pl-5 gap-4 md:w-1/2 p-7 order-2 md:order-1'>
            <h1 className='text-4xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>Give me some heading text</h1>
            <p className='leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ut corporis voluptates tempora hic, molestiae, tenetur deleniti commodi eius accusamus veniam voluptate mollitia, doloremque error natus doloribus omnis? Deleniti, assumenda!</p>
          </div>
          
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })} */}
        </div>

        {/* <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Founder's Vision</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over a decade of experience in Information Systems and AI development, 
                our founder envisioned a company that bridges the gap between cutting-edge 
                technology and practical business solutions. TechVision AI was born from 
                the belief that artificial intelligence should be accessible, ethical, 
                and transformative for businesses of all sizes.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AI/ML Expert</Badge>
                <Badge variant="secondary">Systems Architecture</Badge>
                <Badge variant="secondary">Digital Transformation</Badge>
                <Badge variant="secondary">Innovation Leadership</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">CEO</span>
                    </div>
                    <h4 className="text-xl font-semibold">John Smith</h4>
                    <p className="text-muted-foreground text-sm">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}