import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Stagger } from "@/components/motion/Stagger";
import { CategoryCard } from "@/components/category/CategoryCard";
import { getFeaturedCategories } from "@/lib/catalog";

export function CategoryShowcase() {
  const categories = getFeaturedCategories().filter((c) => c.slug !== "farm-experience");
  const [first, second, ...rest] = categories;

  return (
    <Section space="lg" ariaLabel="Beli mengikut kategori">
      <Container>
        <SectionHeading
          eyebrow="Terokai rangkaian kami"
          title="Segala tentang buah tin, di satu tempat"
          description="Daripada buah paling segar hingga pokok yang boleh anda tanam sendiri, pilih cara anda paling suka menikmati buah tin."
        />

        {/* Two large lead tiles */}
        <Stagger gap={110} className="mt-12 grid gap-5 lg:grid-cols-2">
          {[first, second].filter(Boolean).map((c) => (
            <CategoryCard
              key={c.slug}
              category={c}
              featured
              priority
              sizes="(max-width: 1024px) 92vw, 46vw"
            />
          ))}
        </Stagger>

        {/* Supporting four-up row */}
        <Stagger gap={80} className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {rest.map((c) => (
            <CategoryCard key={c.slug} category={c} sizes="(max-width: 640px) 45vw, 22vw" />
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
