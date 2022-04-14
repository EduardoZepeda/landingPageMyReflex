import React, { useEffect } from 'react'

const SocialProofCard = ({ content, author }) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.social-proof-card')
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', '-translate-y-4', 'transition', 'duration-1000')
          entry.target.classList.remove('opacity-0')
        }
      })
    }, { rootMargin: '0px 0px -50% 0px', threshold: [1.0] })
    cards.forEach((card) => {
      observer.observe(card)
    })
  })

  return (
    <div className='transform transition motion-reduce:transition-none motion-reduce:hover:transform-none social-proof-card mb-16 px-16 py-8 w-96 opacity-0 duration-1000'>
      <p className='text-gray-700'>{content}</p><span className='text-sm text-gray-500'>— {author}</span>
    </div>
  )
}

export default SocialProofCard
