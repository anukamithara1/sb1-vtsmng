import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'My Journey into Software Engineering',
    description: 'Reflecting on the challenges and triumphs of becoming a junior software engineer.',
    date: '2024-03-15',
    tags: ['Career', 'Personal Growth'],
  },
  {
    id: 2,
    title: 'Understanding React Hooks: A Beginner\'s Guide',
    description: 'An introduction to React Hooks and how they can simplify your code.',
    date: '2024-04-02',
    tags: ['React', 'Web Development'],
  },
  {
    id: 3,
    title: 'The Importance of Clean Code',
    description: 'Why writing clean, maintainable code is crucial for every developer.',
    date: '2024-04-20',
    tags: ['Best Practices', 'Coding'],
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="flex items-center mt-2">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="text-primary hover:underline">
            Read more articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;