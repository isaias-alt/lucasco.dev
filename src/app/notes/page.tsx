import BlurFade from "@/components/magicui/blur-fade"

const BLUR_FADE_DELAY = 0.04

const NotesPage = () => {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Notes
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              I like to learn
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I study a lot, write notes, and share them with friends. here are some of my notes from school.
            </p>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3 py-40">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold">Here will be my notes</h2>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}

export default NotesPage