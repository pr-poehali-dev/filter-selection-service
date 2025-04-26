import { useState } from "react";
import CarFilterPanel from "@/components/CarFilterPanel";
import FilteredPostsList from "@/components/FilteredPostsList";
import { carBrands } from "@/data/carData";
import { posts } from "@/data/postsData";

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedGeneration, setSelectedGeneration] = useState<string | null>(null);

  const handleFilterChange = (brand: string | null, model: string | null, generation: string | null) => {
    setSelectedBrand(brand);
    setSelectedModel(model);
    setSelectedGeneration(generation);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">АвтоБлог</h1>
          <p className="mt-2 text-primary-foreground/80">
            Всё об автомобилях: обзоры, сравнения, новости
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <h2 className="text-2xl font-semibold mb-4">Фильтры</h2>
              <CarFilterPanel brands={carBrands} onFilterChange={handleFilterChange} />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Статьи и обзоры</h2>
              <div className="text-sm text-muted-foreground">
                {selectedBrand || selectedModel || selectedGeneration 
                  ? "Показаны отфильтрованные результаты" 
                  : "Показаны все статьи"}
              </div>
            </div>
            
            <FilteredPostsList 
              posts={posts} 
              brandId={selectedBrand} 
              modelId={selectedModel} 
              generationId={selectedGeneration} 
            />
          </div>
        </div>
      </main>
      
      <footer className="bg-muted py-8 px-4 mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 АвтоБлог. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
