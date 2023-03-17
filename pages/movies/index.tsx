import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req:NextApiRequest, 
  res:NextApiResponse) {
  res.status(200).json([
    {
      id: 1,
      backgroundImg: "https://www.laughingplace.com/w/wp-content/uploads/2021/02/raya-and-the-last-dragon-soundtrack.jpeg",
      cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg",
      description: "Watch with Premier Access at the same time it's in open theaters and before it's available to all Disney+ subscribers on June 4, 2021.",
      subtitle: "2021 • 1h 52m • Family, Fantasy, Animation, Action-Adventure",
      title: "Legends",
      titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7D8EFFDD30B2A0E205DDD9929207439B21E7595709769F2A23C50457664FFB2/scale?width=1440&aspectRatio=1.78",
      type: "original",
    },
    {
    id: 2,
    backgroundImg: "https://images.moviesanywhere.com/5b2c656f643292cfd35771668badc820/44dda68f-dfb2-4974-97aa-239f27e6951f.jpg",
    cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg",
    description: "Moana sets sail on a daring mission to save her people. Along the way, she meets the mighty demigod Maui–together they cross the ocean on a fun-filled, action-packed voyage from Walt Disney Animation Studios.",
    subtitle: "2016 • 1h 47m • Family, Fantasy, Animation, Action-Adventure, Musical",
    title: "Legends",
    titleImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9562874BAB22B22A698368819B9EBF30FEB0291543552EB2416A5A61A73F63F4/scale?width=1440&aspectRatio=1.78",
    type: "original",
    },
  ])
}
