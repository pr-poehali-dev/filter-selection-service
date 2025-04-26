import { useState, useEffect } from "react";
import PostCard, { Post } from "./PostCard";

interface FilteredPostsListProps {
  posts: Post[];
  brandId: string | null;
  modelId: string | null;
  generationId: string | null;
}

const FilteredPostsList = ({ 
  posts, 
  brandId, 
  modelId, 
  generationId 
}: FilteredPostsListProps) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    let result = posts;
    
    if (brandId) {
      result = result.filter(post => post.brandId === brandId);
    }
    
    if (modelId) {
      result = result.filter(post => post.modelId === modelId);
    }
    
    if (generationId) {
      result = result.filter(post => post.generationId === generationId);
    }
    
    setFilteredPosts(result);
  }, [posts, brandId, modelId, generationId]);

  if (filteredPosts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-accent/10 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Нет постов по выбранным критериям</h3>
        <p className="text-muted-foreground">
          Попробуйте изменить параметры фильтров или выбрать другую модель
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default FilteredPostsList;
