import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../projects-data";

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project
      ? `${project.title} — Jennifer Velasquez`
      : "Project — Jennifer Velasquez",
    description: project?.description?.[0] ?? "Project detail",
  };
};

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section className="pt-32 md:pt-40 pb-20">
      <div className="container">
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {project.year} · {project.category}
          </span>
          <span className="px-4 py-1.5 rounded-full bg-muted text-black text-sm font-medium">
            {project.school}
          </span>
        </div>

        <h1 className="mb-3">{project.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          {project.tagline}
        </p>

        <div className="relative w-full rounded-2xl overflow-hidden bg-muted mb-12">
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl">About the project</h3>
            {project.description.map((paragraph, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            {project.externalLink && (
              <Link
                href={project.externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit mt-2 px-6 py-3 border border-primary rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {project.externalLink.label}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </Link>
            )}

            {project.hasVideoSlot && (
              <div className="mt-6">
                <h4 className="text-xl mb-4">Project demo video</h4>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted border border-muted flex items-center justify-center">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster={project.image}
                  >
                    <source src="/videos/loss-prevention-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Drop your video file at{" "}
                  <code className="text-primary">
                    /public/videos/loss-prevention-demo.mp4
                  </code>{" "}
                  to enable playback.
                </p>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-32 p-6 md:p-8 rounded-2xl bg-muted">
              <h4 className="text-xl mb-5">Project details</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex flex-col gap-1 pb-4 border-b border-gray-300">
                  <span className="text-sm text-muted-foreground">Year</span>
                  <span className="text-base text-black font-medium">
                    {project.year}
                  </span>
                </li>
                <li className="flex flex-col gap-1 pb-4 border-b border-gray-300">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <span className="text-base text-black font-medium">
                    {project.category}
                  </span>
                </li>
                <li className="flex flex-col gap-1 pb-4 border-b border-gray-300">
                  <span className="text-sm text-muted-foreground">Institution</span>
                  <span className="text-base text-black font-medium">
                    {project.school}
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground">Format</span>
                  <span className="text-base text-black font-medium">
                    {project.tagline}
                  </span>
                </li>
              </ul>

              {project.highlights && project.highlights.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-xl mb-5">Highlights</h4>
                  <ul className="flex flex-col gap-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex flex-col gap-1">
                        <span className="text-base text-primary font-semibold">
                          {h.label}
                        </span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {h.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>

        <div className="mt-20 pt-10 border-t border-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Next project</p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-2xl md:text-3xl text-black hover:text-primary transition-colors"
            >
              {nextProject.title} →
            </Link>
          </div>
          <Link
            href="/#projects"
            className="px-6 py-3 border border-black rounded-full text-black hover:border-primary hover:text-primary transition-colors"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
