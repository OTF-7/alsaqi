export type Localized = { en: string; ar: string };

export const contact = {
  phone: "779779630",
  email: "info@alsaqiwater.com",
  website: "www.alsaqiwater.com",
} as const;

export const products = [
  {
    id: "330",
    size: "330 ml",
    title: { en: "Fast-moving refreshment", ar: "انتعاش سريع الحركة" },
    use: {
      en: "A practical choice for rapid consumption and high-density points of sale.",
      ar: "خيار عملي للاستهلاك السريع ونقاط البيع عالية الكثافة.",
    },
  },
  {
    id: "750",
    size: "750 ml",
    title: { en: "Refined individual service", ar: "تقديم فردي راقٍ" },
    use: {
      en: "Designed for restaurants, cafes, hospitality, and individual presentation.",
      ar: "حجم مثالي للمطاعم والكافيهات والضيافة والتقديم الفردي الراقي.",
    },
  },
  {
    id: "1200",
    size: "1200 ml",
    title: { en: "Practical everyday value", ar: "قيمة عملية كل يوم" },
    use: {
      en: "A practical and economical solution for daily and family use.",
      ar: "حل عملي واقتصادي للاستخدام اليومي والعائلي.",
    },
  },
] as const;

export const audiences = {
  consumer: {
    label: { en: "Consumer", ar: "المستهلك" },
    promise: { en: "Quality you can rely on every day", ar: "جودة يمكن الاعتماد عليها يومياً" },
    values: [
      { en: "Pure water that is safe for health", ar: "مياه نقية وآمنة صحياً" },
      { en: "Consistent quality and dependable taste", ar: "جودة ثابتة وطعم موثوق" },
      { en: "Practical bottles with modern design", ar: "عبوات عملية وتصميم عصري" },
      { en: "An appropriate price for the quality", ar: "سعر مناسب مقابل الجودة" },
      { en: "A daily experience you can trust", ar: "تجربة يومية يمكن الاعتماد عليها" },
    ],
  },
  trader: {
    label: { en: "Trader", ar: "التاجر" },
    promise: { en: "Fast movement and continuous profit", ar: "حركة سريعة وربح مستمر" },
    values: [
      { en: "High turnover reduces frozen capital", ar: "سرعة دوران عالية تقلل تجميد رأس المال" },
      { en: "A competitive profit margin", ar: "هامش ربحي منافس" },
      { en: "Stable supply", ar: "استقرار في التوريد" },
      { en: "Fast-moving product with continuing profit", ar: "منتج سريع الحركة وربح مستمر" },
      { en: "Easy reordering", ar: "سهولة في إعادة الطلب" },
      { en: "Ready marketing support", ar: "دعم تسويقي جاهز" },
    ],
  },
  investor: {
    label: { en: "Investor", ar: "المستثمر" },
    promise: { en: "A stable opportunity designed to scale", ar: "فرصة مستقرة وقابلة للنمو" },
    values: [
      { en: "A stable market with permanent demand", ar: "سوق مستقر وطلب دائم" },
      { en: "A fast cash cycle", ar: "دورة نقدية سريعة" },
      { en: "High scalability", ar: "قابلية توسع عالية" },
      { en: "Potential to build a high-value brand", ar: "إمكانية بناء علامة ذات قيمة سوقية كبيرة" },
      { en: "Relatively low-risk investment", ar: "استثمار منخفض المخاطر نسبياً" },
    ],
  },
} as const;

export const values = {
  qualityFirst: {
    title: { en: "Quality first", ar: "الجودة أولاً" },
    text: { en: "Strict production standards for a stable, dependable product.", ar: "التزام صارم بمعايير إنتاج تضمن منتجاً ثابتاً وموثوقاً." },
  },
  trust: {
    title: { en: "Trust and credibility", ar: "الثقة والمصداقية" },
    text: { en: "Long-term relationships built on transparency and continuity.", ar: "بناء علاقات طويلة الأمد قائمة على الشفافية والاستمرارية." },
  },
  commercialValue: {
    title: { en: "Commercial value", ar: "القيمة التجارية" },
    text: { en: "Sustainable, real profit for distribution partners.", ar: "منتج يحقق ربحاً فعلياً ومستداماً لشركاء التوزيع." },
  },
  operationalEfficiency: {
    title: { en: "Operational efficiency", ar: "الكفاءة التشغيلية" },
    text: { en: "Professional management that reduces cost and improves output.", ar: "إدارة احترافية تقلل التكاليف وتعزز الإنتاجية." },
  },
  innovation: {
    title: { en: "Innovation and development", ar: "الابتكار والتطوير" },
    text: { en: "Continuous improvement in products, marketing, and operations.", ar: "تحسين مستمر في المنتجات والتسويق والعمليات." },
  },
  sustainability: {
    title: { en: "Sustainability", ar: "الاستدامة" },
    text: { en: "Responsible operations that preserve resources and continuity.", ar: "تشغيل مسؤول يحافظ على الموارد ويعزز استمرارية الأعمال." },
  },
} as const;

export const marketPhases = {
  launch: {
    title: { en: "Launch", ar: "مرحلة الإطلاق" },
    points: [
      { en: "Build a strong distributor network", ar: "بناء شبكة موزعين قوية" },
      { en: "Offer motivating market-entry terms", ar: "تقديم عروض دخول محفزة" },
      { en: "Spread quickly across points of sale", ar: "انتشار سريع في نقاط البيع" },
    ],
  },
  establish: {
    title: { en: "Establish", ar: "مرحلة التثبيت" },
    points: [
      { en: "Maintain product availability", ar: "ضمان توفر المنتج باستمرار" },
      { en: "Strengthen market trust", ar: "تعزيز ثقة السوق" },
    ],
  },
  expand: {
    title: { en: "Expand", ar: "مرحلة التوسع" },
    points: [
      { en: "Expand geographically", ar: "التوسع الجغرافي" },
      { en: "Add production lines", ar: "إضافة خطوط إنتاج جديدة" },
      { en: "Develop additional products", ar: "تطوير منتجات إضافية" },
    ],
  },
} as const;

export const responsibilityPillars = {
  environment: { en: "Conserve resources and reduce environmental impact", ar: "ترشيد استهلاك الموارد وتقليل الأثر البيئي" },
  health: { en: "Provide a safe product supporting a healthy lifestyle", ar: "تقديم منتج آمن يعزز نمط الحياة الصحي" },
  community: { en: "Support local initiatives and employment", ar: "دعم المبادرات المحلية وتوفير فرص العمل" },
  economy: { en: "Support traders and strengthen economic activity", ar: "دعم التجار وتعزيز النشاط الاقتصادي" },
} as const;

export const growthOpportunities = {
  newMarkets: { en: "Enter new markets", ar: "دخول أسواق جديدة" },
  privateLabel: { en: "Private-label manufacturing", ar: "التصنيع للغير" },
  retailChains: { en: "Strategic retail-chain partnerships", ar: "شراكات استراتيجية مع سلاسل تجارية" },
  beverageExpansion: { en: "Expand into carbonated and flavored beverages", ar: "التوسع في قطاع المشروبات الغازية والمنكهة" },
} as const;

export const alsaqiContent = {
  hero: {
    eyebrow: { en: "Natural mineral water", ar: "مياه معدنية طبيعية" },
    title: { en: "Your refined choice", ar: "الساقي… اختيارك الراقي" },
    slogan: { en: "الساقي… اختيارك الراقي", ar: "الساقي… اختيارك الراقي" },
    intro: { en: "Pure water, built for daily trust and lasting partnerships.", ar: "مياه نقية، صُممت لثقة يومية وشراكات مستدامة." },
  },
  manifesto: {
    title: { en: "More than water. A brand built to move.", ar: "أكثر من مياه… علامة صُممت لتتحرك." },
    summary: {
      en: "Al Saqi brings together high production quality, precise market understanding, focused high-turnover products, and professional distribution.",
      ar: "يجمع الساقي بين جودة الإنتاج، والفهم الدقيق للسوق، والتركيز على المنتجات الأسرع دوراناً، ونموذج توزيع احترافي.",
    },
    vision: { en: "To become a leading standard for quality, trust, reach, and regional growth.", ar: "أن نكون من أبرز العلامات الرائدة ومعياراً للجودة والثقة والانتشار والريادة الإقليمية." },
    mission: { en: "Natural mineral water of high purity, produced and distributed through a professional system.", ar: "تقديم مياه معدنية طبيعية عالية النقاء عبر منظومة إنتاج وتوزيع احترافية." },
  },
  products: { title: { en: "Three sizes. Three jobs.", ar: "ثلاثة أحجام… لكل حجم دوره." } },
  audiences: { title: { en: "Value that changes with your point of view", ar: "قيمة تتسع لكل منظور" } },
  factory: {
    title: { en: "Precision in motion", ar: "دقة تتحرك مع كل عبوة" },
    stages: [
      { en: "Highly efficient automated production lines", ar: "خطوط إنتاج أوتوماتيكية عالية الكفاءة" },
      { en: "Industrial control systems (PLC / HMI)", ar: "أنظمة تحكم صناعي (PLC / HMI)" },
      { en: "Precise quality monitoring at every stage", ar: "رقابة جودة دقيقة في جميع المراحل" },
      { en: "Reduced waste and improved operational efficiency", ar: "تقليل الفاقد وتحسين الكفاءة التشغيلية" },
    ],
  },
  quality: {
    title: { en: "Standards, clearly stated", ar: "جودة واضحة… في كل مرحلة" },
    certificationDirection: {
      en: "Al Saqi is working toward ISO and HACCP certification while applying food-safety systems, health specifications, and periodic quality testing.",
      ar: "يتجه الساقي للحصول على شهادات ISO وHACCP مع تطبيق أنظمة سلامة الغذاء ومطابقة المواصفات الصحية وإجراء فحوصات جودة دورية.",
    },
  },
  market: {
    title: { en: "Launch. Establish. Expand.", ar: "إطلاق… تثبيت… ثم توسع." },
    equation: { en: "Reliable product + intelligent pricing + effective distribution = successful brand", ar: "منتج موثوق + تسعير ذكي + توزيع فعال = علامة تجارية ناجحة" },
    advantages: [
      { en: "Focus on best-selling products", ar: "تركيز على المنتجات الأعلى مبيعاً" },
      { en: "Trader-directed distribution", ar: "استراتيجية توزيع موجهة للتجار" },
      { en: "Studied pricing flexibility", ar: "مرونة تسعيرية مدروسة" },
      { en: "Professional market-led management", ar: "إدارة احترافية قائمة على فهم السوق" },
      { en: "A strong, scalable visual identity", ar: "هوية بصرية قوية وقابلة للانتشار" },
    ],
  },
  responsibility: { title: { en: "Responsibility beyond the bottle", ar: "مسؤولية تتجاوز العبوة" } },
  growth: {
    title: { en: "Build the market together", ar: "نبني السوق معاً" },
    model: [
      { en: "Distribution through a partner network", ar: "التوزيع عبر شبكة موزعين" },
      { en: "Institutional supply contracts", ar: "عقود التوريد للمؤسسات" },
      { en: "Direct sales to major organizations", ar: "البيع المباشر للجهات الكبرى" },
    ],
    invitation: {
      en: "For traders seeking a profitable fast-moving product, investors seeking stable growth, and partners ready to expand with a strong brand.",
      ar: "للتجار الباحثين عن منتج مربح وسريع البيع، وللمستثمرين الباحثين عن فرصة مستقرة وقابلة للنمو، ولشركاء التوسع والتوزيع.",
    },
    close: { en: "Purity to trust. Opportunity to invest.", ar: "الساقي… نقاء يُوثق، وفرصة تُستثمر." },
  },
} as const;
