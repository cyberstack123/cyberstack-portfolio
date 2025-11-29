import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { ArrowUpRight, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Swiper styles are imported globally in index.html to work with importmap

interface ProjectSliderProps {
  id: string;
  title: string;
  category: string;
  images: string[];
  isAdmin?: boolean;
  onDelete?: (id: string) => void;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ id, title, category, images, isAdmin, onDelete }) => {
  if (!images || images.length === 0) return null;

  const handleDelete = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onDelete) onDelete(id);
  };

  return (
    <div className="w-full max-w-[900px] mx-auto mb-20">
      {/* Header Info */}
      <div className="flex justify-between items-end mb-6 px-4 md:px-0">
        <div>
          <span className="text-cyber-red text-xs font-bold uppercase tracking-widest block mb-1">
            {category}
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            {title}
          </h2>
        </div>
        
        <div className="flex items-center gap-4">
             {isAdmin && (
                <div className="flex gap-2 mr-4 border-r border-white/10 pr-4">
                     <Link 
                        to={`/admin/project/${id}`} 
                        className="p-2 bg-white/5 hover:bg-cyber-red rounded-full text-white transition-colors"
                        title="Edit Project"
                     >
                         <Edit2 size={16} />
                     </Link>
                     <button 
                        onClick={handleDelete}
                        className="p-2 bg-white/5 hover:bg-red-600 rounded-full text-red-400 hover:text-white transition-colors"
                        title="Delete Project"
                     >
                         <Trash2 size={16} />
                     </button>
                </div>
             )}
            <Link 
              to={`/project/${id}`} 
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
            >
              View Case Study
              <ArrowUpRight size={16} className="group-hover:text-cyber-red transition-colors" />
            </Link>
        </div>
      </div>

      {/* Slider */}
      <div className="relative rounded-lg overflow-hidden border border-white/5 shadow-2xl bg-neutral-900 group">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full aspect-video md:aspect-[16/9]"
        >
          {images.map((img, index) => (
            <SwiperSlide key={`${id}-slide-${index}`}>
              <div className="w-full h-full relative">
                <img 
                  src={img} 
                  alt={`${title} - Slide ${index + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Footer Info / Dots Spacer */}
      <div className="mt-4 flex justify-center">
         {/* Dots are handled by swiper-pagination, customized in global CSS */}
      </div>
    </div>
  );
};

export default ProjectSlider;