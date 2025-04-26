import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Brand, Model, Generation, getBrands, getModels, getGenerations } from "@/data/carData";
import { useIsMobile } from "@/hooks/use-mobile";

interface CarFilterPanelProps {
  onFilterChange: (brandId: string | null, modelId: string | null, generationId: string | null) => void;
}

const CarFilterPanel = ({ onFilterChange }: CarFilterPanelProps) => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [generations, setGenerations] = useState<Generation[]>([]);
  
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [selectedGenerationId, setSelectedGenerationId] = useState<string | null>(null);
  
  const isMobile = useIsMobile();

  // Load brands on component mount
  useEffect(() => {
    setBrands(getBrands());
  }, []);

  // Update models when brand changes
  useEffect(() => {
    if (selectedBrandId) {
      setModels(getModels(selectedBrandId));
      setSelectedModelId(null); // Reset model selection
      setSelectedGenerationId(null); // Reset generation selection
    } else {
      setModels([]);
      setSelectedModelId(null);
    }
    
    onFilterChange(selectedBrandId, null, null);
  }, [selectedBrandId, onFilterChange]);

  // Update generations when model changes
  useEffect(() => {
    if (selectedModelId) {
      setGenerations(getGenerations(selectedModelId));
      setSelectedGenerationId(null); // Reset generation selection
    } else {
      setGenerations([]);
      setSelectedGenerationId(null);
    }
    
    onFilterChange(selectedBrandId, selectedModelId, null);
  }, [selectedModelId, selectedBrandId, onFilterChange]);

  // Notify parent component when generation changes
  useEffect(() => {
    onFilterChange(selectedBrandId, selectedModelId, selectedGenerationId);
  }, [selectedGenerationId, selectedBrandId, selectedModelId, onFilterChange]);

  const handleBrandChange = (value: string) => {
    setSelectedBrandId(value);
  };

  const handleModelChange = (value: string) => {
    setSelectedModelId(value);
  };

  const handleGenerationChange = (value: string) => {
    setSelectedGenerationId(value);
  };

  const handleReset = () => {
    setSelectedBrandId(null);
    setSelectedModelId(null);
    setSelectedGenerationId(null);
    onFilterChange(null, null, null);
  };

  return (
    <div className={`bg-card border rounded-lg shadow-sm p-4 mb-6 ${isMobile ? 'flex flex-col gap-4' : 'grid grid-cols-3 gap-4'}`}>
      <div className="space-y-2">
        <Label htmlFor="brand">Марка автомобиля</Label>
        <Select value={selectedBrandId || ""} onValueChange={handleBrandChange}>
          <SelectTrigger id="brand">
            <SelectValue placeholder="Выберите марку" />
          </SelectTrigger>
          <SelectContent>
            {brands.map((brand) => (
              <SelectItem key={brand.id} value={brand.id}>
                {brand.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="model">Модель</Label>
        <Select 
          value={selectedModelId || ""} 
          onValueChange={handleModelChange}
          disabled={!selectedBrandId}
        >
          <SelectTrigger id="model">
            <SelectValue placeholder={selectedBrandId ? "Выберите модель" : "Сначала выберите марку"} />
          </SelectTrigger>
          <SelectContent>
            {models.map((model) => (
              <SelectItem key={model.id} value={model.id}>
                {model.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="generation">Поколение</Label>
        <Select 
          value={selectedGenerationId || ""} 
          onValueChange={handleGenerationChange}
          disabled={!selectedModelId}
        >
          <SelectTrigger id="generation">
            <SelectValue placeholder={selectedModelId ? "Выберите поколение" : "Сначала выберите модель"} />
          </SelectTrigger>
          <SelectContent>
            {generations.map((generation) => (
              <SelectItem key={generation.id} value={generation.id}>
                {generation.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CarFilterPanel;
