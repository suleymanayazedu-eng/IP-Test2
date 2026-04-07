export type Language = 'tr' | 'en';
export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface KeyPoint {
  title: string;
  text: string;
}

export interface ProjectItem {
  type: string;
  title: string;
  meta: string;
  image: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    formSuccess: string;
  };
  nav: {
    about: string;
    services: string;
    projects: string;
    whyUs: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleHtml: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    featuredLabel: string;
    featuredTitle: string;
    featuredText: string;
    points: string[];
    metrics: { value: string; label: string }[];
  };
  trust: {
    title: string;
    text: string;
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    textOne: string;
    textTwo: string;
    features: KeyPoint[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<KeyPoint & { index: string }>;
  };
  services: {
    eyebrow: string;
    title: string;
    cards: Array<KeyPoint & { index: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    note: string;
    items: ProjectItem[];
  };
  whyUs: {
    eyebrow: string;
    title: string;
    cards: KeyPoint[];
  };
  cta: {
    eyebrow: string;
    title: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    cardTitle: string;
    cardText: string;
    call: string;
    whatsapp: string;
    items: ContactItem[];
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    projectLabel: string;
    projectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    uploadLabel: string;
    uploadHint: string;
    submit: string;
    projectTypes: string[];
  };
  footer: {
    description: string;
    note: string;
    copy: string;
  };
}

export const siteContent: Record<Language, SiteContent> = {
  tr: {
    meta: {
      title: 'İsmet Peyzaj | Premium Peyzaj Tasarımı ve Uygulama',
      description:
        'İsmet Peyzaj; villa, site, restoran, otel ve kurumsal alanlar için premium peyzaj tasarımı, uygulama ve bakım çözümleri sunar.',
      formSuccess: 'Talebiniz Alındı',
    },
    nav: {
      about: 'Hakkımızda',
      services: 'Hizmetler',
      projects: 'Projeler',
      whyUs: 'Neden Biz',
      contact: 'İletişim',
      cta: 'Keşif Talep Et',
    },
    hero: {
      eyebrow: 'Premium Peyzaj Tasarımı ve Uygulama',
      titleHtml: 'Mekânları doğayla <span>prestijli bir deneyime</span> dönüştürüyoruz.',
      text: 'Villa bahçelerinden seçkin otellere kadar her projede doğal estetiği, güçlü ilk izlenimi ve uzun ömürlü uygulama disiplinini bir araya getiriyoruz.',
      primaryCta: 'Ücretsiz Keşif Planla',
      secondaryCta: 'Projeleri İncele',
      featuredLabel: 'Öne Çıkan Proje',
      featuredTitle: 'Villa girişinde karşılama peyzajı',
      featuredText:
        'Aydınlatma, çiçek dokusu ve temiz giriş aksı ile ilk bakışta düzenli ve davetkâr bir karşılama kurgusu oluşturuyoruz.',
      points: [
        'Peyzaj tasarımı, uygulama ve bakım süreci tek ekip tarafından yönetilir.',
        'Site içi çevre bakımı, ağaç dikimi ve mevsimsel çiçeklendirme tek planla ilerler.',
        'Yapay çim, doğal çim, tohum ekimi ve rulo çim çözümleri ihtiyaca göre doğru sistemle uygulanır.',
      ],
      metrics: [
        { value: '30+', label: 'Çok lokasyonlu saha uygulaması' },
        { value: '365', label: 'Bakım ve süreklilik odaklı servis disiplini' },
      ],
    },
    trust: {
      title: 'Yaşam alanlarını sıradan bırakmıyoruz.',
      text: 'Marka değeri taşıyan, ilk bakışta güven veren ve mevsimler geçtikçe daha da oturan dış mekânlar tasarlıyoruz.',
      stats: [
        { value: '3 Aşama', label: 'Keşif, uygulama ve bakım modeli' },
        { value: '10+', label: 'Farklı ölçekte referans proje tipi' },
        { value: 'Premium', label: 'Malzeme, çim ve kompozisyon seçimi' },
      ],
    },
    about: {
      eyebrow: 'Hakkımızda',
      title: 'Doğallığı, mimari dengeyi ve lüks algısını aynı çizgide buluşturan bir ekip.',
      textOne:
        'İsmet Peyzaj; villa, site, restoran, akaryakıt istasyonu ve kurumsal kampüslerde mekâna değer katan premium peyzaj çözümleri üretir.',
      textTwo:
        'Hedefimiz yalnızca güzel görünen alanlar değil; yaşayan, bakımı planlanmış ve bulunduğu yere değer katan dış mekânlar oluşturmaktır. Çim uygulamalarında yapay, doğal, tohum veya rulo sistemi sahaya göre doğru şekilde belirleriz.',
      features: [
        {
          title: 'Konsept Netliği',
          text: 'Her proje; kullanım, estetik ve bütçe dengesini birlikte düşünen özel bir senaryo ile başlar.',
        },
        {
          title: 'Saha Disiplini',
          text: 'Malzeme seçiminden uygulama takvimine kadar tüm adımlar net koordinasyonla ilerler.',
        },
        {
          title: 'Uzun Ömürlü Kurgu',
          text: 'Sulama, ağaçlandırma ve mevsim döngüsü birlikte düşünülerek kalıcı mekânlar kurulur.',
        },
      ],
    },
    process: {
      eyebrow: 'Çalışma Şeklimiz',
      title: 'Önce görürüz, sonra keşif yapar ve net karar veririz.',
      intro:
        'Önce alanı yerinde görürüz ya da siz video ve fotoğraf gönderirsiniz. Hızlı ama doğru bir keşif yapar, olur-olmazı açıkça söyler, uygunsa teklifimizi sunar ve onayınızla uygulamaya geçeriz.',
      steps: [
        {
          index: '01',
          title: 'Alanı Görüyoruz',
          text: 'Mümkünse sahaya gelip alanı yerinde inceliyoruz. Uzak lokasyonlarda ise video, fotoğraf ve temel ölçü bilgilerini sizden alıyoruz.',
        },
        {
          index: '02',
          title: 'Keşif Yapıyoruz',
          text: 'Alanı, ihtiyacı, bütçeyi ve bakım gerçekliğini birlikte değerlendirip doğru kapsamı netleştiriyoruz. Çim uygulanacaksa yapay, doğal, tohum veya rulo seçeneklerini bu aşamada belirliyoruz.',
        },
        {
          index: '03',
          title: 'Olur / Olmazı Netleştiriyoruz',
          text: 'Neyin uygulanabilir olduğunu, neyin sahaya ya da bütçeye uymadığını açıkça söylüyoruz. Gereksiz söz vermiyoruz.',
        },
        {
          index: '04',
          title: 'Teklif ve Uygulama',
          text: 'Onay verdiğinizde uygulama takvimi, malzeme seçimi ve saha organizasyonu ile işi kontrollü şekilde hayata geçiriyoruz.',
        },
      ],
    },
    services: {
      eyebrow: 'Hizmetler',
      title: 'Keşiften uygulamaya, bakımdan sulamaya kadar tüm süreç tek çatı altında.',
      cards: [
        {
          index: '01',
          title: 'Peyzaj Tasarımı',
          text: 'Villa, site ve ticari alanlar için özel konsept, bitkisel kurgu ve sert zemin senaryoları geliştiriyoruz.',
        },
        {
          index: '02',
          title: 'Uygulama ve Saha Yönetimi',
          text: 'Bitkilendirme, çiçeklendirme, sert zemin ve giriş aksını anahtar teslim şekilde uyguluyoruz.',
        },
        {
          index: '03',
          title: 'Sulama ve Ağaçlandırma',
          text: 'Alana uygun sulama sistemleri, ağaç dikimi ve su verimliliği odaklı kurulumlar yapıyoruz.',
        },
        {
          index: '04',
          title: 'Kurumsal Çevre Bakımı',
          text: 'Restoran zinciri, site ve sürekli görünür kalması gereken alanlar için düzenli bakım modeli sunuyoruz.',
        },
        {
          index: '05',
          title: 'Yapay ve Doğal Çim Uygulamaları',
          text: 'Alanın kullanım amacı ve bakım beklentisine göre yapay çim veya doğal çim uygulamalarını doğru zemin hazırlığı ile kuruyoruz.',
        },
        {
          index: '06',
          title: 'Tohum Ekimi ve Rulo Çim',
          text: 'Hızlı sonuç gereken alanlarda rulo çim, daha uzun vadeli kurgu gereken alanlarda ise tohum ekimi ile sağlıklı yeşil yüzey oluşturuyoruz.',
        },
      ],
    },
    projects: {
      eyebrow: 'Projeler / Referanslar',
      title: 'Farklı sektörlerde güçlü ilk izlenim yaratan dış mekân deneyimleri.',
      note: 'Referansları kaydırarak farklı proje tiplerini, doğru görsel ve doğru içerik eşleşmesiyle inceleyin.',
      items: [
        {
          type: 'Villa Girişi',
          title: 'Karşılama etkisini güçlendiren ön bahçe düzeni',
          meta: 'Cephe aydınlatması, çiçek dokusu ve temiz giriş kurgusuyla düzenli bir ilk izlenim.',
          image:
            'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        },
        {
          type: 'Yaklaşım Aksı',
          title: 'Uzun giriş yollarında güçlü yönlendirme hissi',
          meta: 'Doğal çevreyle uyumlu yaklaşım aksları ve açık alan omurgası için sakin ama etkili kurgu.',
          image:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        },
        {
          type: 'Ortak Yaşam Alanı',
          title: 'Açık alanlarda doğal doku ve sakin ritim',
          meta: 'Yaya aksları, çiçek dokusu ve yumuşak geçişlerle huzurlu bir dış mekân atmosferi.',
          image:
            'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=900&q=80',
        },
        {
          type: 'Doğal Bahçe Dokusu',
          title: 'Yoğun yeşil doku ile sakin bahçe karakteri',
          meta: 'Katmanlı bitki seçimi ve doğal çevre hissiyle daha yumuşak, daha yaşanır bir bahçe dili.',
          image:
            'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
        },
        {
          type: 'Panoramik Açık Alan',
          title: 'Manzara ile bütünleşen premium dış mekân hissi',
          meta: 'Geniş perspektif, sakin atmosfer ve doğal çevreyle uyumlu konaklama yaklaşımı.',
          image:
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
        },
      ],
    },
    whyUs: {
      eyebrow: 'Neden Biz',
      title: 'Estetik bakışı, teknik hassasiyet ve sürdürülebilir bakım disipliniyle destekliyoruz.',
      cards: [
        {
          title: 'Rafine Tasarım Dili',
          text: 'Kalabalık değil dengeli, gösterişli değil etkileyici dış mekânlar üretiyoruz.',
        },
        {
          title: 'Güven Veren Süreç',
          text: 'Keşif, teklif, uygulama ve teslim adımları net ekip koordinasyonuyla ilerler.',
        },
        {
          title: 'Mekâna Özel Çözüm',
          text: 'Her proje; iklim, kullanım alışkanlığı ve marka algısı birlikte düşünülerek ele alınır.',
        },
        {
          title: 'Bakımı Düşünen Yapı',
          text: 'Sadece kurulum değil, sonraki mevsimlerde de güçlü kalacak bir sistem kuruyoruz.',
        },
      ],
    },
    cta: {
      eyebrow: 'Keşif ve Teklif',
      title: 'Projenize değer katacak dış mekân deneyimini birlikte planlayalım.',
      button: 'İletişime Geç',
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Yeni projeniz için ilk adımı bugün atalım.',
      cardTitle: 'Hızlı proje dönüşü',
      cardText:
        'Telefon, WhatsApp veya e-posta ile bize ulaşın; projenizin ölçeğine göre hızlı bir keşif planı oluşturalım. Yapay çim, doğal çim, tohum veya rulo çim ihtiyacınızı da ilk görüşmede netleştirelim.',
      call: 'Hemen Ara',
      whatsapp: 'WhatsApp Yaz',
      items: [
        { label: 'Telefon', value: '0543 309 32 56', href: 'tel:05433093256' },
        { label: 'WhatsApp', value: '0543 309 32 56', href: 'https://wa.me/905433093256' },
        { label: 'E-posta', value: 'info@ismetpeyzaj.com', href: 'mailto:info@ismetpeyzaj.com' },
        { label: 'Konum', value: 'Kocaeli / Gölcük' },
        { label: 'Çalışma Saatleri', value: 'Her gün 09:00 - 19:00' },
        { label: 'Instagram', value: '@ismetpeyzaj', href: 'https://instagram.com/ismetpeyzaj' },
        { label: 'Facebook', value: 'İsmet Peyzaj', href: 'https://facebook.com/ismetpeyzaj' },
      ],
    },
    form: {
      nameLabel: 'Ad Soyad',
      namePlaceholder: 'Adınızı yazın',
      phoneLabel: 'Telefon',
      phonePlaceholder: 'Telefon numaranız',
      projectLabel: 'Proje Tipi',
      projectPlaceholder: 'Projenize en yakın başlığı seçin',
      messageLabel: 'Proje Notunuz',
      messagePlaceholder: 'Alan büyüklüğü, istediğiniz uygulama ve beklentinizi kısaca yazın',
      uploadLabel: 'Fotoğraf / Görsel Yükleyin',
      uploadHint: 'Alan fotoğrafı, ilham görseli veya mevcut durumu gösteren dosyaları ekleyebilirsiniz.',
      submit: 'Talep Gönder',
      projectTypes: [
        'Villa Bahçesi',
        'Site / Rezidans',
        'Restoran / Kafe',
        'Otel / Ticari Alan',
        'Kurumsal Çevre Bakımı',
        'Peyzaj Tasarımı',
        'Sulama Sistemi',
        'Ağaçlandırma',
        'Yapay / Doğal Çim',
        'Tohum / Rulo Çim',
      ],
    },
    footer: {
      description: 'Premium peyzaj tasarımı, uygulama ve bakım hizmetleri.',
      note: 'İsmet Peyzaj',
      copy: 'Kocaeli / Gölcük • 0543 309 32 56 • info@ismetpeyzaj.com',
    },
  },
  en: {
    meta: {
      title: 'Ismet Peyzaj | Premium Landscape Design and Implementation',
      description:
        'Ismet Peyzaj delivers premium landscape design, implementation, irrigation and maintenance services for villas, compounds, hotels and commercial properties.',
      formSuccess: 'Request Received',
    },
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      whyUs: 'Why Us',
      contact: 'Contact',
      cta: 'Request Discovery',
    },
    hero: {
      eyebrow: 'Premium Landscape Design and Implementation',
      titleHtml: 'We turn outdoor spaces into a <span>prestigious natural experience</span>.',
      text: 'From private villas to boutique hotels, we combine natural elegance, modern composition and durable execution details in every project.',
      primaryCta: 'Plan a Free Discovery',
      secondaryCta: 'Explore Projects',
      featuredLabel: 'Featured Project',
      featuredTitle: 'A welcoming landscape for a villa entrance',
      featuredText: 'Lighting, flower texture and a clean arrival axis create a refined and inviting first impression.',
      points: [
        'Landscape design, implementation and maintenance are managed by one team.',
        'We deliver compound maintenance, tree planting and seasonal flower programs.',
        'Artificial turf, natural turf, seed sowing and roll turf are selected according to the real site need.',
      ],
      metrics: [
        { value: '30+', label: 'Multi-location field implementations' },
        { value: '365', label: 'Maintenance and continuity discipline' },
      ],
    },
    trust: {
      title: 'We do not simply decorate outdoor areas.',
      text: 'We create landscapes that carry brand value, leave a lasting impression and improve with the seasons.',
      stats: [
        { value: '3 Stages', label: 'Discovery, implementation and maintenance model' },
        { value: '10+', label: 'Reference-ready project types' },
        { value: 'Premium', label: 'Material, turf and composition selection' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'A team that merges natural balance, architectural discipline and luxury perception.',
      textOne: 'Ismet Peyzaj builds premium landscape solutions for villas, compounds, restaurants, fuel stations and corporate campuses.',
      textTwo:
        'Our goal is not only to create beautiful scenery, but to establish outdoor spaces that live well, remain maintainable and reinforce property value. For lawn systems, we determine whether artificial turf, natural turf, seed sowing or roll turf is the right fit for the site.',
      features: [
        { title: 'Clear Concept', text: 'Every project starts with a scenario balancing use, aesthetics and investment discipline.' },
        { title: 'Field Discipline', text: 'From material selection to execution schedule, each step advances with clear coordination.' },
        { title: 'Long-Term Value', text: 'Irrigation, planting cycles and long-term growth are considered from day one.' },
      ],
    },
    process: {
      eyebrow: 'How We Work',
      title: 'First we review the site, then we decide if the job is right.',
      intro:
        'We either visit the site or review the videos and photos you send. Then we run a quick discovery, decide whether the work is viable and move into a clear proposal only when it makes sense.',
      steps: [
        {
          index: '01',
          title: 'We Review the Area',
          text: 'Whenever possible we inspect the site in person. For remote work, we review your videos, photos and basic dimensions.',
        },
        {
          index: '02',
          title: 'We Run Discovery',
          text: 'We evaluate the area, the need, the budget and the maintenance reality to define the right scope. If turf is needed, we decide between artificial, natural, seed or roll solutions at this stage.',
        },
        {
          index: '03',
          title: 'We Decide What Is Viable',
          text: 'We state clearly what is realistic and what is not. We do not promise work that does not fit the site or the budget.',
        },
        {
          index: '04',
          title: 'Proposal and Delivery',
          text: 'If you approve, we move into execution with a defined timeline, material choices and field organization.',
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'From discovery to implementation and from irrigation to long-term maintenance, the whole process stays under one roof.',
      cards: [
        { index: '01', title: 'Landscape Design', text: 'Tailored concepts, planting compositions and hardscape scenarios for villas and commercial properties.' },
        { index: '02', title: 'Implementation and Site Management', text: 'Turnkey planting, seasonal flower programs and branded entrance compositions managed with field discipline.' },
        { index: '03', title: 'Irrigation and Tree Planting', text: 'Site-specific irrigation systems, tree planting and water-efficient setups.' },
        { index: '04', title: 'Commercial Grounds Maintenance', text: 'Routine upkeep for restaurant chains, compounds and properties that require consistent visual quality.' },
        { index: '05', title: 'Artificial and Natural Turf', text: 'We install artificial or natural turf based on how the area will be used and how much maintenance it should require.' },
        { index: '06', title: 'Seed Sowing and Roll Turf', text: 'We use roll turf where a fast result is needed and seed sowing where a longer-term green surface is the better fit.' },
      ],
    },
    projects: {
      eyebrow: 'Projects / References',
      title: 'Outdoor experiences that create stronger first impressions across different sectors.',
      note: 'Swipe right to explore references inside a premium gallery flow.',
      items: [
        { type: 'Villa Entrance', title: 'Front garden layout with stronger arrival impact', meta: 'Facade lighting, flower texture and a clean entrance composition for a polished welcome.', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80' },
        { type: 'Arrival Axis', title: 'A stronger sense of direction on long approach roads', meta: 'A calm but effective open-air composition shaped around the feeling of arrival.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80' },
        { type: 'Shared Outdoor Space', title: 'Natural texture and calm rhythm across open areas', meta: 'Soft transitions, walkway character and a quieter outdoor atmosphere.', image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=900&q=80' },
        { type: 'Natural Garden Texture', title: 'A calmer garden identity through dense greenery', meta: 'Layered planting and a softer landscape character for more livable outdoor space.', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80' },
        { type: 'Panoramic Outdoor Setting', title: 'Premium exterior atmosphere aligned with the view', meta: 'Wide perspective, calm mood and a hospitality-oriented outdoor feel.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80' },
      ],
    },
    whyUs: {
      eyebrow: 'Why Us',
      title: 'We support aesthetic vision with technical discipline and continuity.',
      cards: [
        { title: 'Refined Design Language', text: 'We build spaces that feel balanced and impressive without becoming noisy.' },
        { title: 'Reliable Process', text: 'Discovery, pricing, implementation and delivery move forward with clear team coordination.' },
        { title: 'Context-Driven Solutions', text: 'Each project is shaped around climate, user behavior and the property image.' },
        { title: 'Maintenance-Aware Thinking', text: 'We design not only for opening day, but for the seasons that follow.' },
      ],
    },
    cta: {
      eyebrow: 'Discovery and Proposal',
      title: 'Let us shape an outdoor experience that adds visible value to your project.',
      button: 'Get in Touch',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us take the first step for your next project today.',
      cardTitle: 'Fast project response',
      cardText:
        'Reach us by phone, WhatsApp or email and we will define a quick discovery route based on your project scale. We can also clarify artificial turf, natural turf, seed or roll turf needs in the first conversation.',
      call: 'Call Now',
      whatsapp: 'WhatsApp Message',
      items: [
        { label: 'Phone', value: '0543 309 32 56', href: 'tel:05433093256' },
        { label: 'WhatsApp', value: '0543 309 32 56', href: 'https://wa.me/905433093256' },
        { label: 'Email', value: 'info@ismetpeyzaj.com', href: 'mailto:info@ismetpeyzaj.com' },
        { label: 'Location', value: 'Kocaeli / Golcuk' },
        { label: 'Hours', value: 'Every day 09:00 - 19:00' },
        { label: 'Instagram', value: '@ismetpeyzaj', href: 'https://instagram.com/ismetpeyzaj' },
        { label: 'Facebook', value: 'Ismet Peyzaj', href: 'https://facebook.com/ismetpeyzaj' },
      ],
    },
    form: {
      nameLabel: 'Full Name',
      namePlaceholder: 'Write your name',
      phoneLabel: 'Phone',
      phonePlaceholder: 'Your phone number',
      projectLabel: 'Project Type',
      projectPlaceholder: 'Choose the closest option for your project',
      messageLabel: 'Project Note',
      messagePlaceholder: 'Briefly describe the area, expected application and your priorities',
      uploadLabel: 'Upload Photo / Reference',
      uploadHint: 'You can add site photos, inspiration images or files that show the current condition.',
      submit: 'Send Request',
      projectTypes: [
        'Villa Garden',
        'Compound / Residence',
        'Restaurant / Cafe',
        'Hotel / Commercial Site',
        'Commercial Grounds Maintenance',
        'Landscape Design',
        'Irrigation System',
        'Tree Planting',
        'Artificial / Natural Turf',
        'Seed / Roll Turf',
      ],
    },
    footer: {
      description: 'Premium landscape design, implementation and maintenance services.',
      note: 'Ismet Peyzaj',
      copy: 'Kocaeli / Golcuk • 0543 309 32 56 • info@ismetpeyzaj.com',
    },
  },
};
