import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              As a junior software engineer, I'm passionate about creating efficient, scalable, and user-friendly applications. My journey in tech started with a curiosity for problem-solving and has evolved into a deep love for coding and software development.
            </p>
            <p className="text-lg mb-6">
              I specialize in full-stack development, with a focus on modern web technologies. My goal is to contribute to innovative projects that make a positive impact on people's lives.
            </p>
            <Button className="group bg-white text-black hover:bg-gray-200 transition-colors">
              Download Resume
              <FileDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;