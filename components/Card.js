import React, { useEffect } from 'react'

const Card = ({title, image_url, text}) => {
    useEffect(()=>{
        const icons = document.querySelectorAll(".icon");
        let observer = new IntersectionObserver(function(entries) {
            entries.forEach((entry)=>{
              if(entry.isIntersecting){
                entry.target.classList.add('transform', 'rotate-180', 'transition', 'duration-1000')}
                setTimeout(()=>{
                    entry.target.classList.remove('transform', 'rotate-180')
                }, 1000)
              })
        }, { rootMargin: "0px 0px -50% 0px", threshold: [1.0] });
        icons.forEach((icon)=>{
            observer.observe(icon)
        })
    })
    return (
        <div className="h-96 pt-12 px-16 rounded-sm text-gray-700 bg-white w-96 m-8 shadow">
        <img className="icon" src={image_url} alt=""/>
            <h3 className="pt-4 text-xl font-bold">{title}</h3>
            <p className="text-md font-bold">{text}</p>
        </div>
        )
}

export default Card