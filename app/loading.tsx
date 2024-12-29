export default function Loading() {
    return (
        <div className="flex bg-gray-100 min-h-screen">
            {/* Sidebar skeleton */}
            <div className="hidden sm:block fixed top-0 left-0 h-full w-16 md:w-48 lg:w-64 xl:w-72 bg-blue-800" />

            <main className="flex flex-col flex-grow w-full sm:ml-16 md:ml-48 lg:ml-64 xl:ml-72">
                <div className="flex flex-col flex-grow p-4 sm:p-6 md:p-8 lg:p-10 lg:flex-row lg:space-x-8 mb-16 sm:mb-0 md:h-screen">
                    {/* Profile Card skeleton */}
                    <section className="flex flex-col h-full w-full lg:w-[45%] xl:w-[40%] bg-gray-50 rounded-xl shadow-lg mb-6 lg:mb-0 animate-pulse">
                        <div className="relative w-full pt-[100%] bg-gray-300" />
                        <div className="p-4 sm:p-6 lg:p-8 space-y-4">
                            <div className="h-4 bg-gray-300 rounded w-3/4" />
                            <div className="h-4 bg-gray-300 rounded w-1/2" />
                            <div className="grid grid-cols-2 gap-4">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-4 bg-gray-300 rounded" />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Main content section skeleton */}
                    <section className="flex flex-1 w-full lg:w-[55%] xl:w-[60%] bg-gray-50 rounded-xl shadow-lg p-4 sm:p-6 animate-pulse">
                        <div className="w-full space-y-4">
                            <div className="h-8 bg-gray-300 rounded w-1/3" />
                            <div className="space-y-3">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-4 bg-gray-300 rounded" />
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Mobile navigation skeleton */}
                <div className="sm:hidden fixed bottom-0 left-0 right-0 h-16 bg-blue-800" />
            </main>
        </div>
    );
}