import React, { useState } from 'react';
import { useBlogs } from '../../hooks/useBlogs';
import BlogSummary from '../BlogSummary';
import { BlogPost } from '../../types/blog';

const BlogSection: React.FC = () => {
  const { blogs, loading, error } = useBlogs();
  const [currentPage, setCurrentPage] = useState(0);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const blogsPerPage = 2;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const currentBlogs = blogs.slice(currentPage * blogsPerPage, (currentPage + 1) * blogsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <section className="py-16 bg-purple-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">
          Tips, tendencias y todo lo que necesitas para impulsar el crecimiento de tu marca.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentBlogs.map((blog: BlogPost) => (
            <BlogSummary key={blog.slug} {...blog} />
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Anterior
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className={`px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 ${currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
