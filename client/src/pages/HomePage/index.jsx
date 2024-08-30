import BlogCard from "../../components/BlogCard";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import backgroundImg from '../../assets/bg.png';

const HomePage = () => {
  const blogs = [
    { title: 'Blog Title 1', description: 'This is the description for blog 1' },
    { title: 'Blog Title 2', description: 'This is the description for blog 2' },
    { title: 'Blog Title 3', description: 'This is the description for blog 3' },
    // Add more blogs here
  ];

  return (
    <div
      className="flex flex-col min-h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="backdrop-blur-md bg-opacity-30 bg-black">
        <Navbar />
      </div>

      <div className="flex flex-grow">
        <div className="w-64 backdrop-blur-md bg-opacity-30 bg-black">
          <Sidebar />
        </div>

          <div className="flex-grow relative p-8 backdrop-blur-md bg-opacity-30 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={index} title={blog.title} description={blog.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
