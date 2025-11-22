'use client'
import { memo } from 'react';
import TargetCursor from './TargetCursor';

const Bootom = () => {
  return (
    <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      
      <h1 className="font-mono text-6xl">ARE YOU</h1>
      <button className="cursor-target pl-10 pr-10 pt-5 pb-5 w-full mt-10 font-mono border-dashed border-2 rounded-xl border-purple-300 text-3xl"> <a href="">Ready?</a></button>
      
    </div>
  );
};

export default memo(Bootom);