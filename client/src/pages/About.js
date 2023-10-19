import React from 'react'
import Card from '../comps/Card'

export default function About() {
  return (
    <div>

      <div className='main-post' >
        <h1>Who we are</h1>
        <p>Dernek Adı, 2023 yılında kurulan bağımsız bir gönüllü kuruluştur. Amacımız toplumumuzun daha iyi bir yer haline gelmesine katkıda bulunmak ve pozitif değişiklikler yaratmaktır. İnsanlar arasında dayanışma ve yardımlaşma kültürünü güçlendirmek için bir araya geldik.</p>
      </div>
      <div className='card-div'>
      <Card/>
      <Card/>
      <Card/>

      </div>
      
    </div>


  )
}
