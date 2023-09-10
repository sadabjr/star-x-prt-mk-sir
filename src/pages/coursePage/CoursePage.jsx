import { useLocation } from "react-router-dom";

const CoursePage = () => {
  const location = useLocation();
  const postData = location.state;

  return (
    <div>
      <div className="container my-19 mx-auto md:px-6 min-h-screen">
        <section className="mb-32">
          <div className="flex justify-center m-2 rounded-lg drop-shadow-xl p-5 bg-white">
            <div className="max-w-[700px] text-center py-5">
            <h2 className=" text-3xl font-bold uppercase  text-primary dark:text-primary-400">
              {postData.courseName}
              </h2>
              <h1 className=" text-[1rem] font-bold uppercase">Syllabus</h1>
              
            </div>
          </div>

          <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12 m-2 rounded-lg drop-shadow-xl p-5 bg-white">
            {postData.modules.map((module) => (
              <div key={module.id} className="mb-12 ">
                <div className="flex">
                  <div className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-success"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-2 grow">
                    <p className="mb-1 font-bold">{module.name}</p>
                    {module.description && (
                      <p className="text-neutral-500 dark:text-neutral-300" >
                        {module.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursePage;
