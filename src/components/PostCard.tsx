import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, ChevronUp, Calendar, User } from "lucide-react";

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  brandId: string;
  modelId: string;
  generationId: string;
  images: string[];
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{post.title}</CardTitle>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {post.author}
          </span>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className={`${isMobile ? 'flex flex-col gap-4' : 'flex gap-6'}`}>
            {/* Изображения (горизонтальная прокрутка для мобильных) */}
            <div className={`${isMobile ? 'w-full' : 'w-1/3'}`}>
              <div className={`${isMobile 
                ? 'flex overflow-x-auto gap-2 pb-2 snap-x' 
                : 'grid grid-cols-1 gap-2'}`}>
                {post.images.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div 
                        className={`${isMobile 
                          ? 'min-w-[120px] max-w-[120px] h-[90px] snap-start' 
                          : 'w-full h-24'} 
                          cursor-pointer rounded-md overflow-hidden`}
                        onClick={() => setSelectedImage(image)}
                      >
                        <img 
                          src={image} 
                          alt={`Изображение ${index + 1} для ${post.title}`}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="w-full pt-6">
                        <img 
                          src={image} 
                          alt={`Увеличенное изображение ${index + 1} для ${post.title}`}
                          className="w-full h-auto max-h-[80vh] object-contain rounded-md"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>

            {/* Текст поста */}
            <div className={`${isMobile ? 'w-full' : 'w-2/3'}`}>
              <div className="line-clamp-3 mb-2">
                {post.content.substring(0, 180)}
                {post.content.length > 180 && "..."}
              </div>
              
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="px-0">
                  {isOpen ? (
                    <span className="flex items-center gap-1 text-primary">
                      Свернуть <ChevronUp className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-primary">
                      Читать полностью <ChevronDown className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
          
          <CollapsibleContent className="mt-4 pt-2 border-t">
            <p className="text-base">{post.content}</p>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default PostCard;
