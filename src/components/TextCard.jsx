import React from 'react';

const TextCard = ({ className, textClass }) => {
  return (
    <div className={className}>
      <h2 className='font-semibold text-3xl'>Lorem Ipsum is simply dummy text of the printing. </h2>
      <p className={`text-[#545454] text-wrap ` + textClass}>WebNex TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
    </div>
  )
}

export default TextCard;
