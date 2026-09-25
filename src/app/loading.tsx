const Loading = () => {
  return (
    <main className="min-h-screen bg-black animate-pulse px-6 py-10">

      {/* Hero Skeleton */}
      <section className="bg-[#222630] rounded-2xl p-10 md:p-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          {/* Hero Text */}
          <div className="w-full md:w-1/2 space-y-5">
            <div className="h-4 w-32 bg-gray-700 rounded"></div>

            <div className="h-10 md:h-14 w-full bg-gray-700 rounded"></div>
            <div className="h-10 md:h-14 w-4/5 bg-gray-700 rounded"></div>

            <div className="h-4 w-full bg-gray-700 rounded"></div>
            <div className="h-4 w-4/5 bg-gray-700 rounded"></div>

            <div className="h-12 w-40 bg-gray-700 rounded-2xl"></div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-[400px] h-[300px] bg-gray-700 rounded-xl"></div>
        </div>
      </section>

      {/* Section Title */}
      <section className="mt-10">
        <div className="h-8 w-56 bg-gray-700 rounded mb-6"></div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-[#15181f] border border-gray-800 rounded-xl p-4"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gray-700 rounded-lg"></div>

              {/* Title */}
              <div className="h-5 w-3/4 bg-gray-700 rounded mt-4"></div>

              {/* Equipment */}
              <div className="h-3 w-1/2 bg-gray-700 rounded mt-3"></div>

              {/* Stats */}
              <div className="flex gap-3 mt-4">
                <div className="h-4 w-20 bg-gray-700 rounded"></div>
                <div className="h-4 w-20 bg-gray-700 rounded"></div>
                <div className="h-4 w-14 bg-gray-700 rounded"></div>
              </div>

              {/* Button */}
              <div className="h-10 w-full bg-gray-700 rounded-full mt-5"></div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
};

export default Loading;