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

export const posts: Post[] = [
  {
    id: "post-1",
    title: "Обзор Toyota Camry XV70",
    content: "Toyota Camry XV70 это отличный седан бизнес-класса с комфортной подвеской и просторным салоном. В этом поколении Toyota серьезно улучшила управляемость автомобиля, сделав его более драйверским и интересным. Двигатели на выбор 2.5 и 3.5 литра, оба атмосферные и очень надежные. Салон отделан качественными материалами, а список оснащения включает все современные системы безопасности и комфорта.",
    date: "2024-04-10",
    author: "Иван Петров",
    brandId: "toyota",
    modelId: "camry",
    generationId: "camry-xv70",
    images: [
      "https://images.unsplash.com/photo-1621007947185-d62ddb3543fe?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "post-2",
    title: "Технические проблемы BMW 3-Series F30",
    content: "В BMW 3-Series F30 есть ряд типичных технических проблем, о которых стоит знать перед покупкой. Среди них - течи радиатора охлаждения, проблемы с цепью ГРМ на двигателях N20, неисправности электронного стояночного тормоза. Также стоит обратить внимание на состояние подвески, особенно если автомобиль эксплуатировался в городе с плохими дорогами. При этом, F30 остается очень драйверским и комфортным автомобилем с отличной динамикой.",
    date: "2024-03-22",
    author: "Алексей Смирнов",
    brandId: "bmw",
    modelId: "3-series",
    generationId: "bmw-3-f30",
    images: [
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "post-3",
    title: "Mercedes E-Class W213 против BMW 5-Series G30",
    content: "В этом сравнительном обзоре мы рассмотрим два лучших представителя бизнес-класса - Mercedes E-Class W213 и BMW 5-Series G30. Mercedes традиционно делает упор на комфорт, плавность хода и роскошную отделку. BMW же предлагает более спортивный характер, лучшую управляемость и динамику. По надежности обе модели находятся на высоком уровне, однако стоимость обслуживания Mercedes обычно немного выше. Выбор между этими автомобилями зависит от ваших приоритетов - комфорт или драйверские ощущения.",
    date: "2024-04-05",
    author: "Дмитрий Ковалев",
    brandId: "mercedes",
    modelId: "e-class",
    generationId: "merc-e-w213",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605515298946-d664fe84108c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "post-4",
    title: "Опыт владения Toyota Corolla E210",
    content: "Делюсь опытом двухлетнего владения Toyota Corolla E210 с двигателем 1.6. За это время автомобиль проявил себя как надежный и экономичный компаньон для ежедневных поездок. Расход топлива в городе составляет около 7-8 литров, что очень хорошо для автомобиля такого класса. Из минусов можно отметить не самую лучшую шумоизоляцию и не очень мощный двигатель. Но в целом, автомобиль полностью оправдывает свою цену и является отличным выбором для тех, кто ценит надежность и низкую стоимость владения.",
    date: "2024-04-15",
    author: "Сергей Новиков",
    brandId: "toyota",
    modelId: "corolla",
    generationId: "corolla-e210",
    images: [
      "https://images.unsplash.com/photo-1623013438264-e3865cbea683?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621007947893-be806e3935b9?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604053762021-76f41f702b3e?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "post-5",
    title: "Как выбрать Mercedes C-Class W205",
    content: "Mercedes C-Class W205 является отличным выбором на вторичном рынке, но перед покупкой нужно обратить внимание на ряд особенностей. Важно проверить работу 9-ступенчатой АКПП, так как на ранних экземплярах встречались проблемы с ней. Также обязательно проверьте электронику и систему Comand, их ремонт может быть дорогим. Из двигателей наиболее надежны 2.0 дизель и 2.0 бензин, но у последнего могут быть проблемы с цепью ГРМ. Обязательно проверьте состояние подвески, особенно если автомобиль оснащен пневмоподвеской.",
    date: "2024-03-30",
    author: "Михаил Зайцев",
    brandId: "mercedes",
    modelId: "c-class",
    generationId: "merc-c-w205",
    images: [
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1642668457531-6870d0ab9c33?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592853598064-a581b4d5e0b7?q=80&w=2000&auto=format&fit=crop"
    ]
  }
];
