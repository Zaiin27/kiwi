


import blogData from '../../../utils/data';

const BlogSection = () => {
  return (
    <div className="bg-[#FFEB9A] p-6 md:p-10">
      <div className="mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-normal OpenSans"><span className="h-[0.3125rem] rounded-[0.46875rem] w-[2rem] bg-black inline-block mb-2 mr-1"></span> Work Process</span>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold Montserrat">{blogData.sectionTitle}</h2>
        <p className="lg:max-w-[40rem] md:max-w-[20rem] OpenSans text-gray-700 mt-4 md:mt-0">
          {blogData.sectionDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
       
       
        <div className="md:col-span-3 bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="h-64 md:h-96 flex items-center justify-center bg-gray-100">
            <div className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h3 className="lg:text-[2.2506rem] md:text-[1.8rem] text-[1.5rem] font-semibold inter text-gray-600 mb-2">
              {blogData.featuredArticle.title}
            </h3>
            <p className="text-[#6D758F] mb-4 lg:text-[1.2006rem] md:text-[1rem] text-[0.9rem] inter">
              {blogData.featuredArticle.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                <span className="text-sm text-[#6D758F] inter">{blogData.featuredArticle.author}</span>
              </div>
              <span className="text-sm text-[#6D758F] inter">{blogData.featuredArticle.date}</span>
            </div>
          </div>
        </div>

      
       <div className="md:col-span-2 grid grid-cols-1 gap-8">
          {blogData.articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm flex">
           
              <div className="w-[40%] flex items-center justify-center bg-gray-100">
                <div className="w-full h-24 md:h-28 flex items-center justify-center">
                  <div className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-[60%] p-4 flex flex-col justify-center">
                <h3 className="md:text-[0.8rem] lg:text-[1.0506rem] text-[0.8rem] font-semibold inter text-gray-700 mb-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-xs text-gray-500 inter font-normal">{article.author}</span>
                  </div>
                  <span className="text-xs text-gray-500 inter font-normal">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;