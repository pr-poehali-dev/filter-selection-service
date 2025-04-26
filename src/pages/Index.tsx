import { useState } from "react";
import CarFilterPanel from "@/components/CarFilterPanel";
import FilteredPostsList from "@/components/FilteredPostsList";
import { posts } from "@/data/postsData";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [brandId, setBrandId] = useState<string | null>(null);
  const [modelId, setModelId] = useState<string | null>(null);
  const [generationId, setGenerationId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const handleFilterChange = (
    newBrandId: string | null, 
    newModelId: string | null, 
    newGenerationId: string | null
  ) => {
    setBrandId(newBrandId);
    setModelId(newModelId);
    setGenerationId(newGenerationId);
  };

  return (
    <div className={`container mx-auto py-8 ${isMobile ? 'px-4' : 'px-6'}`}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">АвтоБлог</h1>
        <p className="text-muted-foreground">
          Обзоры, сравнения и советы по выбору автомобилей
        </p>
      </div>
      
      <CarFilterPanel onFilterChange={handleFilterChange} />
      
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">
          {generationId ? "Статьи по выбранной модели" : 
           modelId ? "Статьи по выбранной модели" : 
           brandId ? "Статьи по выбранному бренду" : 
           "Все статьи"}
        </h2>
      </div>
      
      <FilteredPostsList 
        posts={posts} 
        brandId={brandId} 
        modelId={modelId} 
        generationId={generationId} 
      />
    </div>
  );
};

export default Index;
