import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown, ChevronUp, Image, ArrowLeft, ArrowRight, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export interface Post {
  id: string;
  title: string;
  description: string;
  images: string[];
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useIsMobile();

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex < post.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(post.images.length - 1);
    }
  };

  const handleImageClick = () => {
    setShowFullImage(!showFullImage);
  };

  return (
    <Card className="w-full mb-4 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <div className={`flex ${isMobile ? 'flex-col gap-2' : 'justify-between items-start'}`}>
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
          <div className={`flex flex-wrap gap-2 ${isMobile ? '' : 'ml-2'}`}>
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
          
          {showFullImage ? (
            <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-4">
              <div className="relative w-full max-w-4xl">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0 z-10 text-white bg-black/50 hover:bg-black/70"
                  onClick={() => setShowFullImage(false)}
                >
                  <X size={24} />
                </Button>
                
                <div className="relative">
                  <img 
                    src={post.images[currentImageIndex]} 
                    alt={`${post.title} - изображение ${currentImageIndex + 1}`} 
                    className="w-full h-auto rounded-md max-h-[80vh] object-contain"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 flex justify-center p-2 bg-black/30 text-white text-sm rounded-b-md">
                    {currentImageIndex + 1} / {post.images.length}
                  </div>
                  
                  {post.images.length > 1 && (
                    <>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full"
                        onClick={handlePrevImage}
                      >
                        <ArrowLeft size={24} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full"
                        onClick={handleNextImage}
                      >
                        <ArrowRight size={24} />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className={`mt-3 ${isMobile ? 'flex overflow-x-auto gap-2 py-2' : 'flex gap-2 mt-3'}`}>
              {post.images.map((image, index) => (
                <div 
                  key={index}
                  className={`${isMobile ? 'flex-shrink-0 w-24 h-24' : 'w-24 h-24'} relative overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity`}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setShowFullImage(true);
                  }}
                >
                  <img 
                    src={image} 
                    alt={`${post.title} - изображение ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center hover:bg-black/30 transition-colors">
                    <Image size={18} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          )}

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
        </CardFooter>
      </Collapsible>
    </Card>
  );
};

export default PostCard;
