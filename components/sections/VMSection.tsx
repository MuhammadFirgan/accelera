

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Target, Heart, Zap, Brain, Users, Rocket, Shield, Lightbulb } from 'lucide-react';
import TimelineItems from '../shared/TimelineItems';


export function VisionMissionSection() {
  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace emerging technologies to deliver cutting-edge solutions."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering exceptional value and measurable results."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client service."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Open communication and honest partnerships form the foundation of our client relationships."
    }
  ];

  const missions = [
    {
      title: "Innovative AI Solutions",
      description: "Pioneering cutting-edge artificial intelligence technologies that transform business operations and drive digital transformation across industries.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Strategic IT Consulting",
      description: "Delivering comprehensive IT consulting services that align technology infrastructure with business objectives, ensuring scalable and sustainable growth.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Client-Centric Excellence",
      description: "Building lasting partnerships through personalized service, understanding unique business needs, and delivering solutions that exceed expectations.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Market Leadership",
      description: "Establishing ourselves as the premier choice for organizations seeking transformative technology solutions and strategic digital guidance.",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "Cybersecurity Excellence",
      description: "Implementing robust security frameworks and best practices to protect digital assets while enabling secure business innovation.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Continuous Innovation",
      description: "Fostering a culture of research and development, staying ahead of technology trends to deliver next-generation solutions.",
      icon: <Lightbulb className="w-8 h-8" />
    }
  ]

  return (
    <div id="vision" className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-indigo-50/50 dark:from-purple-950/10 dark:via-pink-950/10 dark:to-indigo-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
            Vision & Mission
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Purpose & 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Direction</span>
          </h2>
        </div>



        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-800/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the global leader in AI-driven business transformation, creating a world where 
                intelligent technology seamlessly integrates with human creativity to solve the most 
                complex challenges facing organizations today. We envision a future where every business, 
                regardless of size, has access to enterprise-grade AI solutions that drive innovation, 
                efficiency, and sustainable growth.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-800/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses through innovative AI solutions and strategic IT consulting that 
                drive measurable results. We are committed to delivering ethical, scalable, and 
                user-centric technology solutions while fostering long-term partnerships built on 
                trust, transparency, and shared success. Our mission is to make advanced AI accessible 
                and impactful for organizations ready to embrace the future.
              </p>
            </CardContent>
          </Card>
        </div> */}

        <div>
          
          <div className='relative'>
            <TimelineItems />
          </div>
      
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-sm hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}