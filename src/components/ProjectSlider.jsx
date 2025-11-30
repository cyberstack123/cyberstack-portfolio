import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectSlider = ({ project }) => {
  return (
    <div className="slider-container">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px'}}>
        <div>
          <span className="text-red font-bold uppercase" style={{fontSize: '12px'}}>{project.category}</span>
          <h2 style={{fontSize: '32px', fontWeight: '800', lineHeight: 1}}>{project.title}</h2>
        </div>
        <Link to={`/project/${project.id}`} className="text-muted" style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px'}}>
          View Case Study <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="slider-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          style={{ width: '100%', aspectRatio: '16/9' }}
        >
          {project.gallery.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSlider;