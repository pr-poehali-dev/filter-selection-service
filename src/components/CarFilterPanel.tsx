import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// Типы данных для автомобилей
export interface CarGeneration {
  id: string;
  name: string;
  years: string;
}

export interface CarModel {
  id: string;
  name: string;
  generations: CarGeneration[];
}

export interface CarBrand {
  id: string;
  name: string;
  models: CarModel[];
}

interface CarFilterPanelProps {
  brands: CarBrand[];
  onFilterChange: (brand: string | null, model: string | null, generation: string | null) => void;
}

const CarFilterPanel = ({ brands, onFilterChange }: CarFilterPanelProps) => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedGeneration, setSelectedGeneration] = useState<string | null>(null);
  
  const [availableModels, setAvailableModels] = useState<CarModel[]>([]);
  const [availableGenerations, setAvailableGenerations] = useState<CarGeneration[]>([]);

  // Обновляем доступные модели при выборе бренда
  useEffect(() => {
    if (selectedBrand) {
      const brand = brands.find(b => b.id === selectedBrand);
      setAvailableModels(brand?.models || []);
    } else {
      setAvailableModels([]);
    }
    setSelectedModel(null);
    setSelectedGeneration(null);
  }, [selectedBrand, brands]);

  // Обновляем доступные поколения при выборе модели
  useEffect(() => {
    if (selectedModel) {
      const brand = brands.find(b => b.id === selectedBrand);
      const model = brand?.models.find(m => m.id === selectedModel);
      setAvailableGenerations(model?.generations || []);
    } else {
      setAvailableGenerations([]);
    }
    setSelectedGeneration(null);
  }, [selectedModel, selectedBrand, brands]);

  // Уведомляем родительский компонент об изменении фильтров
  useEffect(() => {
    onFilterChange(selectedBrand, selectedModel, selectedGeneration);
  }, [selectedBrand, selectedModel, selectedGeneration, onFilterChange]);

  return (
    <div className="bg-sidebar p-4 rounded-lg shadow-md space-y-4">
      <div>
        <Label htmlFor="brand-select" className="block mb-2 text-sm font-medium">
          Марка автомобиля
        </Label>
        <Select
          value={selectedBrand || ""}
          onValueChange={(value) => setSelectedBrand(value || null)}
        >
          <SelectTrigger id="brand-select" className="w-full">
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

      <div>
        <Label htmlFor="model-select" className="block mb-2 text-sm font-medium">
          Модель
        </Label>
        <Select
          value={selectedModel || ""}
          onValueChange={(value) => setSelectedModel(value || null)}
          disabled={!selectedBrand}
        >
          <SelectTrigger id="model-select" className="w-full">
            <SelectValue placeholder={selectedBrand ? "Выберите модель" : "Сначала выберите марку"} />
          </SelectTrigger>
          <SelectContent>
            {availableModels.map((model) => (
              <SelectItem key={model.id} value={model.id}>
                {model.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="generation-select" className="block mb-2 text-sm font-medium">
          Поколение
        </Label>
        <Select
          value={selectedGeneration || ""}
          onValueChange={(value) => setSelectedGeneration(value || null)}
          disabled={!selectedModel}
        >
          <SelectTrigger id="generation-select" className="w-full">
            <SelectValue placeholder={selectedModel ? "Выберите поколение" : "Сначала выберите модель"} />
          </SelectTrigger>
          <SelectContent>
            {availableGenerations.map((gen) => (
              <SelectItem key={gen.id} value={gen.id}>
                {gen.name} ({gen.years})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CarFilterPanel;
