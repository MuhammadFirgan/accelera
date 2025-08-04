

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

  

  return (
    <div id="vision" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20 relative">
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

        <div className="absolute top-10 right-0 w-64 h-64 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div>
          
          <div className='relative'>
            <TimelineItems />

          </div>
      
          
        </div>
      </div>
    </div>
  );
}