import type { Locale } from '../consts';

/**
 * UI string dictionary. Keep keys flat and identical across locales.
 * Content (projects / blog) is translated in the MDX files, not here.
 */
export const ui = {
  en: {
    'site.title': 'Gökdeniz Kuruca — AI Developer, LLM Agents & Computer Vision',
    'site.description':
      'Portfolio of Gökdeniz Kuruca: LLM agents, RAG systems and computer vision, plus mobile apps and games. AI developer at ASELSAN and ASELLABS, Hacettepe University.',
    'site.tagline': 'Signals from a small blue planet',

    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.writing': 'Writing',
    'nav.contact': 'Contact',
    'nav.home': 'Home',
    'nav.allProjects': 'All projects',

    'hero.eyebrow': 'LLM agents · Computer vision · Mobile',
    'hero.title': 'I build intelligent systems that ship.',
    'hero.lede':
      'Gökdeniz Kuruca — AI developer working on LLM agents, Agentic RAG and computer vision at ASELSAN and the ASELLABS AI Laboratory. Hackathon winner, Teknofest finalist, Computer Engineering at Hacettepe University.',
    'hero.cta.work': 'See selected work',
    'hero.cta.cv': 'Download CV',
    'hero.available': 'Open to research, internship & collaboration conversations',
    'hero.rotator': 'LLM agents|agentic RAG|computer vision|mobile apps|research',
    'hero.building': 'Currently building',
    'hero.scroll': 'Scroll',
    'hero.stat.projects': 'shipped projects',
    'hero.stat.finals': 'Teknofest finals',
    'hero.stat.firstValue': '1st',
    'hero.stat.first': 'AA Hackathon',
    'hero.stack': 'Working stack',

    'work.title': 'Selected work',
    'work.subtitle':
      'Competition-grade AI research, production mobile apps and released games. Filter by focus.',
    'work.viewAll': 'View the full archive',
    'work.filter.all': 'All',

    'about.title': 'About',
    'about.body.1':
      'I am a developer drawn to the hard, useful end of technology: LLM agents and retrieval systems, computer vision, and the mobile work that puts those models in front of real people.',
    'about.body.2':
      'I graduated from the Deneyap Technology Workshops (2022), where I spent years moving between AI, robotics, IoT, energy and design tracks. I now study Computer Engineering at Hacettepe University and work with the Hacettepe R&D student club.',
    'about.body.3':
      'Today I build agentic systems — LangGraph workflows, Agentic RAG over Qdrant, local inference on Ollama and vLLM — as an AI developer at ASELSAN and the ASELLABS AI Laboratory, alongside research on how LLM-agent societies take shape. Across Teknofest competitions, hackathons and internships I have led small teams, owned the pipeline, and shipped the product around it. The projects below are the record of that.',

    'experience.title': 'Experience',
    'skills.title': 'Skills & tools',
    'skills.group.languages': 'Languages',
    'skills.group.llm': 'LLM & agents',
    'skills.group.aiml': 'AI / ML',
    'skills.group.mobileGame': 'Mobile & Games',
    'skills.group.tools': 'Tools & infra',

    'writing.title': 'Writing',
    'writing.subtitle': 'Occasional notes on models, builds and competitions.',
    'writing.empty': 'First post coming soon.',
    'writing.readMore': 'Read more',
    'writing.all': 'All posts',
    'writing.back': 'Back to all posts',

    'contact.title': 'Contact',
    'contact.body': 'Open to collaboration, research and internship conversations.',
    'contact.email': 'Get in touch',

    'project.overview': 'Overview',
    'project.role': 'Role',
    'project.stack': 'Stack',
    'project.year': 'Year',
    'project.status': 'Status',
    'project.links': 'Links',
    'project.gallery': 'Gallery',
    'project.next': 'Next project',
    'project.prev': 'Previous project',
    'project.back': 'Back to work',
    'project.featured': 'Featured',

    'archive.title': 'Project archive',
    'archive.subtitle': 'Everything — featured work, side projects and coursework.',
    'archive.year': 'Year',
    'archive.name': 'Project',
    'archive.category': 'Focus',

    'cat.ai': 'AI & ML',
    'cat.mobile': 'Mobile',
    'cat.game': 'Games',
    'cat.research': 'Research',
    'cat.education': 'Coursework',

    'status.shipped': 'Shipped',
    'status.finalist': 'Teknofest finalist',
    'status.award': 'Award-winning',
    'status.wip': 'In progress',
    'status.archived': 'Archived',

    'theme.toggle': 'Toggle colour theme',
    'lang.switch': 'Türkçe',
    'footer.builtWith': 'Built with Astro. Source on GitHub.',
    'notFound.title': 'Lost in space',
    'notFound.body': 'That page drifted out of orbit.',
    'notFound.home': 'Return home',
  },

  tr: {
    'site.title': 'Gökdeniz Kuruca — Yapay Zekâ Geliştiricisi, LLM Ajanları & Bilgisayarlı Görü',
    'site.description':
      'Gökdeniz Kuruca portfolyosu: LLM ajanları, RAG sistemleri ve bilgisayarlı görü; ayrıca mobil uygulamalar ve oyunlar. ASELSAN ve ASELLABS’ta yapay zekâ geliştiricisi, Hacettepe Üniversitesi.',
    'site.tagline': 'Küçük mavi bir gezegenden sinyaller',

    'nav.work': 'Projeler',
    'nav.about': 'Hakkımda',
    'nav.experience': 'Deneyim',
    'nav.skills': 'Yetenekler',
    'nav.writing': 'Yazılar',
    'nav.contact': 'İletişim',
    'nav.home': 'Ana sayfa',
    'nav.allProjects': 'Tüm projeler',

    'hero.eyebrow': 'LLM ajanları · Bilgisayarlı görü · Mobil',
    'hero.title': 'Sahaya çıkan akıllı sistemler kuruyorum.',
    'hero.lede':
      'Gökdeniz Kuruca — ASELSAN ve ASELLABS Yapay Zekâ Laboratuvarı’nda LLM ajanları, Agentic RAG ve bilgisayarlı görü üzerine çalışan yapay zekâ geliştiricisi. Hackathon birincisi, Teknofest finalisti, Hacettepe Üniversitesi Bilgisayar Mühendisliği.',
    'hero.cta.work': 'Seçili projeler',
    'hero.cta.cv': 'CV indir',
    'hero.available': 'Araştırma, staj ve iş birliği görüşmelerine açığım',
    'hero.rotator': 'LLM ajanları|agentic RAG|bilgisayarlı görü|mobil uygulama|araştırma',
    'hero.building': 'Şu an üzerinde çalıştığım',
    'hero.scroll': 'Kaydır',
    'hero.stat.projects': 'yayınlanan proje',
    'hero.stat.finals': 'Teknofest finali',
    'hero.stat.firstValue': '1.',
    'hero.stat.first': 'AA Hackathon',
    'hero.stack': 'Kullandığım teknolojiler',

    'work.title': 'Seçili projeler',
    'work.subtitle':
      'Yarışma seviyesinde YZ araştırması, üretimdeki mobil uygulamalar ve yayınlanmış oyunlar. Odağa göre süz.',
    'work.viewAll': 'Tüm arşive git',
    'work.filter.all': 'Hepsi',

    'about.title': 'Hakkımda',
    'about.body.1':
      'Teknolojinin zor ve işe yarayan tarafına ilgi duyan bir geliştiriciyim: LLM ajanları ve erişim sistemleri, bilgisayarlı görü ve bu modelleri gerçek insanların önüne koyan mobil işler.',
    'about.body.2':
      'Deneyap Teknoloji Atölyeleri’nden (2022) mezun oldum; yıllarca yapay zekâ, robotik, IoT, enerji ve tasarım eğitimleri arasında çalıştım. Şu anda Hacettepe Üniversitesi Bilgisayar Mühendisliği okuyor ve Hacettepe Ar-Ge öğrenci kulübüyle çalışıyorum.',
    'about.body.3':
      'Bugün ASELSAN ve ASELLABS Yapay Zekâ Laboratuvarı’nda ajan tabanlı sistemler kuruyorum — LangGraph iş akışları, Qdrant üzerinde Agentic RAG, Ollama ve vLLM ile yerel çıkarım — ve LLM ajan topluluklarının nasıl şekillendiği üzerine araştırma yürütüyorum. Teknofest yarışmaları, hackathonlar ve stajlarda küçük ekiplere liderlik ettim, hattı üstlendim ve etrafındaki ürünü yayına aldım. Aşağıdaki projeler bunun kaydı.',

    'experience.title': 'Deneyim',
    'skills.title': 'Yetenekler & araçlar',
    'skills.group.languages': 'Diller',
    'skills.group.llm': 'LLM & ajanlar',
    'skills.group.aiml': 'Yapay Zekâ / ML',
    'skills.group.mobileGame': 'Mobil & Oyun',
    'skills.group.tools': 'Araçlar & altyapı',

    'writing.title': 'Yazılar',
    'writing.subtitle': 'Modeller, projeler ve yarışmalar üzerine ara sıra notlar.',
    'writing.empty': 'İlk yazı çok yakında.',
    'writing.readMore': 'Devamını oku',
    'writing.all': 'Tüm yazılar',
    'writing.back': 'Tüm yazılara dön',

    'contact.title': 'İletişim',
    'contact.body': 'İş birliği, araştırma ve staj görüşmelerine açığım.',
    'contact.email': 'İletişime geç',

    'project.overview': 'Genel bakış',
    'project.role': 'Rol',
    'project.stack': 'Teknolojiler',
    'project.year': 'Yıl',
    'project.status': 'Durum',
    'project.links': 'Bağlantılar',
    'project.gallery': 'Galeri',
    'project.next': 'Sonraki proje',
    'project.prev': 'Önceki proje',
    'project.back': 'Projelere dön',
    'project.featured': 'Öne çıkan',

    'archive.title': 'Proje arşivi',
    'archive.subtitle': 'Her şey — öne çıkan işler, yan projeler ve ders projeleri.',
    'archive.year': 'Yıl',
    'archive.name': 'Proje',
    'archive.category': 'Odak',

    'cat.ai': 'Yapay Zekâ & ML',
    'cat.mobile': 'Mobil',
    'cat.game': 'Oyun',
    'cat.research': 'Araştırma',
    'cat.education': 'Ders projeleri',

    'status.shipped': 'Yayında',
    'status.finalist': 'Teknofest finalisti',
    'status.award': 'Ödüllü',
    'status.wip': 'Devam ediyor',
    'status.archived': 'Arşivlendi',

    'theme.toggle': 'Renk temasını değiştir',
    'lang.switch': 'English',
    'footer.builtWith': 'Astro ile yapıldı. Kaynak kod GitHub’da.',
    'notFound.title': 'Uzayda kaybolduk',
    'notFound.body': 'O sayfa yörüngeden çıkmış.',
    'notFound.home': 'Ana sayfaya dön',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
