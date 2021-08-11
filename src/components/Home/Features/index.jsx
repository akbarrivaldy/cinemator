import React from 'react'
import FeaturesCard from './FeaturesCard'
import FeatureSingle from './FeatureSingle'
// Images
import image1 from '../../../assets/content/video-editing.jpg'
import image2 from '../../../assets/content/video-editing2.jpg'
import image3 from '../../../assets/content/video-editor.jpg'
import image4 from '../../../assets/content/green-screen.jpg'
import image5 from '../../../assets/content/director.jpg'

export default function Features() {
  const features = [
    {
      title: 'Up to 100 Video Tracks',
      text: 'Utilize up to 100 layers of media to create epic stories with ease',
      image: image1
    },
    {
      title: 'Impresive Video Effects',
      text: 'Access a vast of motion elements, filters, overlays, transitions, animated titles, and royalty-free music.',
      image: image2
    },
    {
      title: 'Advanced Video Editing',
      text: 'Use keyframe, background noise removal, audio equalizer, and other tools to perfect your sound.',
      image: image3
    },
    {
      title: 'Powerful Compositing Tools',
      text: 'Create new worlds by layering clips, applying blending modes, and changing your backgrounds with chroma-key (green screen).',
      image: image4
    },
    {
      title: 'Create Without Limits',
      text: 'Discover infinite ways to express yourself. Achieve a refined look with endless effects.',
      image: image5
    },
  ]

  return (
    <section className="bg-white">
      <div className="container py-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-bold text-center mb-2">Ready for anything</h1>
        { features.map((feature, index) => (
          <div className="w-full sm:w-1/2 my-2">
            <FeaturesCard 
              id={index}
              title={feature.title} 
              text={feature.text}
              image={feature.image} 
            />
          </div>
        )) }
      </div>
      <FeatureSingle title={features[4].title} text={features[4].text} image={features[4].image} />
    </section>
  )
}