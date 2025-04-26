import { CarBrand } from "@/components/CarFilterPanel";

export const carBrands: CarBrand[] = [
  {
    id: "toyota",
    name: "Toyota",
    models: [
      {
        id: "camry",
        name: "Camry",
        generations: [
          { id: "camry-xv70", name: "XV70", years: "2017-2022" },
          { id: "camry-xv60", name: "XV60", years: "2011-2017" },
          { id: "camry-xv50", name: "XV50", years: "2011-2018" }
        ]
      },
      {
        id: "corolla",
        name: "Corolla",
        generations: [
          { id: "corolla-e210", name: "E210", years: "2018-настоящее время" },
          { id: "corolla-e170", name: "E170", years: "2013-2018" },
          { id: "corolla-e160", name: "E160", years: "2012-2016" }
        ]
      }
    ]
  },
  {
    id: "bmw",
    name: "BMW",
    models: [
      {
        id: "3-series",
        name: "3 Series",
        generations: [
          { id: "bmw-3-g20", name: "G20", years: "2018-настоящее время" },
          { id: "bmw-3-f30", name: "F30", years: "2011-2019" },
          { id: "bmw-3-e90", name: "E90", years: "2005-2011" }
        ]
      },
      {
        id: "5-series",
        name: "5 Series",
        generations: [
          { id: "bmw-5-g30", name: "G30", years: "2016-настоящее время" },
          { id: "bmw-5-f10", name: "F10", years: "2010-2016" },
          { id: "bmw-5-e60", name: "E60", years: "2003-2010" }
        ]
      }
    ]
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    models: [
      {
        id: "c-class",
        name: "C-Class",
        generations: [
          { id: "merc-c-w206", name: "W206", years: "2021-настоящее время" },
          { id: "merc-c-w205", name: "W205", years: "2014-2021" },
          { id: "merc-c-w204", name: "W204", years: "2007-2014" }
        ]
      },
      {
        id: "e-class",
        name: "E-Class",
        generations: [
          { id: "merc-e-w213", name: "W213", years: "2016-настоящее время" },
          { id: "merc-e-w212", name: "W212", years: "2009-2016" },
          { id: "merc-e-w211", name: "W211", years: "2002-2009" }
        ]
      }
    ]
  }
];
