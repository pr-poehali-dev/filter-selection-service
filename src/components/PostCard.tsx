import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  brandId: string;
  brandName: string;
  modelId: string;
  modelName: string;
  generationId: string | null;
  generationName: string | null;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="secondary">{post.brandName}</Badge>
          <Badge variant="outline">{post.modelName}</Badge>
          {post.generationName && (
            <Badge variant="outline" className="bg-accent text-accent-foreground">
              {post.generationName}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{post.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="line-clamp-3 text-sm">{post.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="default" className="w-full">
          Читать полностью
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
