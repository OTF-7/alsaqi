export type Localized = { en: string; ar: string };

const t = (en: string, ar: string): Localized => ({ en, ar });

export const contact = {
  phone: "779779630",
  whatsapp: "+967 779779630",
  email: "info@alsaqiwater.com",
  website: "www.alsaqiwater.com",
} as const;

export const hero = {
  kicker: t("Natural mineral water", "مياه معدنية طبيعية"),
  title: t("Al Saqi… your refined choice", "الساقي… اختيارك الراقي"),
  support: t(
    "Natural mineral water made to exacting quality standards, with an experience that reflects refined taste.",
    "مياه معدنية طبيعية بمعايير جودة عالية وتجربة تعكس الذوق الرفيع",
  ),
  primaryCta: t("Discover Al Saqi water", "اكتشف مياه الساقي"),
  partnerCta: t("Grow with Al Saqi", "انمُ مع الساقي"),
  brand: t("Al Saqi Mineral Water Factory", "مصنع الساقي للمياه المعدنية"),
} as const;

export const about = {
  title: t("Executive summary", "الملخص التنفيذي"),
  intro: t(
    "Al Saqi Mineral Water Factory is an integrated industrial model in a strategic sector known for stability and continuous growth, built around an essential product that is part of everyday human life: water.",
    "يمثل مصنع الساقي للمياه المعدنية نموذجًا صناعيًا متكاملًا في قطاع استراتيجي يتميز بالاستقرار والنمو المستمر، حيث يعتمد على منتج أساسي يشكل جزءًا يوميًا من حياة الإنسان: المياه.",
  ),
  bridge: t(
    "The factory was established with a clear vision to build a strong brand capable of rapid expansion through a system that combines:",
    "تم تأسيس المصنع برؤية واضحة تهدف إلى بناء علامة تجارية قوية وقابلة للانتشار السريع، من خلال منظومة تجمع بين:",
  ),
  pillars: [
    t("Production quality in line with the highest health standards", "جودة إنتاج وفق أعلى المعايير الصحية"),
    t("Precise understanding of market behavior and needs", "فهم دقيق لسلوك السوق واحتياجاته"),
    t("A product strategy designed to increase turnover", "استراتيجية منتجات موجهة لزيادة سرعة الدوران"),
    t("A professional distribution model delivering profitability and sustainability", "نموذج توزيع احترافي يحقق الربحية والاستدامة"),
  ],
  close: t(
    "Al Saqi Factory is not merely a production facility, but a platform for building a brand that competes and leads the market.",
    "مصنع الساقي ليس مجرد منشأة إنتاج، بل منصة لبناء علامة تجارية تنافس وتقود السوق.",
  ),
} as const;

export const vision = {
  title: t("Vision and mission", "الرؤية والرسالة"),
  visionTitle: t("Our vision", "رؤيتنا"),
  visionText: t(
    "For Al Saqi Mineral Water Factory to become one of the leading brands in the water sector and a benchmark for quality, trust, and reach, while expanding toward regional leadership.",
    "أن يكون مصنع الساقي للمياه المعدنية من أبرز العلامات الرائدة في قطاع المياه، وأن يمثل معيارًا للجودة والثقة والانتشار، مع التوسع نحو الريادة الإقليمية.",
  ),
  missionTitle: t("Our mission", "رسالتنا"),
  missionText: t(
    "To produce and provide highly pure natural mineral water using the latest treatment and bottling technologies, and to deliver:",
    "إنتاج وتوفير مياه معدنية طبيعية عالية النقاء، باستخدام أحدث تقنيات المعالجة والتعبئة، وتقديم:",
  ),
  missionPoints: [
    t("Real value for traders", "قيمة حقيقية للتاجر"),
    t("A trusted consumer experience", "تجربة موثوقة للمستهلك"),
    t("Sustainable returns for investors", "عائد مستدام للمستثمر"),
  ],
} as const;

export const products = [
  {
    id: "330",
    size: t("330 ml", "330 مل"),
    role: t("A fast-consumption bottle, ideal for high-traffic points of sale", "عبوة سريعة الاستهلاك، مثالية لنقاط البيع عالية الحركة"),
    short: t("Light and easy to carry", "خفيف وسهل الحمل"),
  },
  {
    id: "750",
    size: t("750 ml", "750 مل"),
    role: t("Designed for restaurants, cafés, and refined individual service", "موجهة للمطاعم والكافيهات والتقديم الفردي الراقي"),
    short: t("Ideal for daily use", "مثالي للاستخدام اليومي"),
  },
  {
    id: "1200",
    size: t("1200 ml", "1200 مل"),
    role: t("A practical and economical solution for everyday and family use", "حل عملي واقتصادي للاستخدام اليومي والعائلي"),
    short: t("For families and occasions", "للعائلات والمناسبات"),
  },
] as const;

export const productSection = {
  title: t("Products", "المنتجات"),
  intro: t(
    "The factory focuses on the most in-demand sizes to ensure fast turnover and maximize returns:",
    "يركز المصنع على إنتاج الأحجام الأكثر طلبًا لضمان سرعة الدوران وتعظيم العائد:",
  ),
  packageIntro: t("The bottle was developed to be:", "تم تطوير العبوة لتكون:"),
  packagePoints: [
    t("Clear and visually attractive.", "واضحة وجذابة بصريًا."),
    t("Easy to carry and use.", "سهلة الحمل والاستخدام."),
    t("Prominent on the shelf and able to reinforce purchase decisions.", "بارزة على الرف وتعزز قرار الشراء."),
  ],
  close: t("Our products are not merely displayed… they sell with confidence.", "منتجاتنا لا تُعرض فقط… بل تُباع بثقة."),
  strategy: t("The strategy is based on intelligent focus, not random expansion.", "الاستراتيجية تعتمد على التركيز الذكي، وليس التوسع العشوائي."),
} as const;

export const audiences = {
  consumer: {
    label: t("Consumer", "المستهلك"),
    heading: t("For the consumer", "للمستهلك"),
    values: [
      t("Pure water that is safe for health", "مياه نقية وآمنة صحياً"),
      t("Consistent quality and dependable taste", "جودة ثابتة وطعم موثوق"),
      t("Practical bottles and modern design", "عبوات عملية وتصميم عصري"),
      t("A fair price for the quality", "سعر مناسب مقابل الجودة"),
    ],
    equation: t("Al Saqi = quality you can rely on every day", "الساقي = جودة يمكن الاعتماد عليها يوميًا"),
  },
  trader: {
    label: t("Trader", "التاجر"),
    heading: t("For the trader", "للتاجر"),
    values: [
      t("High turnover that reduces frozen capital", "سرعة دوران عالية تقلل تجميد رأس المال"),
      t("A competitive profit margin", "هامش ربحي منافس"),
      t("Stable supply", "استقرار في التوريد"),
      t("Easy reordering", "سهولة في إعادة الطلب"),
      t("Ready marketing support", "دعم تسويقي جاهز"),
    ],
    equation: t("Al Saqi = a fast-moving product + continuous profit", "الساقي = منتج سريع الحركة + ربح مستمر"),
  },
  investor: {
    label: t("Investor", "المستثمر"),
    heading: t("For the investor", "للمستثمر"),
    values: [
      t("A stable market with permanent demand", "سوق مستقر وطلب دائم"),
      t("A fast cash cycle", "دورة نقدية سريعة"),
      t("High scalability", "قابلية توسع عالية"),
      t("The ability to build a brand with major market value", "إمكانية بناء علامة ذات قيمة سوقية كبيرة"),
      t("A relatively low-risk investment", "استثمار منخفض المخاطر نسبيًا"),
    ],
  },
} as const;

export const valueSection = {
  title: t("Value analysis", "تحليل القيمة"),
  close: t(
    "Al Saqi combines quality, continuity, and economic viability in a single product.",
    "الساقي يجمع بين الجودة، والاستمرارية، والجدوى الاقتصادية في منتج واحد.",
  ),
} as const;

export const factory = {
  title: t("Operations and production", "التشغيل والإنتاج"),
  capabilities: [
    t("Highly efficient automated production lines", "خطوط إنتاج أوتوماتيكية عالية الكفاءة"),
    t("Industrial control systems (PLC / HMI)", "أنظمة تحكم صناعي (PLC / HMI)"),
    t("Precise quality monitoring at every stage", "رقابة جودة دقيقة في جميع المراحل"),
    t("Reduced waste and improved operational efficiency", "تقليل الفاقد وتحسين الكفاءة التشغيلية"),
  ],
  methodologyIntro: t("We rely on an integrated operating system that includes:", "نعتمد على منظومة تشغيل متكاملة تشمل:"),
  methodology: [
    t("Modern, highly efficient production lines", "خطوط إنتاج حديثة عالية الكفاءة"),
    t("Precise quality control systems", "أنظمة رقابة جودة دقيقة"),
    t("Effective distribution management", "إدارة توزيع فعالة"),
    t("Continuous monitoring of market movement", "متابعة مستمرة لحركة السوق"),
  ],
} as const;

export const quality = {
  title: t("Quality and standards", "الجودة والمعايير"),
  pillars: [
    t("Applying food-safety systems", "تطبيق أنظمة سلامة الغذاء"),
    t("Conforming to health specifications", "مطابقة المواصفات الصحية"),
    t("Working toward ISO and HACCP certifications", "التوجه للحصول على شهادات ISO و HACCP"),
    t("Periodic quality testing", "فحوصات جودة دورية"),
  ],
  sheetTitle: t("Quality standards report", "كشف معايير الجودة"),
  checks: [
    t("Physical test: color, taste, odor, turbidity", "الفحص الفيزيائي: اللون، الطعم، الرائحة، العكارة"),
    t("Salts and minerals (TDS): calcium and magnesium", "الأملاح والمعادن (TDS): الكالسيوم والمغنيسيوم"),
    t("Acidity (pH): neutral", "درجة الحموضة (pH): متعادل"),
    t("Heavy metals: lead, arsenic, mercury", "المعادن الثقيلة: الرصاص، الزرنيخ، الزئبق"),
    t("Microbiological test: bacteria, germs", "الفحص الميكروبيولوجي: البكتيريا، الجراثيم"),
    t("Chemical substances: nitrates, sulfates, fluoride", "المواد الكيميائية: النترات، الكبريتات، الفلورايد"),
    t("Packaging safety: bottles, closure, date", "سلامة التعبئة: العبوات، الإغلاق، التاريخ"),
  ],
  commitment: t("We are committed to delivering a product distinguished by:", "نلتزم بتقديم منتج يتميز بـ:"),
  commitmentPoints: [
    t("Consistent quality", "جودة ثابتة"),
    t("Continuous availability", "توفر مستمر"),
    t("Reliable performance", "أداء موثوق"),
  ],
} as const;

export const marketPhases = {
  launch: {
    title: t("Launch phase", "مرحلة الإطلاق"),
    points: [
      t("Build a strong distributor network", "بناء شبكة موزعين قوية"),
      t("Offer motivating entry incentives", "تقديم عروض دخول محفزة"),
      t("Spread quickly across points of sale", "انتشار سريع في نقاط البيع"),
    ],
  },
  establish: {
    title: t("Establishment phase", "مرحلة التثبيت"),
    points: [
      t("Ensure continuous product availability", "ضمان توفر المنتج باستمرار"),
      t("Strengthen market trust", "تعزيز ثقة السوق"),
    ],
  },
  expand: {
    title: t("Expansion phase", "مرحلة التوسع"),
    points: [
      t("Geographic expansion", "التوسع الجغرافي"),
      t("Add new production lines", "إضافة خطوط إنتاج جديدة"),
      t("Develop additional products", "تطوير منتجات إضافية"),
    ],
  },
} as const;

export const market = {
  title: t("Work philosophy", "فلسفة العمل"),
  philosophy: t("In the water market, success does not depend on quality alone, but on:", "في سوق المياه، النجاح لا يعتمد فقط على الجودة، بل على:"),
  philosophyPoints: [
    t("The ability to expand rapidly", "القدرة على الانتشار السريع"),
    t("Ease of sale", "وسهولة البيع"),
    t("Achieving profitability.", "وتحقيق الربحية."),
  ],
  equationTitle: t("The core equation:", "المعادلة الأساسية:"),
  equationParts: [
    t("Reliable product", "منتج موثوق"),
    t("Intelligent pricing", "تسعير ذكي"),
    t("Effective distribution", "توزيع فعال"),
  ],
  equationResult: t("Successful brand", "علامة تجارية ناجحة"),
  advantages: [
    t("Focus on best-selling products", "تركيز على المنتجات الأعلى مبيعًا"),
    t("A trader-directed distribution strategy", "استراتيجية توزيع موجهة للتجار"),
    t("Studied pricing flexibility", "مرونة تسعيرية مدروسة"),
    t("Professional management grounded in market understanding", "إدارة احترافية قائمة على فهم السوق"),
    t("A strong visual identity capable of expansion", "هوية بصرية قوية وقابلة للانتشار"),
  ],
} as const;

export const values = [
  { title: t("Quality first", "الجودة أولًا"), text: t("Strict commitment to production standards that ensure a consistent and dependable product", "الالتزام الصارم بمعايير إنتاج تضمن منتجًا ثابتًا وموثوقًا") },
  { title: t("Trust and credibility", "الثقة والمصداقية"), text: t("Building long-term relationships founded on transparency and continuity", "بناء علاقات طويلة الأمد قائمة على الشفافية والاستمرارية") },
  { title: t("Commercial value", "القيمة التجارية"), text: t("Providing a product that delivers real and sustainable profit for distribution partners", "تقديم منتج يحقق ربحًا فعليًا ومستدامًا لشركاء التوزيع") },
  { title: t("Operational efficiency", "الكفاءة التشغيلية"), text: t("Professional management that reduces costs and enhances productivity", "إدارة احترافية تقلل التكاليف وتعزز الإنتاجية") },
  { title: t("Innovation and development", "الابتكار والتطوير"), text: t("Continuous improvement in products, marketing, and operations", "تحسين مستمر في المنتجات والتسويق والعمليات") },
  { title: t("Sustainability", "الاستدامة"), text: t("Responsible operations that preserve resources and reinforce business continuity", "تشغيل مسؤول يحافظ على الموارد ويعزز استمرارية الأعمال") },
] as const;

export const responsibility = {
  title: t("Social responsibility", "المسؤولية الاجتماعية"),
  intro: t("We believe true quality extends beyond the product, so we are committed to:", "نؤمن بأن الجودة الحقيقية تمتد لما هو أبعد من المنتج، لذلك نحرص على:"),
  actions: [
    t("Providing safe, healthy water", "تقديم مياه آمنة وصحية"),
    t("Committing to environmental practices", "الالتزام بالممارسات البيئية"),
    t("Supporting the local economy and our partners in success", "دعم الاقتصاد المحلي وشركاء النجاح"),
  ],
  pillars: [
    { title: t("Environment", "البيئة"), text: t("Conserving resources and reducing environmental impact", "ترشيد استهلاك الموارد وتقليل الأثر البيئي") },
    { title: t("Health", "الصحة"), text: t("Providing a safe product that promotes a healthy lifestyle", "تقديم منتج آمن يعزز نمط الحياة الصحي") },
    { title: t("Community", "المجتمع"), text: t("Supporting local initiatives and creating employment opportunities", "دعم المبادرات المحلية وتوفير فرص العمل") },
    { title: t("Economy", "الاقتصاد"), text: t("Supporting traders and strengthening economic activity", "دعم التجار وتعزيز النشاط الاقتصادي") },
  ],
} as const;

export const growth = {
  title: t("Growth and expansion opportunities", "فرص النمو والتوسع"),
  opportunities: [
    t("Expansion into beverages (carbonated and flavored)", "التوسع في قطاع المشروبات (غازية ومنكهة)"),
    t("Entering new markets", "دخول أسواق جديدة"),
    t("Third-party manufacturing (Private Label)", "التصنيع للغير (Private Label)"),
    t("Strategic partnerships with retail chains", "شراكات استراتيجية مع سلاسل تجارية"),
  ],
  model: [
    t("Distribution through a distributor network", "التوزيع عبر شبكة موزعين"),
    t("Direct sales to major organizations", "البيع المباشر للجهات الكبرى"),
    t("Institutional supply contracts", "عقود التوريد للمؤسسات"),
  ],
  modelIntro: t("The model is based on:", "النموذج قائم على:"),
  modelBasis: [
    t("High sales volume", "حجم مبيعات مرتفع"),
    t("Fast turnover", "دوران سريع"),
    t("A studied margin", "هامش مدروس"),
  ],
} as const;

export const partners = {
  title: t("An invitation to partner", "دعوة للشراكة"),
  intro: t("Al Saqi Factory invites:", "يدعو مصنع الساقي:"),
  invitation: [
    t("Traders seeking a profitable, fast-selling product", "التجار الباحثين عن منتج مربح وسريع البيع"),
    t("Investors seeking a stable, scalable opportunity", "المستثمرين الباحثين عن فرصة مستقرة وقابلة للنمو"),
    t("Expansion and distribution partners", "شركاء التوسع والتوزيع"),
    t("To take part in building a strong brand in a broad, enduring market.", "للمشاركة في بناء علامة قوية في سوق واسع ومستمر."),
  ],
  conclusion: t(
    "Al Saqi Mineral Water Factory is not merely a production venture… it is a brand project capable of leading the market:",
    "مصنع الساقي للمياه المعدنية ليس مجرد مشروع إنتاج… بل مشروع علامة تجارية قابلة للسيطرة على السوق:",
  ),
  conclusionPoints: [
    t("An essential product with uninterrupted demand", "منتج أساسي لا يتوقف الطلب عليه"),
    t("A clear operating model", "نموذج تشغيلي واضح"),
    t("A major expansion opportunity", "فرصة توسع كبيرة"),
    t("Promising investment returns", "عائد استثماري واعد"),
  ],
  final: t("Al Saqi… purity to trust, and opportunity to invest.", "الساقي… نقاء يُوثق، وفرصة تُستثمر."),
} as const;
