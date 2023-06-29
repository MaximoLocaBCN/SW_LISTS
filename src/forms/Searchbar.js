import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Searchbar.css'
/* import { useLocation, useRoute } from 'wouter'; */
import { imageSources } from '../components/images/imageSources';
import { ImageContext } from '../contexts/imageContext';

export default function Search() /*{setFilteredImages}*/ {
  const {setFilteredImages} = useContext(ImageContext);
  const [searchTerm, setSearchTerm] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (searchTerm) {
      // Filter images based on search term
      const filtered = imageSources.filter((image) =>
        image.attribute.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    } else {
      // If search term is empty, display all images
      setFilteredImages(imageSources);
    }
  }, [searchTerm, setFilteredImages]);
  

  /*const [, setLocation] = useLocation();*/
  const onSubmit = (data) => {
    const { search } = data;
    setSearchTerm(search.trim());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='Searchbar'>
      <input {...register('search', { required: false })} placeholder="Search..." />
      {/* {errors.search && <span>This field is required</span>} */}
      <button type="submit">Search</button>
    </form>
  );
}
