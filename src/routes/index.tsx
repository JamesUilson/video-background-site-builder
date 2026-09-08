import { createFileRoute } from "@tanstack/react-router";
import heroVideo from "@/assets/hero.mp4.asset.json";
import news1 from "@/assets/news1.jpg";
import news2 from "@/assets/news2.jpg";
import news3 from "@/assets/news3.jpg";
import tower from "@/assets/tower.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O'zbekiston Biznes Diplomatiyasi Uyushmasi | Invest. Partner. Grow." },
      {
        name: "description",
        content:
          "O'zbekistonda investitsiya imkoniyatlari, islohotlar, soliq siyosati va xalqaro hamkorlik. Ishonchli hamkorlik, barqaror rivojlanish.",
      },
      {
        property: "og:title",
        content: "O'zbekiston Biznes Diplomatiyasi Uyushmasi",
      },
      {
        property: "og:description",
        content:
          "Yangi imkoniyatlar O'zbekistonda — investitsiya, islohotlar va xalqaro hamkorlik platformasi.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  "Bosh sahifa",
  "O'zbekiston",
  "Investitsiyalar",
  "Hamkorlik",
  "Media",
  "Biz haqimizda",
];

const stats = [
  { value: "$120B", label: "Xorijiy investitsiyalar", note: "(2018–2024)" },
  { value: "6.5%", label: "YaIM o'sishi", note: "(2023–2024)" },
  { value: "$65,93B", label: "Tashqi savdo aylanmasi", note: "(2024)" },
  { value: "8,9%", label: "Kambag'allikni kamaytirish", note: "(2024)" },
];

const advantages = [
  {
    title: "Strategik joylashuv",
    text: "Osiyo, Yevropa va Yaqin Sharq o'rtasidagi muhim tranzit nuqta",
  },
  {
    title: "Yosh va malakali aholi",
    text: "Aholining 60% dan ortig'i 30 yoshgacha",
  },
  {
    title: "Barqaror iqtisodiy o'sish",
    text: "So'nggi yillarda yuqori o'sish sur'atlari",
  },
  {
    title: "Quvvatli investitsiya muhiti",
    text: "Imtiyozlar, erkin iqtisodiy zonalar va islohotlar",
  },
];

const reforms = [
  {
    year: "2019",
    uz: "\"Investitsiyalar va investitsiya faoliyati to'g'risida\"gi Qonun qabul qilindi",
    cn: "《投资与投资活动法》获得通过",
  },
  {
    year: "2019",
    uz: "\"Davlat-xususiy sheriklik to'g'risida\"gi Qonun",
    cn: "《公私合作伙伴关系法》",
  },
  {
    year: "2024",
    uz: "Xorijiy investorlar uchun imtiyozlar yagona reestrini shakllantirish to'g'risidagi Qonun",
    cn: "《关于建立外国投资者特权统一登记册的法律》",
  },
  {
    year: "2025",
    uz: "Davlat ulushi mavjud yirik korxonalarni xalqaro bozorga xususiylashtirish to'g'risidagi Qonun",
    cn: "关于在国际市场上对国有大型企业进行私有化的法律",
  },
];

const taxOld = [
  ["Qo'shilgan qiymat solig'i", "20%"],
  ["Mulk solig'i", "5%"],
  ["Shaxsiy daromad solig'i", "22,5%"],
];

const taxNew = [
  ["Qo'shilgan qiymat solig'i", "12%"],
  ["Mulk solig'i", "1,5%"],
  ["Shaxsiy daromad solig'i", "12%"],
];

const chinaFacts = [
  "9 ta ustuvor soha",
  "752 ta loyiha",
  "$36.2 mlrd jami hajm",
  "Barcha hududlar qamrovi",
];

const roadFeatures = [
  {
    title: "Strategik tranzit",
    text: "Xalqaro transport yo'laklari chorrahasida",
  },
  { title: "Keng hamkorlik", text: "20+ davlat bilan savdo aloqalari" },
  {
    title: "Yangi bozorlar",
    text: "Yevropa, Osiyo va Yaqin Sharqqa chiqish imkoniyati",
  },
];

const salaries = [
  ["Ishlab chiqarish sektori", "$250–350 / oy"],
  ["To'qimachilik sanoati", "$200–280 / oy"],
  ["Xizmat ko'rsatish", "$300–400 / oy"],
  ["IT va raqamli soha", "$400–600 / oy"],
];

const news = [
  {
    img: news1,
    title: "O'zbekiston va Xitoy: yangi loyihalar, yangi imkoniyatlar",
    date: "12 Mart 2025",
  },
  {
    img: news2,
    title: "Investitsiya muhitini yanada yaxshilash bo'yicha yangi chora-tadbirlar",
    date: "5 Mart 2025",
  },
  {
    img: news3,
    title: "O'zbekiston — mintaqaviy hamkorlikning yangi bosqichi",
    date: "28 Fevral 2025",
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 ${
          light
            ? "border-primary-foreground/70 text-primary-foreground"
            : "border-primary/70 text-primary"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <path d="M3 12h18M4.5 7h15M4.5 17h15" />
        </svg>
      </div>
      <div className={`text-[11px] font-semibold leading-tight tracking-wide ${light ? "text-primary-foreground" : "text-primary"}`}>
        O'ZBEKISTON
        <br />
        BIZNES DIPLOMATIYASI
        <br />
        UYUSHMASI
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo light />
          <nav className="hidden items-center gap-7 text-sm text-primary-foreground/90 lg:flex">
            {nav.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`transition-colors hover:text-accent ${i === 0 ? "text-accent" : ""}`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-primary-foreground/80 sm:inline">UZ</span>
            <a
              href="#"
              className="rounded-md bg-navy-deep px-5 py-2.5 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/20 transition-colors hover:bg-primary"
            >
              Bog'lanish
            </a>
          </div>
        </div>
      </header>

      {/* Hero with fullscreen video */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 pt-32 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="animate-fade-up">
            <p className="eyebrow text-accent">Invest. Partner. Grow.</p>
            <h1 className="mt-5 text-5xl leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl">
              Yangi Imkoniyatlar
              <br />
              O'zbekistonda
            </h1>
            <p className="mt-6 max-w-md text-base text-primary-foreground/80">
              Ishonchli hamkorlik. Barqaror rivojlanish.
              <br />
              Umumiy farovonlik.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#investitsiya"
                className="inline-flex items-center gap-2 rounded-md bg-navy-deep px-6 py-3.5 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/25 transition-transform hover:-translate-y-0.5"
              >
                Investitsiya imkoniyatlari <Arrow />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-background/95 px-6 py-3.5 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
              >
                Taqdimot yuklab olish
              </a>
            </div>
          </div>

          <div className="animate-fade-up rounded-xl bg-background/95 p-6 shadow-2xl backdrop-blur lg:justify-self-end lg:max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">乌兹别克斯坦商务外交协会</p>
            <button className="mt-5 flex items-center gap-3 text-sm font-medium text-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Videoni tomosha qilish
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-surface-soft">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-start gap-4">
              <span className="mt-1 h-9 w-9 shrink-0 rounded-md bg-accent/20 ring-1 ring-accent/40" />
              <div>
                <div className="text-2xl font-semibold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground">
                  {s.label} <span className="text-xs">{s.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Uzbekistan */}
      <section id="investitsiya" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-muted-foreground">Why Uzbekistan?</p>
            <h2 className="mt-4 text-4xl leading-tight text-primary sm:text-5xl">
              Nega aynan
              <br />
              O'zbekiston?
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              O'zbekiston — strategik joylashuvi, yosh va malakali mehnat resurslari,
              barqaror iqtisodiy o'sishi hamda ochiq investitsiya muhiti bilan Markaziy
              Osiyodagi eng jozibador hamkorlik platformasidir.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Batafsil ma'lumot <Arrow />
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent-foreground ring-1 ring-accent/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <h3 className="text-base font-semibold text-primary">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reforms */}
      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl tracking-wide sm:text-4xl">ASOSIY ISLOHOTLAR</h2>
              <p className="mt-1 text-primary-foreground/70">重大改革</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-accent">
              Barcha islohotlar <Arrow />
            </a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reforms.map((r, i) => (
              <div
                key={i}
                className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6"
              >
                <div className="text-3xl font-semibold text-accent">{r.year}</div>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90">{r.uz}</p>
                <p className="mt-3 text-xs text-primary-foreground/60">{r.cn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax */}
      <section className="bg-surface-soft py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl text-primary sm:text-4xl">SOLIQ SIYOSATI</h2>
              <p className="mt-1 text-muted-foreground">税收改革</p>
            </div>
            <p className="text-muted-foreground">
              Soddalashtirilgan va raqobatbardosh soliq tizimi investorlar uchun qo'shimcha
              imkoniyatlar yaratadi.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_0.6fr] lg:items-stretch">
            {[
              { year: "2018", rows: taxOld },
              { year: "2024", rows: taxNew },
            ].map((block) => (
              <div key={block.year} className="rounded-lg bg-card p-6 shadow-sm">
                <div className="text-2xl font-semibold text-primary">{block.year}</div>
                <div className="mt-4 space-y-3">
                  {block.rows.map(([label, val]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-md bg-surface-soft px-4 py-3 text-sm"
                    >
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-semibold text-primary">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <img
              src={tower}
              alt="Toshkentdagi zamonaviy biznes markazi"
              loading="lazy"
              width={900}
              height={1200}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* China cooperation */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="max-w-md text-3xl leading-snug text-primary sm:text-4xl">
              XITOY XALQ RESPUBLIKASI BILAN INVESTITSIYA HAMKORLIGI
            </h2>
            <p className="mt-2 text-muted-foreground">与中华人民共和国的投资合作</p>
            <p className="mt-6 max-w-md text-muted-foreground">
              Xitoy — O'zbekistonning strategik hamkori va asosiy investorlaridan biri.
              2025-yil uchun investitsiya loyihalari hajmi:
            </p>
            <div className="mt-8 flex flex-wrap items-end gap-4">
              <div className="text-5xl font-semibold text-primary">$140</div>
              <div className="pb-2">
                <div className="text-lg text-primary">milliard</div>
                <div className="text-sm text-muted-foreground">140亿美元</div>
              </div>
              <a
                href="#"
                className="ml-auto inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Batafsil ma'lumot <Arrow />
              </a>
            </div>
          </div>
          <div className="grid gap-4 rounded-lg bg-surface-soft p-6">
            {chinaFacts.map((f) => (
              <div key={f} className="flex items-center gap-4 rounded-md bg-card px-5 py-4 shadow-sm">
                <span className="h-8 w-8 shrink-0 rounded-md bg-accent/20 ring-1 ring-accent/40" />
                <span className="text-sm text-primary">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Belt and road */}
      <section className="bg-surface-soft py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl text-primary sm:text-4xl">BIR MAKON – BIR YO'L</h2>
          <p className="mt-1 text-muted-foreground">丝绸之路经济带</p>
          <p className="mt-4 max-w-md text-muted-foreground">
            O'zbekiston — Osiyoni Yevropa bilan bog'lovchi yangi iqtisodiy makoni.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-6">
              {roadFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <span className="mt-1 h-10 w-10 shrink-0 rounded-md bg-accent/15 ring-1 ring-accent/30" />
                  <div>
                    <h3 className="text-base font-semibold text-primary">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-border bg-card p-6">
              <svg viewBox="0 0 600 300" className="h-full w-full" fill="none">
                <path
                  d="M40 90 C 140 40, 220 150, 300 140 S 470 60, 560 100"
                  stroke="oklch(0.76 0.11 82)"
                  strokeWidth="2.5"
                  strokeDasharray="1 0"
                />
                <path
                  d="M60 200 C 160 240, 260 180, 340 200 S 480 250, 560 210"
                  stroke="oklch(0.6 0.118 184.704)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {[
                  [40, 90, "Moscow"],
                  [300, 140, "Tashkent"],
                  [560, 100, "China"],
                  [60, 200, "Mersin"],
                  [340, 200, "Karachi"],
                ].map(([x, y, label]) => (
                  <g key={label as string}>
                    <circle cx={x as number} cy={y as number} r="5" fill="oklch(0.29 0.075 258)" />
                    <text
                      x={(x as number) + 10}
                      y={(y as number) - 8}
                      fontSize="13"
                      fill="oklch(0.29 0.075 258)"
                    >
                      {label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Labour */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl leading-snug text-primary sm:text-4xl">
              O'ZBEKISTON MEHNAT RESURSLARI
            </h2>
            <p className="mt-1 text-muted-foreground">乌兹别克斯坦劳动力资源</p>
            <p className="mt-5 text-muted-foreground">
              Yosh, malakali va raqobatbardosh mehnat resurslari — barqaror rivojlanish
              kafolati.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Batafsil ma'lumot <Arrow />
            </a>
          </div>
          <div className="space-y-8">
            <div>
              <div className="text-4xl font-semibold text-primary">60%+</div>
              <p className="text-sm text-muted-foreground">Aholi 30 yoshgacha</p>
            </div>
            <div>
              <div className="text-4xl font-semibold text-primary">650 ming+</div>
              <p className="text-sm text-muted-foreground">
                Har yili kasb-hunar kollejlari bitiruvchilari
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="eyebrow text-muted-foreground">Mehnat resurslari narxlari</div>
            <div className="mt-4 divide-y divide-border">
              {salaries.map(([role, pay]) => (
                <div key={role} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-muted-foreground">{role}</span>
                  <span className="font-semibold text-primary">{pay}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-surface-soft py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl text-primary sm:text-4xl">YANGILIKLAR</h2>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-primary">
              Barcha yangiliklar <Arrow />
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <article
                key={n.title}
                className="overflow-hidden rounded-lg bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <img
                  src={n.img}
                  alt={n.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-base font-semibold leading-snug text-primary">{n.title}</h3>
                  <p className="mt-3 text-xs text-muted-foreground">{n.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep py-14 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 text-sm text-primary-foreground/70">乌兹别克斯坦商务外交协会</p>
          </div>
          <div>
            <div className="eyebrow text-accent">Tezkor havolalar</div>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              {nav.map((n) => (
                <li key={n}>
                  <a href="#" className="hover:text-accent">
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow text-accent">Aloqa</div>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>Toshkent, O'zbekiston</li>
              <li>info@uzbda.uz</li>
              <li>+998 71 000 00 00</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow text-accent">Ijtimoiy tarmoqlar</div>
            <div className="mt-4 flex gap-3">
              {["in", "tg", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 text-xs uppercase hover:bg-primary-foreground/20"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-primary-foreground/15 px-6 pt-6 text-xs text-primary-foreground/60">
          <span>© 2025 O'zbekiston Biznes Diplomatiyasi Uyushmasi. Barcha huquqlar himoyalangan.</span>
          <span>Invest. Partner. Grow.</span>
        </div>
      </footer>
    </div>
  );
}
