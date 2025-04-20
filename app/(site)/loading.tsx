export default function Loading() {
  return (
    <div className="flex bg-neutral-100 min-h-screen">
      {/* Sidebar skeleton - Use primary color */}
      <div className="hidden sm:block fixed top-0 left-0 h-full w-[60px] bg-primary-600 animate-pulse" />

      <main className="flex flex-col flex-grow w-full sm:ml-[60px]">
        <div className="flex flex-col flex-grow p-4 md:p-6 lg:p-8 lg:flex-row lg:space-x-6 mb-16 sm:mb-0 md:h-screen">
          {/* Profile Card skeleton - Use neutral card bg, update placeholder colors */}
          <section className="flex flex-col h-fit lg:h-auto w-full lg:w-1/3 bg-white rounded-lg shadow-sm mb-6 lg:mb-0 overflow-hidden animate-pulse">
            {/* Gradient Header Placeholder */}
            <div className="h-28 bg-gradient-to-r from-primary-400 to-primary-300" />
            <div className="p-6 space-y-4">
              {/* Badges Placeholder */}
              <div className="flex flex-wrap gap-2">
                <div className="h-6 bg-neutral-200 rounded-full w-2/5" />
                <div className="h-6 bg-neutral-200 rounded-full w-1/3" />
                <div className="h-6 bg-neutral-200 rounded-full w-2/5" />
              </div>
              {/* Contact Info Placeholder */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="h-4 bg-neutral-200 rounded w-3/4" />
                <div className="h-4 bg-neutral-200 rounded w-3/4" />
              </div>
              {/* Button Placeholder */}
              <div className="h-9 bg-neutral-200 rounded-lg w-full mt-4" />
              {/* Social Icons Placeholder */}
              <div className="flex justify-evenly pt-2">
                <div className="h-10 w-10 bg-neutral-200 rounded-full" />
                <div className="h-10 w-10 bg-neutral-200 rounded-full" />
                <div className="h-10 w-10 bg-neutral-200 rounded-full" />
                <div className="h-10 w-10 bg-neutral-200 rounded-full" />
              </div>
            </div>
          </section>

          {/* Main content section skeleton - Use neutral card bg, update placeholder colors */}
          <section className="flex flex-1 w-full lg:w-2/3 bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="w-full space-y-6">
              {/* Section Header Placeholder */}
              <div className="h-8 bg-neutral-200 rounded w-1/3 mb-6" />
              {/* Text Lines Placeholder */}
              <div className="space-y-3">
                <div className="h-4 bg-neutral-200 rounded w-full" />
                <div className="h-4 bg-neutral-200 rounded w-5/6" />
                <div className="h-4 bg-neutral-200 rounded w-full" />
                <div className="h-4 bg-neutral-200 rounded w-4/6" />
                <div className="h-4 bg-neutral-200 rounded w-full" />
                <div className="h-4 bg-neutral-200 rounded w-3/6" />
              </div>
            </div>
          </section>
        </div>

        {/* Mobile navigation skeleton - Use primary color */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 h-16 bg-primary-600 animate-pulse" />
      </main>
    </div>
  );
}
