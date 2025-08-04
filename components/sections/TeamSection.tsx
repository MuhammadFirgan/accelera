"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export function TeamSection() {
  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      bio: "AI visionary with 15+ years in machine learning and business strategy. Former Google AI researcher.",
      skills: ["AI Strategy", "Machine Learning", "Business Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-Founder",
      bio: "Full-stack architect specializing in scalable AI systems and cloud infrastructure. MIT graduate.",
      skills: ["System Architecture", "Cloud Computing", "AI Engineering"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Head of AI Research",
      bio: "PhD in Computer Science, published researcher in NLP and computer vision with 50+ research papers.",
      skills: ["Deep Learning", "NLP", "Computer Vision"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Data Scientist",
      bio: "Data science expert with expertise in predictive analytics and statistical modeling for enterprise clients.",
      skills: ["Data Science", "Analytics", "Statistical Modeling"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Kumar",
      role: "VP of Engineering",
      bio: "Software engineering leader with 12+ years building high-performance systems for Fortune 500 companies.",
      skills: ["Software Engineering", "DevOps", "Team Leadership"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Lisa Park",
      role: "Head of Client Success",
      bio: "Client relationship expert ensuring successful AI implementations and long-term partnership growth.",
      skills: ["Client Relations", "Project Management", "Business Strategy"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div id="team" className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-indigo-50/50 dark:from-purple-950/10 dark:via-pink-950/10 dark:to-indigo-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the Minds Behind 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">the Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse team of AI experts, engineers, and strategists brings together decades of experience 
            from leading technology companies and research institutions to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-800/60 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-3">{member.role}</p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.github && (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI innovation 
              and want to make a meaningful impact. Explore career opportunities with TechVision AI.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
              <Mail className="mr-2 h-5 w-5" />
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}