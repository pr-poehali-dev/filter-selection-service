import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown, ChevronUp, Image } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <Card className="w-full mb-4 overflow-hidden hover:shadow transition-shadow duration-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-semibold leading-tight">{post.title}</h3>
            <div className="text-sm text-muted-foreground mt-1">
              {new Date(post.date).toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 ml-2">
            <Badge variant="secondary">{post.brandName}</Badge>
            <Badge variant="outline">{post.modelName}</Badge>
            {post.generationName && (
              <Badge variant="outline" className="bg-accent/30">
                {post.generationName}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardContent className="pt-0 pb-2">
          <div className="line-clamp-2 text-sm">{post.description}</div>
          
          <div className={`mt-3 ${showFullImage ? "w-full" : "w-24 h-24 float-left mr-3 mb-2 relative overflow-hidden rounded-md"}`}>
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className={`${showFullImage ? "w-full rounded-md" : "w-full h-full object-cover"}`}
              onClick={() => setShowFullImage(!showFullImage)}
            />
            {!showFullImage && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center hover:bg-black/30 transition-colors cursor-pointer"
                   onClick={() => setShowFullImage(true)}>
                <Image size={18} className="text-white" />
              </div>
            )}
          </div>

          <CollapsibleContent>
            <div className="mt-4 text-sm">
              {post.description}
            </div>
          </CollapsibleContent>
        </CardContent>

        <CardFooter className="pt-0 pb-3 flex justify-between">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-1">
              {isOpen ? (
                <>
                  <ChevronUp size={16} />
                  <span>Свернуть</span>
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  <span>Подробнее</span>
                </>
              )}
            </Button>
          </CollapsibleTrigger>
          
          {showFullImage && (
            <Button variant="outline" size="sm" onClick={() => setShowFullImage(false)}>
              Скрыть изображение
            </Button>
          )}
        </CardFooter>
      </Collapsible>
    </Card>
  );
};

export default PostCard;
