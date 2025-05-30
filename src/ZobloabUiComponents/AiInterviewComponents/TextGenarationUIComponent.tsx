"use client";
import { useEffect } from 'react';
import { TextGenerateEffect } from '../../components/ui/text-generate-effect';
export function TextGenarationUIComponent({word}:any) {
    useEffect(()=>{
          
    },[word])

  return <TextGenerateEffect duration={2} filter={false} words={word} />;
}
