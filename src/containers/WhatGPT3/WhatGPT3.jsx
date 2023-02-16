import { Feature } from '../../components'
import './what-gpt3.css'

const features = [
  {
    title: 'What is GPT-3',
    text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',
  },
  {
    title: 'Chatbots',
    text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
  },
  {
    title: 'Knowledgebase',
    text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
  },
  {
    title: 'Education',
    text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
  },
]

const WhatGPT3 = () => (
  <div
    className='whatgpt3 section__margin'
    id='wgpt3'
  >
    <div className='whatgpt3__feature'>
      <Feature
        title={features[0].title}
        text={features[0].text}
      />
    </div>

    <div className='whatgpt3__heading'>
      <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>

      <p>Explore the Library</p>
    </div>

    <div className='whatgpt3__features'>
      {features.slice(1, 4).map((feature, i) => (
        <Feature
          title={feature.title}
          text={feature.text}
          key={i}
        />
      ))}
    </div>
  </div>
)

export default WhatGPT3
