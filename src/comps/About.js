import React from 'react'
import { Parallax } from 'react-parallax';

export default function About() {
  return (
    <div>
       
        <Parallax bgImage="/path/to/your/image.jpg" strength={500}>
        <div style={{ height: '500px' }}>
          İçerik buraya gelebilir.
          
        </div>
      </Parallax>
      
    </div>
  )
}
